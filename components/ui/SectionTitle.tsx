interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-14">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}