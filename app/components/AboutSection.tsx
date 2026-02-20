import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#1E1E80] px-6 py-20 sm:py-24 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 text-white lg:max-w-[50%]">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Creative genius fused with advanced AI
          </h2>
          <ul className="mt-6 list-none space-y-3 text-lg leading-relaxed text-white/95 sm:text-xl">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-white" aria-hidden />
              So you get sharper visuals, smarter videos, and more relatable campaigns. Delivered at break-neck speed, and all without breaking the bank.
            </li>
          </ul>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-white underline decoration-2 underline-offset-4 transition hover:decoration-[#F25C4D]"
          >
            <span aria-hidden>→</span>
            Find Out More
          </Link>
        </div>
        <div className="relative h-[320px] w-full max-w-md flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-sky-600 to-sky-900 sm:h-[380px] lg:max-w-[420px]">
          <div className="absolute inset-0 bg-[linear-gradient(to_left,transparent_0%,rgba(30,30,128,0.3)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-sky-900/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
