import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import "./GradientBlinds.css";

export interface GradientBlindsProps {
  className?: string;
  dpr?: number;
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  distortAmount?: number;
  mixBlendMode?: string;
}

const MAX_COLORS = 8;

const hexToRGB = (hex: string): [number, number, number] => {
  const c = hex.replace("#", "").padEnd(6, "0");
  return [
    parseInt(c.slice(0, 2), 16) / 255,
    parseInt(c.slice(2, 4), 16) / 255,
    parseInt(c.slice(4, 6), 16) / 255,
  ];
};

const prepStops = (stops?: string[]) => {
  const base = (stops?.length ? stops : ["#FF9FFC", "#5227FF"]).slice(
    0,
    MAX_COLORS,
  );

  while (base.length < MAX_COLORS) base.push(base[base.length - 1]);

  return {
    arr: base.map(hexToRGB),
    count: Math.max(2, stops?.length ?? 2),
  };
};

const GradientBlinds: React.FC<GradientBlindsProps> = ({
  className,
  dpr,
  gradientColors,
  angle = 0,
  noise = 0.15,
  blindCount = 18,
  blindMinWidth = 60,
  distortAmount = 0,
  mixBlendMode = "normal",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* =========================
       Renderer
    ========================= */

    const renderer = new Renderer({
      dpr: dpr ?? (typeof window !== "undefined" ? window.devicePixelRatio : 1),
      alpha: true,
      antialias: true,
    });

    rendererRef.current = renderer;
    const gl = renderer.gl;

    container.appendChild(gl.canvas);

    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    gl.canvas.style.display = "block";

    /* =========================
       SHADERS
    ========================= */

    const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main(){
  vUv = uv;
  gl_Position = vec4(position,0.0,1.0);
}
`;

    const fragment = `
precision mediump float;

uniform vec3 iResolution;
uniform float iTime;

uniform float uBlindCount;
uniform float uNoise;
uniform float uDistort;

uniform vec3 uColor0;
uniform vec3 uColor1;

varying vec2 vUv;

float rand(vec2 co){
 return fract(
  sin(dot(co.xy, vec2(12.9898,78.233)))
  * 43758.5453
 );
}

vec3 gradient(float t){
 return mix(uColor0,uColor1,t);
}

void main(){

 vec2 uv = vUv;

 /* =========
    DISTORT
 ========= */
 if(uDistort>0.0){
   uv.x += sin(uv.y*6.0)*0.01*uDistort;
   uv.y += cos(uv.x*6.0)*0.01*uDistort;
 }

 /* =========
    DIAGONAL BLINDS
    Top-right → Bottom-left
 ========= */

 vec2 dir = normalize(vec2(-1.0,1.0));
 float diag = dot(uv,dir);

 float stripe =
   fract(diag * uBlindCount);

 /* =========
    FADE
 ========= */

 float fade =
   smoothstep(0.25,0.85,
   uv.x + uv.y);

 stripe *= (1.0 - fade);

 /* =========
    WHITE BASE
 ========= */

 vec3 base =
   mix(vec3(1.0),
       gradient(uv.x),
       0.8);

 vec3 col = base - vec3(stripe);

 col +=
   (rand(gl_FragCoord.xy+iTime)-0.5)
   * uNoise;

 gl_FragColor = vec4(col,1.0);
}
`;

    /* =========================
       COLORS
    ========================= */

    const { arr } = prepStops(gradientColors);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iResolution: {
          value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1],
        },
        iTime: { value: 0 },

        uBlindCount: { value: blindCount },
        uNoise: { value: noise },
        uDistort: { value: distortAmount },

        uColor0: { value: arr[0] },
        uColor1: { value: arr[1] },
      },
    });

    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    /* =========================
       Resize
    ========================= */

    const resize = () => {
      const rect = container.getBoundingClientRect();

      renderer.setSize(rect.width, rect.height);

      program.uniforms.iResolution.value = [
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        1,
      ];

      const max = Math.floor(rect.width / blindMinWidth) || 1;

      program.uniforms.uBlindCount.value = Math.min(blindCount, max);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    /* =========================
       LOOP
    ========================= */

    const loop = (t: number) => {
      rafRef.current = requestAnimationFrame(loop);

      program.uniforms.iTime.value = t * 0.001;

      renderer.render({
        scene: mesh,
      });
    };

    rafRef.current = requestAnimationFrame(loop);

    /* =========================
       CLEANUP
    ========================= */

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      ro.disconnect();

      container.removeChild(gl.canvas);
    };
  }, [gradientColors, blindCount, distortAmount, noise, dpr]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        mixBlendMode: mixBlendMode as React.CSSProperties["mixBlendMode"],
      }}
    />
  );
};

export default GradientBlinds;
