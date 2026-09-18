import { SectionHeader } from '../components/UIBase';
import { ACHIEVEMENTS_DATA } from '../constants/data';
import { Trophy } from 'lucide-react';

export const ClientsPage = () => {
  const clientLogos = Array.from({ length: 54 }, (_, i) => ({
    id: i + 1,
    logoUrl: `assets/images/clients/${i + 1}.png`,
    alt: `Client Logo ${i + 1}`,
  }));

  return (
    <div className="pt-24 min-h-screen bg-gray-50/30">
      <section className="section-padding container">
        <SectionHeader subheading="Our Clients" heading="Trusted by Industry Leaders" centered />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center aspect-[4/3] hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <img
                src={client.logoUrl}
                alt={client.alt}
                className="max-h-[72px] max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


export const AchievementsPage = () => (
  <div className="pt-24 min-h-screen bg-navy text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
    <section className="section-padding container relative z-10">
      <SectionHeader subheading="Our Milestone" heading="Legacy of Excellence" dark centered />
      <div className="max-w-4xl mx-auto space-y-12">
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-3xl font-black">
              <Trophy />
            </div>
            <div className={`flex-grow p-8 bg-white/5 rounded-2xl border border-white/10 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
              <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
