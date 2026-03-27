import AnimatedText from "@/components/animations/AnimatedText";
import ParallaxImage from "@/components/animations/ParallaxImage";
import Image from "next/image";
import { Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div data-theme="dark" className="bg-navy font-sans text-pearl pt-32 pb-24">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-4 mt-10">Firm History</h3>
        <AnimatedText 
          text="34 YEARS OF EXCELLENCE"
          as="h1"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-pearl leading-none mb-12"
          wordMode
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-lg text-pearl/80 leading-relaxed font-light">
            Founded over three decades ago, Joel Cox Advocates has established itself as a premier sanctuary for legal resolution. We deliver solutions with integrity, professionalism, and expertise, guiding individuals and businesses through the most complex legal challenges of our era.
          </p>
          <p className="text-lg text-pearl/80 leading-relaxed font-light">
            Our Firm insists on the highest professional standards in handling all our assignments. It has been our bedrock principle to offer all our clients value for money services and we make no compromises on our professional standards as we strive for excellence in our specialized areas of Practice.
          </p>
        </div>
      </section>

      {/* Cinematic Image */}
      <section className="w-full h-[70vh]">
        <ParallaxImage 
          src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2000"
          alt="Firm partners discussing"
          className="w-full h-full"
          priority
        />
      </section>

      {/* Story & Timeline */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gold/10">
        <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-16">Our Story</h3>
        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 hidden sm:block" />
          
          <div className="space-y-16 relative">
            {[
              { year: "1990", text: "Joel Cox Ojuko imbued a vision to provide top-tier legal services in Uganda." },
              { year: "1994", text: "Joel Cox Advocates was founded in Kampala, starting its journey as a trailblazer in the legal landscape." },
              { year: "2011", text: "What began as a small practice became a registered law firm and has since grown into one of Kampala’s most trusted firms." },
              { year: "2015", text: "Successfully handled landmark cases in corporate law and land disputes, earning a reputation for excellence." },
              { year: "2017", text: "Expanded operations, opening additional offices in Nebbi Municipal Council to better serve the region." },
              { year: "2019", text: "Client base grew to include prominent organizations like Centenary Rural Development Bank and Meera Investments Limited." },
              { year: "2021", text: "Embraced emerging technologies to enhance service delivery, streamlining business registrations and immigration services." },
              { year: "2026", text: "Continuing to lead the field with innovative solutions, extending chambers to Arua city and Nebbi District for efficient service." }
            ].map((item, i) => (
              <div key={i} className={cn("flex flex-col sm:flex-row items-center gap-8", i % 2 === 0 ? "sm:flex-row-reverse" : "")}>
                <div className="sm:w-1/2 flex justify-center sm:justify-end sm:px-12">
                  <div className={cn("text-right", i % 2 === 0 ? "sm:text-left" : "sm:text-right")}>
                    <span className="font-serif text-4xl text-gold mb-2 block">{item.year}</span>
                    <p className="text-pearl/70 font-light leading-relaxed max-w-md">{item.text}</p>
                  </div>
                </div>
                <div className="absolute left-[15px] md:left-1/2 -ml-[6px] w-3 h-3 rounded-full bg-gold z-10 hidden sm:block" />
                <div className="sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-4">Our Vision</h3>
              <p className="font-serif text-2xl text-pearl/90 leading-relaxed italic">
                To be Uganda’s most trusted and client-focused law firm, recognized for legal excellence and unwavering dedication.
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-4">Our Mission</h3>
              <p className="font-serif text-2xl text-pearl/90 leading-relaxed italic">
                To deliver responsive, innovative, and effective legal solutions that empower individuals and institutions.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Integrity", desc: "Upholding the highest ethical and professional standards." },
                { title: "Excellence", desc: "Striving for superior service and precision in every engagement." },
                { title: "Professionalism", desc: "Maintaining discipline, respect, and fairness in all dealings." },
                { title: "Confidentiality", desc: "Protecting client information with absolute discretion." },
                { title: "Accountability", desc: "Taking full responsibility for the quality and timeliness of our work." },
                { title: "Client Commitment", desc: "Prioritizing clients’ needs and goals in all engagements." }
              ].map((value, i) => (
                <div key={i} className="p-6 bg-white/5 border border-pearl/10">
                  <h4 className="font-serif text-xl text-gold mb-2">{value.title}</h4>
                  <p className="text-pearl/60 text-sm font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gold/10">
        <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-8">Our Team and Leadership</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <p className="text-xl text-pearl/90 leading-relaxed font-light">
            Our team at Joel Cox Advocates comprises highly experienced legal professionals, blending deep expertise with practical insight. We pride ourselves on our multidisciplinary approach, ensuring every client receives tailored solutions that meet their strategic objectives.
          </p>
          <p className="text-xl text-pearl/90 leading-relaxed font-light">
            At the heart of our firm is a team of highly skilled attorneys, each bringing unmatched expertise and dedication to their craft. With diverse specializations and combined experience, our attorneys are committed to delivering tailored legal solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
          <div className="md:col-span-5 relative h-[600px] overflow-hidden group">
            <Image
              src="/cox1.webp"
              alt="Joel Cox Ojuko"
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="md:col-span-7">
            <h4 className="font-serif text-3xl md:text-4xl text-pearl mb-2">Joel Cox Ojuko, Esq.</h4>
            <p className="text-gold text-sm tracking-widest uppercase mb-6">Managing Partner & Founder</p>
            <div className="space-y-6 text-lg text-pearl/80 leading-relaxed font-light">
              <p>
                Founder of Joel Cox Advocates, with an extraordinary career spanning 34 years, Joel Cox Ojuko is widely regarded as one of Uganda’s most distinguished and sought-after legal experts.
              </p>
              <p>
                Mr. Ojuko also serves in the government as the vice chairperson of the Equal Opportunities Commission. As the visionary leader of Joel Cox Advocates, Joel’s dedication and unparalleled expertise have made him a pillar of excellence and a trusted authority in Uganda’s legal landscape.
              </p>
            </div>
          </div>
        </div>

        <h4 className="font-serif text-2xl text-gold mb-12">Legal Associates</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Amaniyo Hope Bridget Esq", phone: "0782065172" },
            { name: "Barnabus Kirungi Esq.", phone: "0788961519 / 0701866134" },
            { name: "Adubango Collins Esq", phone: "0773286124" },
            { name: "Norah Namaganda Esq", phone: "0756313166" },
          ].map((associate, i) => (
            <div key={i} className="p-8 bg-white/5 border border-pearl/10 hover:border-gold/50 transition-colors group">
              <h5 className="font-serif text-xl text-pearl mb-4 group-hover:text-gold transition-colors">{associate.name}</h5>
              <p className="text-pearl/60 text-sm font-sans tracking-wider uppercase mb-1">Contact</p>
              <p className="text-gold font-sans text-sm">{associate.phone}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gold/10">
        <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-16">Client Portfolio and Relationships</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <p className="text-lg text-pearl/80 leading-relaxed font-light">
              Joel Cox Advocates serves a diverse client base, ranging from government ministries and agencies to multinational corporations, NGOs, and individuals. Our clients trust us for our integrity, discretion, and results-driven approach.
            </p>
            <div className="h-[1px] w-full bg-gold/20" />
            <p className="text-pearl/60 italic font-light">
              &quot;Our long-term relationships with clients are built on trust, transparency, and consistent delivery of high-quality legal services.&quot;
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Government Ministries and Public Agencies",
                "Corporations and Financial Institutions",
                "Local and International NGOs",
                "Real Estate Developers and Private Investors",
                "Professional Associations",
                "Individuals"
              ].map((client, i) => (
                <div key={i} className="flex items-center gap-4 py-4 border-b border-pearl/10">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-pearl text-lg font-light tracking-wide">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Landmark Cases and Achievements */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-gold mb-16">Landmark Cases and Achievements</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border-l-2 border-gold">
                <h5 className="font-serif text-xl text-gold mb-3">Presidential Petition No.1 of 2006</h5>
                <p className="text-pearl/70 leading-relaxed font-light">Part of the legal representation in RTD Col Dr Kizza Besigye vs Yoweri Kaguta Museveni.</p>
              </div>
              <div className="p-8 bg-white/5 border-l-2 border-gold">
                <h5 className="font-serif text-xl text-gold mb-3">Global Trust Bank Suit</h5>
                <p className="text-pearl/70 leading-relaxed font-light">Osaga Yasin versus Global Trust Bank civil suit no 0016 of 2018.</p>
              </div>
              <div className="p-8 bg-white/5 border-l-2 border-gold">
                <h5 className="font-serif text-xl text-gold mb-3">EA Court of Justice Appeal</h5>
                <p className="text-pearl/70 leading-relaxed font-light">Center For Food and Adequate Living Rights Limited and 3 others versus the A.G of Uganda and 2 others.</p>
              </div>
              <div className="p-8 bg-white/5 border-l-2 border-gold">
                <h5 className="font-serif text-xl text-gold mb-3">Institutional Banking</h5>
                <p className="text-pearl/70 leading-relaxed font-light">Premier partner for Centenary, DFCU, and KCB Bank in Security Perfection and Debt Recovery.</p>
              </div>
              <div className="p-8 bg-white/5 border-l-2 border-gold">
                <h5 className="font-serif text-xl text-gold mb-3">Corporate Structuring</h5>
                <p className="text-pearl/70 leading-relaxed font-light">Facilitated market expansion and foreign investment for leading Ugandan corporates.</p>
              </div>
            </div>

            <div className="space-y-6 text-lg text-pearl/80 leading-relaxed font-light border-t border-pearl/10 pt-12">
              <p>With thousands of successful cases, satisfied clients, and resolved disputes, we are proud to deliver exceptional legal solutions across all our practice areas.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none">
                {[
                  "700 businesses registered",
                  "1,201 property transactions",
                  "500 disputes resolved",
                  "3k+ refugees assisted",
                  "383 land titles finalized",
                  "62 major projects advised",
                  "Legal representation to over 3k clients",
                  "30+ in-house counsel trained"
                ].map((stat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold" />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 bg-pearl p-10 text-navy relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="font-serif text-2xl mb-6">Thought Leadership</h4>
              <ul className="space-y-6 text-sm leading-relaxed opacity-80">
                <li>Published articles on legal control of renewable natural resources and company formation.</li>
                <li>Regularly invited as thought leader at regional legal conferences and forums.</li>
                <li>Successfully trained over 30 in-house counsel and government officials in compliance.</li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <Scale size={200} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
