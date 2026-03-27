"use client";

import { useState } from "react";
import AnimatedText from "@/components/animations/AnimatedText";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "256702427466";
    const text = `New Inquiry from Joel Cox Advocates Website:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Inquiry: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div data-theme="dark" className="bg-navy font-sans text-pearl min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-6">Get in Touch</h3>
            <AnimatedText 
              text="CONFIDENTIAL CONSULTATION"
              as="h1"
              className="font-serif text-5xl md:text-6xl text-pearl leading-tighter! mb-12"
              wordMode
            />
            
            <p className="text-lg text-pearl/80 leading-relaxed font-light mb-16">
              Our attorneys are available for discreet, confidential consultations regarding your legal matters. Please provide brief details of your matter, and we will direct your inquiry to the appropriate partner.
            </p>

            <div className="flex flex-col gap-10">
              <div>
                <h4 className="font-serif text-2xl text-gold mb-2">Main Chambers</h4>
                <p className="text-pearl/80 leading-relaxed font-light">
                  Insurance House, 1st floor suite F-12<br />
                  Plot 14, Kampala Road<br />
                  P.O BOX 801390 Kampala (U)
                </p>
              </div>

              <div>
                <h4 className="font-serif text-2xl text-gold mb-2">Regional Branches</h4>
                <p className="text-pearl/80 leading-relaxed font-light">
                  • Arua City Chambers<br />
                  • Nebbi District Branch
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-2xl text-gold mb-2">Direct Contact</h4>
                <p className="text-pearl/80 leading-relaxed font-light flex flex-col gap-1">
                  <a href="tel:+256772581885" className="hover:text-gold transition-colors">+256 772 581 885</a>
                  <a href="tel:+256701581885" className="hover:text-gold transition-colors">+256 701 581 885</a>
                  <a href="mailto:info@joelcoxadvocates.com" className="hover:text-gold transition-colors">info@joelcoxadvocates.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 md:p-14 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl mix-blend-multiply" />
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-navy font-sans text-xs uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors pb-2"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-navy font-sans text-xs uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors pb-2"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-navy font-sans text-xs uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors pb-2"
                  placeholder="+256 700 000 000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-navy font-sans text-xs uppercase tracking-widest">Inquiry Details</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-transparent border-b border-navy/20 py-3 text-navy focus:outline-none focus:border-gold transition-colors pb-2 resize-none"
                  placeholder="Briefly describe your legal needs..."
                />
              </div>

              <div className="mt-4">
                <button type="submit" className="group relative inline-flex items-center gap-4 bg-navy border border-navy px-8 py-4 font-sans text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 w-full justify-center">
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                  <span className="relative z-10 text-pearl group-hover:text-navy transition-colors duration-500">
                    Submit Inquiry
                  </span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
