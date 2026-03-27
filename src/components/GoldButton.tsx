import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function GoldButton({ href, children, className }: GoldButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-4 bg-transparent border border-gold px-8 py-4 font-sans text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500",
        className
      )}
    >
      <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
      <span className="relative z-10 text-gold group-hover:text-navy transition-colors duration-500">
        {children}
      </span>
      <ArrowRight 
        size={16} 
        className="relative z-10 text-gold group-hover:text-navy group-hover:translate-x-1 transition-all duration-500" 
      />
    </Link>
  );
}
