interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md transition duration-300 hover:border-teal-500/40 hover:-translate-y-1">
      {children}
    </div>
  );
}