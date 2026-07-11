import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/20"
      : "border border-slate-700 hover:border-teal-500 text-slate-300 hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-7 py-4 font-semibold transition-all duration-300 hover:scale-105 ${styles}`}
    >
      {children}
    </Link>
  );
}