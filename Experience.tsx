import SectionHeading from "./SectionHeading";
import RevealGroup from "./RevealGroup";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="02"
          title="Career Journey"
          lead="Seven years across technology, education and finance — each role adding a different lens on how complex work actually gets delivered."
        />

        <RevealGroup className="relative pl-8 md:pl-10 border-l border-midnight-border flex flex-col gap-14">
          {experience.map((job) => (
            <div key={job.company} className="reveal relative">
              <span className="absolute -left-[41px] md:-left-[49px] top-1 w-3 h-3 rounded-full bg-midnight border-2 border-coral" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                <h3 className="font-display text-xl text-frost">{job.role}</h3>
                <span className="text-coral text-sm font-medium">{job.period}</span>
              </div>
              <p className="text-frost-soft text-sm mb-4">{job.company}</p>
              <p className="text-frost-soft leading-relaxed mb-4 max-w-2xl">{job.summary}</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
                {job.highlights.map((h) => (
                  <li key={h} className="text-frost-soft text-sm leading-relaxed flex gap-2">
                    <span className="text-coral mt-1.5 w-1 h-1 rounded-full bg-coral shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
