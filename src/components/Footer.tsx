import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20 pt-20 pb-10 text-pearl/80 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[15vw] font-bold text-gold whitespace-nowrap">
          JOEL COX ADVOCATES
        </span>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col items-start mb-6">
              <span className="font-serif text-3xl text-gold font-bold tracking-wider">
                JOEL COX
              </span>
              <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-pearl/80 mt-1">
                Advocates — Commissioners for Oaths & Notary Public
              </span>
            </Link>
            <p className="font-sans text-sm leading-relaxed mb-6">
              Trusted legal firm guiding individuals and businesses through complex legal challenges with integrity, professionalism, and expertise for over 34 years.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl text-pearl mb-6 border-b border-gold/30 pb-2 inline-block">
              Practice Areas
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li><Link href="/services" className="hover:text-gold transition-colors">Company Law & URSB Registration</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Civil Litigation</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Real Estate & Property</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Family Law</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-pearl mb-6 border-b border-gold/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">Firm History</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Consultation</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/about#team" className="hover:text-gold transition-colors">Our Attorneys</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-pearl mb-6 border-b border-gold/30 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span>
                  Insurance House, 1st floor suite F-12<br />
                  Plot 14, Kampala Road
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold shrink-0" size={18} />
                <div className="flex flex-col">
                  <a href="tel:+256772581885" className="hover:text-gold transition-colors">+256 772 581 885</a>
                  <a href="tel:+256701581885" className="hover:text-gold transition-colors">+256 701 581 885</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold shrink-0" size={18} />
                <a href="mailto:info@joelcoxadvocates.com" className="hover:text-gold transition-colors">info@joelcoxadvocates.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pearl/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-pearl/50">
          <p>© {new Date().getFullYear()} Joel Cox Advocates. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
