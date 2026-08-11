import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

import AIAssistantPreview from "./previews/AIAssistantPreview";
import DashboardPreview from "./previews/DashboardPreview";
import TourismPreview from "./previews/TourismPreview";
import MappingPreview from "./previews/MappingPreview";
import DocsPreview from "./previews/DocsPreview";

interface ProductCardProps {
  product: {
    title: string;
    subtitle: string;
    description: string;

    icon: React.ElementType;

    stack: string[];

    status: "Live" | "In Development" | "Prototype" | "Coming Soon";

    href: string;

    button: string;

    external?: boolean;

    preview:
      | "assistant"
      | "dashboard"
      | "tourism"
      | "mapping"
      | "docs";

    featured?: boolean;
  };
}

const statusColors: Record<string, string> = {
  "Live Demo": "bg-emerald-500",
  "In Development": "bg-blue-500",
  Prototype: "bg-violet-500",
  "Coming Soon": "bg-amber-500",
};

function renderPreview(preview: string) {

    switch (preview) {

        case "assistant":
            return <AIAssistantPreview />;

        case "dashboard":
            return <DashboardPreview />;

        case "tourism":
            return <TourismPreview />;

        case "mapping":
            return <MappingPreview />;

        case "docs":
            return <DocsPreview />;

        default:
            return null;
    }
}

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]
    "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">

        {/* Icon */}

<div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
  {renderPreview(product.preview)}
</div>

<div className="mb-6 flex items-center gap-4">

  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-cyan-500/10
      text-cyan-400
    "
  >
    <Icon size={28} />
  </div>

  <div>

    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
      {product.subtitle}
    </p>

    <h3 className="text-2xl font-bold text-white">
      {product.title}
    </h3>

  </div>

</div>

<p className="leading-7 text-slate-300">
  {product.description}
</p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">
          {product.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Status */}

        <div className="mt-8 flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              statusColors[product.status]
            }`}
          />

          <span className="text-sm text-slate-400">
            {product.status}
          </span>
        </div>

        {/* Button */}

 <Link
  href={product.href}
  target={product.external ? "_blank" : "_self"}
  rel={product.external ? "noopener noreferrer" : undefined}
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    font-medium
    text-cyan-400
    transition-all
    duration-300
    hover:text-cyan-300
    group-hover:gap-4
  "
>
  {product.button}

  <ArrowRight size={18} />
</Link>
      </div>
    </div>
  );
}