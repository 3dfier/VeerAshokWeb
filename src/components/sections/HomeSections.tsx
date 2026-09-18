import { ShieldCheck, Users, Award } from 'lucide-react';
import { PrimaryButton } from '../UIBase';

export const HomeHero = () => (
  <header className="relative h-screen flex items-center bg-navy overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="grid grid-cols-12 h-full gap-4 p-8">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="border border-white/5 rounded-lg" />
        ))}
      </div>
    </div>
    
    <div className="container relative z-20">
      <div className="max-w-3xl">
        <span className="text-primary font-bold tracking-widest mb-4 block">QUALITY & SERVICE FOREVER</span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase">
          VEER ASHOK GROUP <br /> OF COMPANIES
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Premiere scale provider of industrial services and localized in-house manufacturing across Pune. 
          Delivering excellence through the Chakan Industrial Hub and Wagholi Logistics Center.
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton title="Submit RFQ" href="/contact" />
          <PrimaryButton title="Learn More" href="/about" variant="outline" />
        </div>
      </div>
    </div>
  </header>
);

export const HomeMetrics = () => (
  <section className="bg-white py-12 -mt-16 relative z-30 container shadow-2xl rounded-xl">
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
      {[
        { label: 'Values', icon: <ShieldCheck className="text-primary" />, desc: 'Integrity & Transparency' },
        { label: 'Commitment', icon: <Users className="text-primary" />, desc: 'Unwavering Dedication' },
        { label: 'Quality Policy', icon: <Award className="text-primary" />, desc: 'Standards Redefined' },
      ].map((item, i) => (
        <div key={i} className="p-8 text-center flex flex-col items-center">
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-navy font-bold text-xl mb-1">{item.label}</h3>
          <p className="text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
