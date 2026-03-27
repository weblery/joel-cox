"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "@/components/animations/AnimatedText";
import ParallaxImage from "@/components/animations/ParallaxImage";
import GoldButton from "@/components/GoldButton";
import { Scale, ArrowRight } from "lucide-react";

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Hero image parallax
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hero content fade-ins
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 1.4,
        }
      );

      // Hero decoration lines
      gsap.fromTo(
        ".hero-line-y",
        { scaleY: 0 },
        { scaleY: 1, duration: 1.5, ease: "expo.out", delay: 1 }
      );

      // Stats counter animation
      const counters = gsap.utils.toArray<HTMLElement>(".stat-number");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
          },
        });
      });

      // Principles sticky scroll
      gsap.fromTo(
        ".principles-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".principles-wrapper",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="bg-pearl font-sans text-navy">
      {/* Hero Section */}
      <section data-theme="dark" className="hero-section relative min-h-screen w-full overflow-hidden bg-navy flex flex-col justify-center pt-24 pb-12">
        {/* Artistic background split layout */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-[15%] md:w-[35%] lg:w-[45%] h-full bg-navy relative z-10 hidden sm:block" />
          <div className="w-full sm:w-[85%] md:w-[65%] lg:w-[45%] xl:w-[50%] h-[70%] lg:h-[65%] my-auto mr-0 md:mr-10 lg:mr-20 relative hero-bg">
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-navy/30 z-10 mix-blend-multiply" />
            <Image
              src="/cox1.webp"
              alt="Joel Cox Advocates Hero"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        
        {/* Floating background typography */}
        <div className="absolute top-40 -left-10 md:-left-20 lg:top-1/3 lg:-left-32 z-0 opacity-[0.03] select-none pointer-events-none rotate-90 origin-left">
          <span className="font-serif text-[15vw] font-bold text-pearl whitespace-nowrap">
            EST. 1990
          </span>
        </div>

        <div className="relative z-20 w-full px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto flex flex-col justify-between h-full pt-10">
          
          {/* Top Info Bar */}
          <div className="flex justify-between items-center w-full mb-12 lg:mb-20">
            <div className="hero-fade flex items-center gap-4">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-gold font-medium">
                01 / Introduction
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Main Creative CTA Area */}
            <div className="lg:col-span-8 flex flex-col items-start">
              
              <div className="overflow-hidden mb-6 mt-12 md:mt-0">
                <h3 className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-gold font-medium animate-[fade-in_1s_ease-out_0.5s_forwards] opacity-0 leading-relaxed md:leading-normal">
                  Joel Cox Advocates <br className="md:hidden" /><span className="hidden md:inline"> — </span>Commissioners for Oaths & Notary Public
                </h3>
              </div>

              <div className="relative w-full max-w-4xl z-20">
                <AnimatedText 
                  text="AUTHORITY &"
                  as="h2"
                  className="font-serif text-5xl sm:text-6xl lg:text-[6rem] text-pearl/90 mb-2 leading-none"
                  delay={0.2}
                  wordMode
                />
                <div className="flex flex-col md:flex-row md:items-end gap-0 md:gap-8 mb-8">
                  <AnimatedText 
                    text="EXCELLENCE."
                    as="h1"
                    className="font-serif text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7.5rem] leading-[0.85] text-pearl font-bold tracking-tighter"
                    delay={0.6}
                    wordMode={false}
                  />
                  <div className="h-24 w-[2px] bg-gold/70 hidden md:block hero-line-y origin-bottom mb-4" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 items-start mt-6">
                <div className="hero-fade flex-1 max-w-lg">
                  <p className="font-sans text-sm md:text-base lg:text-lg text-pearl/80 font-light leading-tight">
                    We provide uncompromising legal representation, guiding individuals and global enterprises through their most critical challenges with absolute precision and unmatched discretion.
                  </p>
                </div>
                
                <div className="hero-fade flex flex-col gap-5 min-w-[260px] md:border-l md:border-gold/20 md:pl-8 pt-2">
                  <GoldButton href="/contact">Schedule Consultation</GoldButton>
                  <Link href="/services" className="group flex items-center gap-3 text-pearl hover:text-gold transition-colors font-sans text-xs md:text-sm uppercase tracking-widest py-2 px-1">
                    <span className="relative">
                      Explore Practices
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                    </span>
                    <ArrowRight size={16} className="text-gold -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </div>
              </div>
              
            </div>

            {/* Right Side Stats Panel */}
            <div className="lg:col-span-4 hidden lg:flex flex-col justify-end h-full w-full">
              <div className="hero-fade bg-white/5 backdrop-blur-sm border border-pearl/10 p-10 flex flex-col gap-8 w-full max-w-[320px] ml-auto">
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">Heritage</h4>
                  <p className="font-serif text-4xl text-pearl">34+ Years</p>
                </div>
                <div className="w-full h-[1px] bg-pearl/10" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">Recognition</h4>
                  <p className="font-serif text-4xl text-pearl">Top Tier Firm</p>
                </div>
              </div>
            </div>

          </div>
          
          {/* Bottom Bar Scroll Indicator */}
          <div className="hidden lg:flex justify-between items-center w-full mt-24 pt-8 border-t border-pearl/10">
             <div className="hero-fade text-pearl/40 font-sans text-[10px] tracking-[0.3em] uppercase">
               Scroll to explore
             </div>
             <div className="hero-fade flex items-center gap-6">
                <div className="text-pearl/40 font-sans text-[10px] tracking-[0.3em] uppercase">Joel Cox Associates</div>
                <div className="w-16 h-[1px] bg-gold/50 relative overflow-hidden" />
             </div>
          </div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section data-theme="light" className="py-24 lg:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-4">Our Legacy</h3>
            <AnimatedText 
              text="A bedrock principle of uncompromised standard."
              wordMode
              className="font-serif text-4xl lg:text-5xl leading-[0.95]! text-navy leading-tight mb-8"
            />
            <p className="text-charcoal/80 text-lg leading-tight mb-6">
              Joel Cox Advocates is a full-service law firm offering comprehensive legal solutions across all major practice areas. With over 30 years of experience, our firm has built a reputation for professionalism, strategic insight, and a results-driven approach.
            </p>
            <p className="text-charcoal/80 text-lg leading-tight mb-10">
              Founded on the principles of professionalism, accountability, and excellence, Joel Cox Advocates has built a reputation for reliability, efficiency, and results-oriented representation.
            </p>
            <GoldButton href="/contact">Schedule Consultation</GoldButton>
          </div>
          <div className="grid grid-cols-2 gap-8 principles-wrapper">
            <div className="bg-white p-8 border border-gold/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] principles-content">
              <div className="flex items-center gap-2 text-gold mb-2">
                <span className="stat-number font-serif text-5xl font-bold" data-target="700">0</span>
                <span className="font-serif text-5xl font-bold">+</span>
              </div>
              <p className="font-sans text-sm uppercase tracking-wider text-charcoal/60">Businesses Registered</p>
            </div>
            <div className="bg-white p-8 border border-gold/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] translate-y-12 principles-content">
              <div className="flex items-center gap-2 text-navy mb-2">
                <span className="stat-number font-serif text-5xl font-bold" data-target="1201">0</span>
              </div>
              <p className="font-sans text-sm uppercase tracking-wider text-charcoal/60">Property Transactions</p>
            </div>
            <div className="bg-navy p-8 text-pearl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] principles-content">
              <div className="flex items-center gap-2 text-gold mb-2">
                <span className="stat-number font-serif text-5xl font-bold" data-target="3000">0</span>
                <span className="font-serif text-5xl font-bold">+</span>
              </div>
              <p className="font-sans text-sm uppercase tracking-wider text-pearl/60">Clients Represented</p>
            </div>
            <div className="bg-white p-8 border border-gold/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] translate-y-12 principles-content">
              <div className="flex items-center gap-2 text-gold mb-2">
                <span className="stat-number font-serif text-5xl font-bold" data-target="500">0</span>
                <span className="font-serif text-5xl font-bold">+</span>
              </div>
              <p className="font-sans text-sm uppercase tracking-wider text-charcoal/60">Disputes Resolved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Foreword Section */}
      <section className="bg-navy py-24 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] overflow-hidden">
            <ParallaxImage 
              src="/cox1.webp"
              alt="Joel Cox Ojuko"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10" />
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-8">Managing Partner&apos;s Foreword</h3>
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-gold/20 font-serif text-[10rem] leading-none select-none">&ldquo;</span>
              <p className="font-serif text-2xl md:text-3xl text-pearl/90 leading-relaxed mb-8 italic relative z-10">
                Since founding Joel Cox Advocates, our mission has been to deliver exceptional legal services with integrity, precision, and unwavering commitment to our clients.
              </p>
              <div className="space-y-6 text-pearl/70 text-lg font-light leading-relaxed">
                <p>
                  Over the past decades, we have grown from a small practice into a leading full-service law firm in Uganda, serving a diverse portfolio of corporate, governmental, and private clients. Our commitment to excellence is reflected not only in our landmark cases but also in the enduring relationships we maintain with our clients and partners across the country.
                </p>
                <p>
                  Our Firm insists on the highest professional standards in handling all our assignments. It has been our bedrock principle to offer all our clients value-for-money services, and we make no compromises on our professional standards as we strive for excellence in our specialized areas of Practice.
                </p>
              </div>
              <div className="mt-12">
                <p className="font-serif text-2xl text-gold">Joel Cox Ojuko</p>
                <p className="font-sans text-xs uppercase tracking-widest text-pearl/50">Managing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Parallax Break */}
      <section data-theme="dark" className="w-full h-[20vh] relative">
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1505664177922-9818ab9380f5?q=80&w=2000"
          alt="Legal Library"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-navy flex items-center justify-center">
          <Scale size={64} className="text-gold/80" strokeWidth={1} />
        </div>
      </section>

      {/* Practice Areas Summary */}
      <section data-theme="light" className="py-24 lg:py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-4">Areas of Practice</h3>
            <AnimatedText 
              text="Specialized expertise for complex matters."
              wordMode
              className="font-serif text-4xl lg:text-5xl text-navy leading-[0.9]"
            />
          </div>
          <GoldButton href="/services">View All Services</GoldButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {[
            { title: "Company Law & URSB", desc: "Specialized URSB registration branch guiding businesses through formation and corporate governance.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" },
            { title: "Civil Litigation", desc: "Fierce advocacy in the courtroom to protect your rights and secure favorable outcomes.", img: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80&w=2000" },
            { title: "Real Estate Property", desc: "Navigating complex property transactions, zoning laws, and dispute resolutions.", img: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2000" },
            { title: "Family Law", desc: "Compassionate counsel for sensitive family matters, ensuring your future is protected.", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000" },
          ].map((area, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[300px] w-full overflow-hidden mb-6">
                <Image 
                  src={area.img}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="font-serif text-2xl text-navy mb-3 group-hover:text-gold transition-colors">{area.title}</h4>
              <p className="text-charcoal/70">{area.desc}</p>
              <div className="h-[1px] w-full bg-navy/10 mt-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
