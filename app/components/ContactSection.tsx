export function ContactSection() {
  return (
    <section id="contact" className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-zinc-600 dark:text-zinc-400">
          Ready to build your brand and cut through the noise? Let&apos;s talk.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#F25C4D] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#e04a3d]"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
