import SectionHeading from "./SectionHeading";

const pillars = [
  {
    label: "What I Do",
    body: "Project coordination, product delivery, stakeholder management and digital transformation — the connective work that keeps complex initiatives moving.",
  },
  {
    label: "What Drives Me",
    body: "Building scalable solutions that create measurable impact, for organizations and for the communities their products reach.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading index="01" title="About Me" />

        <div className="grid md:grid-cols-[1fr_1fr] gap-14">
          <div className="reveal">
            <h3 className="font-display text-xl text-frost mb-4">Who I Am</h3>
            <p className="text-frost-soft leading-relaxed mb-4">
              I&apos;m a project coordination and development professional with 7+ years
              spent at the intersection of technology, education, research and community
              development. I started in classrooms and grant-funded programs, then moved
              into EdTech and enterprise IT — and along the way I learned that the hardest
              part of any initiative is rarely the idea. It&apos;s getting business,
              technology, operations and users to move in the same direction.
            </p>
            <p className="text-frost-soft leading-relaxed">
              That&apos;s the work I do now at BRAC IT Service Limited, coordinating
              cross-functional IT and product initiatives for BRAC International&apos;s
              microfinance operations across multiple countries — and it&apos;s the
              direction I&apos;m building toward: product management and digital
              transformation roles where structured thinking meets real-world delivery.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {pillars.map((p) => (
              <div key={p.label} className="reveal border-l border-midnight-border pl-6">
                <h4 className="font-display text-frost text-lg mb-2">{p.label}</h4>
                <p className="text-frost-soft leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
