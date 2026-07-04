interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-teal-500 text-white hover:bg-teal-400 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
      : "border border-slate-700 text-slate-300 hover:border-teal-500 hover:text-white";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}