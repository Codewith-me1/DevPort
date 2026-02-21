const EXPERIENCES = [
  {
    company: "PT. Paragon Technology And Innovation (Kahf)",
    role: "Digital Transformation Specialist",
    period: "July 2024 - Jan 2025",
    description: "Managed end-to-end Kahf TikTok strategy and digital transformation initiatives.",
    color: "bg-amber-500",
  },
  {
    company: "Joyy.Inc (Hago App) - Operations",
    role: "Social Media & KOL",
    period: "2023 - 2024",
    description: "Developed and executed social media campaigns and KOL partnerships.",
    color: "bg-violet-500",
  },
  {
    company: "Bluebird Group",
    role: "Product Manager",
    period: "2022 - 2023",
    description: "Led product development and roadmap for mobility solutions.",
    color: "bg-blue-500",
  },
  {
    company: "Lazada (Alibaba Group)",
    role: "User Growth Affiliate",
    period: "2021 - 2022",
    description: "Drove user acquisition and growth through affiliate channels.",
    color: "bg-orange-500",
  },
  {
    company: "Harian Kompas",
    role: "Growth Marketing",
    period: "2020 - 2021",
    description: "Executed growth and marketing campaigns for digital media.",
    color: "bg-red-600",
  },
];

export function ExperienceSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-black dark:text-white sm:text-3xl">
          experience.
        </h2>
        <div className="mt-10 space-y-0">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className="relative flex gap-6 border-l-2 border-zinc-200 py-8 pl-8 dark:border-zinc-700 sm:pl-10"
            >
              <div
                className={`absolute left-0 top-10 h-3 w-3 -translate-x-[7px] rounded-full ${exp.color}`}
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {exp.company}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-[#F25C4D]">{exp.role}</p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
