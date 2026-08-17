import {
  Search,
  Database,
  BarChart3,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Database,
  BarChart3,
  Cpu,
};

interface ServiceIconProps {
  icon: string;
  className?: string;
}

export function ServiceIcon({ icon, className = "" }: ServiceIconProps) {
  const Icon = iconMap[icon] || Search;
  return <Icon className={className} strokeWidth={1.5} />;
}