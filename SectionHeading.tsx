export default function SectionHeading({
  index,
  title,
  lead,
}: {
  index: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mb-14 flex items-start gap-5">
      <span className="font-display text-coral text-sm mt-2 shrink-0">{index}</span>
      <div>
        <h2 className="font-display text-3xl md:text-4xl text-frost mb-3 text-balance">
          {title}
        </h2>
        {lead && <p className="text-frost-soft max-w-xl leading-relaxed">{lead}</p>}
      </div>
    </div>
  );
}
