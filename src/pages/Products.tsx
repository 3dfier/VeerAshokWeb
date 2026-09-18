import { ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/UIBase';
import { PRODUCTS_DATA } from '../constants/data';
import IndustrialServices from '../components/sections/IndustrialServices';

export const ServicesPage = () => (
  <div className="pt-24 min-h-screen bg-[#F9F7F5]">
    <section className="pt-16 container">
      <SectionHeader subheading="Expert Solutions" heading="Industrial Services Catalog" centered />
      <p className="text-center text-gray-500 max-w-2xl mx-auto -mt-8 mb-12">
        We provide a comprehensive range of industrial services designed to optimize your operations, 
        ensuring quality, reliability, and excellence across every vertical.
      </p>
    </section>
    
    <div className="pb-24">
      <IndustrialServices />
    </div>

    {/* CTA Section */}
    <section className="bg-navy py-16 text-white text-center">
      <div className="container">
        <h3 className="text-3xl font-bold mb-6 text-primary">Ready to Optimize Your Industrial Supply Chain?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with Veer Ashok Group today for reliable, high-quality industrial services and custom manufacturing solutions.
        </p>
        <a href="/contact" className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-lg">
          Connect With Our Team
        </a>
      </div>
    </section>
  </div>
);

export const ManufacturingPage = () => (
  <div className="pt-24 min-h-screen">
    <section className="section-padding container">
      <SectionHeader subheading="Manufacturing" heading="In-House Capabilities" centered />
      <div className="grid md:grid-cols-3 gap-10">
        {PRODUCTS_DATA.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="h-64 bg-gray-50 flex items-center justify-center border-b border-gray-100">
              <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">{product.name} Mockup</span>
            </div>
            <div className="p-8 flex-grow">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{product.category}</span>
              <h3 className="text-navy font-bold text-2xl mb-4">{product.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.description}</p>
              <button className="flex items-center text-primary font-bold text-sm hover:translate-x-2 transition-transform">
                Request Bulk Spec Sheet <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
