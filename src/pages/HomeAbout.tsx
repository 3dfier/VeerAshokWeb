import { HomeHero, HomeMetrics } from '../components/sections/HomeSections';
import { SectionHeader, PrimaryButton } from '../components/UIBase';

export const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    <HomeHero />
    <HomeMetrics />

    <section className="section-padding container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader subheading="Welcome" heading="Excellence in Industrial Solutions" />
          <p className="text-gray-600 mb-8 leading-relaxed">
            Veer Ashok Group is a leader in providing comprehensive industrial services and manufacturing solutions.
            From our strategic hubs in Pune, we serve a diverse range of industries with quality products and professional services.
          </p>
          <PrimaryButton title="Our Services" href="/services" className="mr-4" />
        </div>
        <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 font-bold uppercase tracking-widest">Industrial Overview Visual</span>
        </div>
      </div>
    </section>
  </div>
);

export const AboutPage = () => (
  <div className="pt-24 min-h-screen">
    <section className="section-padding container">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader subheading="Our Legacy" heading="Driven by Purpose, Rooted in Courage" />
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="font-semibold text-navy">
              Every organization is driven by a purpose. At Veer Ashok Group, our purpose is rooted in a legacy of unmatched courage.
            </p>
            <p>
              Our group derives its name from our late family member, a heroic Mumbai Police Officer who made the ultimate sacrifice fighting terrorists in Bhandup, Mumbai, in 1992. Formally recognized with the Posthumous President's Gallantry Award, his spirit of unwavering duty defines our corporate culture today.
            </p>
            <p>
              Inspired by our brave hero, the Veer Ashok Family—spanning from our workers to our directors—approaches industrial services with the same dedication to integrity. Under the leadership of our Managing Director, <span className="text-navy font-bold">Mr. Vikas Kolekar</span>, we blend this deep sense of honor with modern technology, continuous innovation, and an absolute commitment to timeline discipline.
            </p>
            <p>
              We don't just supply products; we honor a legacy by making our customers successful. Partner with our team today, and let's win together.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-navy p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-primary font-bold mb-2 uppercase tracking-tight">Chakan Hub</h4>
                <p className="text-white text-sm opacity-80">Primary Manufacturing & Distribution Facility</p>
              </div>
              <div className="bg-navy p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-primary font-bold mb-2 uppercase tracking-tight">Wagholi Center</h4>
                <p className="text-white text-sm opacity-80">Logistics & Administrative Operations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden group shadow-xl">
            <img src="assets/MD-Vikas.png" alt="Mr. Vikas Kolekar" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-1">MD & Founder</p>
              <h3 className="text-2xl font-black">MR. VIKAS KOLEKAR</h3>
            </div>
          </div>
          <div className="bg-canvas p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-navy font-bold text-xl mb-4">Our Core Values</h4>
            <ul className="space-y-3">
              {[
                'Unwavering Integrity',
                'Timeline Discipline',
                'Continuous Innovation',
                'Dedication to Excellence'
              ].map((value, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);
