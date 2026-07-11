import StatItem from "@/components/ui/StatItem";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
<StatItem value="50+" label="Projects Delivered" />
<StatItem value="15+" label="Technologies Used" />
<StatItem value="100+" label="Data Visualizations" />
<StatItem value="AI-Driven" label="Automation Solutions" />
    </div>
  );
}