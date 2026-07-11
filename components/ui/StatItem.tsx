interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({
  value,
  label,
}: StatItemProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}