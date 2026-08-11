interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="font-semibold uppercase tracking-[0.25em] text-teal-400">
        {badge}
      </span>

      <h2 className="mt-5 text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}