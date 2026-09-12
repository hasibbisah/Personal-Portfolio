import SectionHeading from "./SectionHeading";
import RevealGroup from "./RevealGroup";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          index="03"
          title="Featured Projects"
          lead="A closer look at three initiatives, from the problem they addressed to the measurable outcome."
        />

        <RevealGroup className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group bg-midnight-surface border border-midnight-border rounded-lg p-7 flex flex-col hover:border-coral/50 transition-colors duration-300"
            >
              <p className="text-coral text-xs font-medium mb-2">{p.org}</p>
              <h3 className="font-display text-lg text-frost mb-5">{p.title}</h3>

              <div className="flex flex-col gap-4 mb-6 flex-1">
                <div>
                  <p className="text-frost-muted text-xs mb-1">Challenge</p>
                  <p className="text-frost-soft text-sm leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <p className="text-frost-muted text-xs mb-1">Action</p>
                  <ul className="flex flex-col gap-1">
                    {p.actions.map((a) => (
                      <li key={a} className="text-frost-soft text-sm leading-relaxed flex gap-2">
                        <span className="text-coral mt-1.5 w-1 h-1 rounded-full bg-coral shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-frost-muted text-xs mb-1">Impact</p>
                  <p className="text-frost text-sm leading-relaxed">{p.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-midnight-border">
                {p.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] text-frost-soft border border-midnight-border rounded px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
