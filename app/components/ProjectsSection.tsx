export function ProjectsSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* PHOBO */}
        <article className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="aspect-[4/3] max-h-[360px] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800" />
            <div className="flex gap-4">
              <div className="aspect-square w-24 rounded-lg bg-zinc-200 dark:bg-zinc-700" />
              <div className="aspect-square w-24 rounded-lg bg-zinc-200 dark:bg-zinc-700" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              PHOBO
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Fast Casual Vietnamese Restaurant
            </p>
            <p className="mt-6 text-zinc-600 dark:text-zinc-300">
              Founded in 2016, PhoBo positioned itself as a contemporary Vietnamese fast-casual concept combining modern design, technology, and an open-kitchen experience.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-black dark:text-white underline decoration-2 decoration-[#F25C4D] underline-offset-2">
                Challenge
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Develop a comprehensive visual identity and scalable design system to support the brand&apos;s evolution from a local café to an international franchise.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-black dark:text-white underline decoration-2 decoration-[#F25C4D] underline-offset-2">
                Solutions
              </h3>
              <div className="mt-3 space-y-3">
                <div>
                  <span className="inline-block bg-[#F25C4D] px-3 py-1 text-sm font-medium text-white">
                    Brand Development
                  </span>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                    Built a cohesive brand identity aligned with the restaurant&apos;s modern, clean, and welcoming positioning across physical and digital environments.
                  </p>
                </div>
                <div>
                  <span className="inline-block bg-[#F25C4D] px-3 py-1 text-sm font-medium text-white">
                    Menu Design
                  </span>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                    Designed multilingual menus (Russian, English, Chinese, Arabic, Armenian) ensuring clarity, cultural sensitivity, and seamless adaptation to in-store digital displays.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-black dark:text-white underline decoration-2 decoration-[#F25C4D] underline-offset-2">
                Scope
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Brand identity, menu system (multi-lingual & digital), in-store graphics, franchise-ready materials.
              </p>
            </div>
          </div>
        </article>

        {/* SI MOTORS */}
        <article className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 lg:order-2">
            <div className="aspect-[4/3] max-h-[360px] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800" />
          </div>
          <div className="lg:order-1">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              SI MOTORS
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              The Auto Parts Store and Auto Service
            </p>
            <p className="mt-6 text-zinc-600 dark:text-zinc-300">
              Specialized stores of spare parts for European cars with more than 32,000 positions of spare parts always available, and a network of its own auto repair shops.
            </p>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-black dark:text-white underline decoration-2 decoration-[#F25C4D] underline-offset-2">
                Formation of a Positive Image
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                Focused on the competitive advantages of the company such as a wide range and quality guarantee. Created a positive image in corporate materials as a tool for demonstrating values and mission, strengthening loyalty and trust of customers.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
