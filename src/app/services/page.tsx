"use client";

import { useState } from "react";
import AnimatedText from "@/components/animations/AnimatedText";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Business and Commercial Law",
    description: "Company formation and registration, drafting and review of contracts and agreements, security perfection and debt recovery, joint ventures and shareholder agreements, corporate governance and compliance."
  },
  {
    title: "Immigration and Refugee Law",
    description: "Work and residence permit, visa advisory and appeals, refugee status and regularization support."
  },
  {
    title: "Land, Property, and Real Estate",
    description: "Due diligence and verification of land titles, transfers, conveyancing, and leases, property disputes and acquisitions."
  },
  {
    title: "Civil Litigation and Dispute Resolution",
    description: "Representation before courts and tribunals, mediation and negotiation for dispute settlement."
  },
  {
    title: "Employment and Labour Relations",
    description: "Drafting and review of employment contracts, advisory on HR compliance and disputes."
  },
  {
    title: "Public, Administrative & Constitutional Law",
    description: "Advisory on governance and statutory interpretation, representation in judicial reviews and petitions."
  },
  {
    title: "Notary Public and Commissioner for Oaths",
    description: "Certification and authentication of documents, swearing of affidavits and statutory declarations."
  }
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="font-sans min-h-screen">
      {/* Hero Section */}
      <section data-theme="dark" className="relative h-[60vh] w-full pt-32 pb-16 flex items-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2000"
            alt="Legal Consultation"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-navy/70 z-10" />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 w-full cursor-default">
          <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-4 mt-10">Our Expertise</h3>
          <AnimatedText 
            text="PRACTICE AREAS"
            as="h1"
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-pearl leading-none mb-0"
            wordMode
          />
        </div>
      </section>

      {/* Services List */}
      <section data-theme="light" className="bg-pearl text-navy py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border-t border-navy/20">
            {SERVICES.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="border-b border-navy/20 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-8 md:py-12 flex items-center justify-between text-left group transition-colors hover:text-gold"
                  >
                    <span className="font-serif text-3xl md:text-4xl lg:text-5xl transition-colors">
                      {service.title}
                    </span>
                    <div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-navy/20 group-hover:border-gold transition-colors shrink-0">
                      <span className={cn(
                        "absolute transition-transform duration-500",
                        isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                      )}>
                        <Plus size={16} />
                      </span>
                      <span className={cn(
                        "absolute transition-transform duration-500",
                        isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                      )}>
                        <Minus size={16} />
                      </span>
                    </div>
                  </button>
                  
                  <div 
                    className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-12" : "grid-rows-[0fr] opacity-0 pb-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-3xl pr-8">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
