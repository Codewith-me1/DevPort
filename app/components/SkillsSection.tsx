const SKILL_TAGS = [
  "Content & Branding",
  "Growth Marketing",
  "Social Media & Strategy",
  "Analytics",
  "Marketing Strategy",
  "Brand Management",
  "Creative Campaign",
];

export function SkillsSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-black dark:text-white sm:text-3xl">
          *skills.
        </h2>
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-10">
          {SKILL_TAGS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border-2 border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:border-[#F25C4D] hover:bg-[#F25C4D]/5 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:hover:border-[#F25C4D] dark:hover:bg-[#F25C4D]/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
