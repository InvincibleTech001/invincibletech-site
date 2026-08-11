interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
      rounded-full
      border
      border-cyan-500/20
      bg-cyan-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-cyan-300
    "
    >
      {children}
    </span>
  );
}