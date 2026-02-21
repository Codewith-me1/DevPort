const CERTIFICATES = [
  { name: "Google Project Management: Professional Certificate", source: "Coursera" },
  { name: "Google Data Analytics Professional Certificate", source: "Coursera" },
  { name: "Digital Product Management Professional Certificate", source: "Coursera" },
  { name: "Marketing in Digital Virtual Professional Certificate", source: "Coursera" },
  { name: "Successful Negotiation: Essential Strategies", source: "University of Michigan" },
];

export function CertificatesSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium text-[#F25C4D]">Discover my Professional Certificate</p>
        <h2 className="mt-2 text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Professional Certificate
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.name}
              className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 transition hover:border-[#F25C4D]/50 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <div className="aspect-[3/4] bg-zinc-200 dark:bg-zinc-800" />
              <div className="p-4">
                <p className="text-sm font-medium text-black dark:text-white">{cert.name}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
