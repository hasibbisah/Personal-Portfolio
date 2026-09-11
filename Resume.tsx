import { FileText, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Resume() {
  return (
    <section id="resume" className="py-28 border-t border-midnight-border">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading index="07" title="Resume" />

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="reveal border border-midnight-border rounded-lg p-8 flex flex-col items-start gap-5 bg-midnight-surface">
            <FileText className="text-coral" size={32} />
            <div>
              <h3 className="font-display text-frost text-lg mb-1">
                Full Resume, One PDF
              </h3>
              <p className="text-frost-soft text-sm leading-relaxed">
                Career summary, complete experience history, education and competencies —
                ready to share with your team.
              </p>
            </div>
            <a
              href="/Mohammad_Mesbah_Uddin_Hasib_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-coral text-midnight text-sm font-medium hover:bg-coral-bright transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="reveal">
            <h3 className="font-display text-frost text-lg mb-5">Education</h3>
            <div className="flex flex-col gap-5">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-5 border-b border-midnight-border"
                >
                  <div>
                    <p className="text-frost text-sm font-medium">{e.degree}</p>
                    <p className="text-frost-soft text-sm">{e.institute}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-frost-muted text-xs">{e.period}</p>
                    <p className="text-coral text-xs">{e.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
