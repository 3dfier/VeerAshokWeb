import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { SectionHeader } from '../components/UIBase';

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RFQ Submitted:', formData);
    alert('Thank you for your RFQ. Our sales team will contact you shortly.');
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding container">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <SectionHeader subheading="Get In Touch" heading="Request a Quote (RFQ)" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name / Enterprise Name"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Enterprise Email"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
              <textarea
                placeholder="Inquiry Details"
                rows={6}
                className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary outline-none transition-all resize-none"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button type="submit" className="w-full bg-primary hover:bg-orange-700 text-white p-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 uppercase tracking-widest">
                Submit RFQ
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-12">
            {[
              { icon: <MapPin />, title: 'Chakan Facility', val: 'Industrial Hub, Chakan, Pune, Maharashtra' },
              { icon: <MapPin />, title: 'Wagholi Office', val: 'Logistics Center, Wagholi, Pune, Maharashtra' },
              { icon: <Phone />, title: 'Sales Contacts', val: 'Phone: 8605067506\nEmail: info@veerashokgroup.com' },
            ].map((info, i) => (
              <div key={i} className="flex space-x-6 items-start">
                <div className="text-primary mt-1">{info.icon}</div>
                <div>
                  <h4 className="text-navy font-bold text-xl mb-1 uppercase tracking-tight">{info.title}</h4>
                  <p className="text-gray-500 whitespace-pre-line leading-relaxed">{info.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
