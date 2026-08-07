import {
    ClipboardList,
    MapPin,
    BarChart3,
    Monitor,
    type LucideIcon,
  } from "lucide-react";
  
  const iconMap: Record<string, LucideIcon> = {
    ClipboardList,
    MapPin,
    BarChart3,
    Monitor,
  };
  
  interface ServiceIconProps {
    icon: string;
    className?: string;
  }
  
  export function ServiceIcon({ icon, className = "" }: ServiceIconProps) {
    const Icon = iconMap[icon] || ClipboardList;
    return <Icon className={className} strokeWidth={1.5} />;
  }