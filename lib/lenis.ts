import Lenis from "lenis";
import gsap from "gsap";

export const lenis = new Lenis({
  smoothWheel: true,
  lerp: 0.08,
});

function raf(time: number) {
  lenis.raf(time);
  gsap.ticker.tick();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);