import React from 'react';

const LOGOS = [
  "AWS", "Google Cloud", "Microsoft Azure", "GoDaddy", "DigitalOcean", "Vercel", "Stripe", "Netlify", "Shopify"
];

export const Marquee: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-sm font-bold text-gray-300 uppercase tracking-[0.2em]">Trusted by 500+ Engineering Teams</span>
      </div>
      <div className="relative">
        <div className="animate-scroll">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div 
              key={index} 
              className="px-12 py-4 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-default"
            >
              <span className="text-2xl font-black tracking-tighter text-gray-800 whitespace-nowrap">
                {logo.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        {/* Fades */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};
