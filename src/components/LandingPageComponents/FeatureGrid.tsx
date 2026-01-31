import React from 'react';
import { Layers, MousePointer2, CheckCircle2, Search, Star, Play } from 'lucide-react';

interface FeatureItemProps {
  title: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
  isReversed?: boolean;
  label: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, bullets, visual, isReversed, label }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-20`}>
      <div className="flex-1 space-y-6">
        <div className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-[10px] font-extrabold text-gray-500 uppercase tracking-widest">{label}</div>
        <h3 className="text-4xl md:text-5xl font-[800] tracking-tight text-[#1A1A1A] leading-tight font-elegant">{title}</h3>
        <p className="text-lg text-gray-500 leading-relaxed font-normal">{description}</p>
        <ul className="space-y-4">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
              <CheckCircle2 size={20} className="text-[#2D5BFF]" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full relative">
        <div className="glass-panel rounded-[32px] overflow-hidden shadow-2xl shadow-black/5 bg-gray-50 p-4 border border-gray-100 pointer-events-none select-none">
          {visual}
        </div>
      </div>
    </div>
  );
};

const MarketplaceVideoMock: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[320px] relative">
      <div className="bg-gray-50 border-b border-gray-100 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 h-6 w-48 bg-white border border-gray-200 rounded-lg flex items-center px-2 gap-2">
            <Search size={12} className="text-gray-400" />
            <div className="h-2 w-24 bg-gray-100 rounded"></div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="simulated-video-scroll">
          {[
            { name: "AWS EC2", price: "$240.00/mo", type: "Compute", color: "bg-orange-100 text-orange-600" },
            { name: "Azure SQL", price: "$180.00/mo", type: "Database", color: "bg-blue-100 text-blue-600" },
            { name: "Vercel Pro", price: "$20.00/mo", type: "Hosting", color: "bg-gray-100 text-gray-900" },
            { name: "Stripe Scale", price: "$1,200.00/mo", type: "Payments", color: "bg-indigo-100 text-indigo-600" },
            { name: "Google Cloud", price: "$450.00/mo", type: "Compute", color: "bg-red-100 text-red-600" },
            { name: "GoDaddy SSL", price: "$12.00/mo", type: "Security", color: "bg-emerald-100 text-emerald-600" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl mb-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${item.color}`}>
                  {item.name.substring(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">{item.name}</div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">{item.type}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-[#2D5BFF]">{item.price}</div>
                <div className="text-[10px] text-gray-400 font-medium">Subscribe</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ name, price, rating, img }: { name: string, price: string, rating: number, img: string }) => (
  <div className="bg-white rounded-[32px] md:rounded-[40px] p-4 md:p-6 border border-gray-100 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden flex-shrink-0 w-[260px] md:w-auto snap-center">
    <div className="w-full aspect-square rounded-[24px] md:rounded-[32px] mb-4 md:mb-6 overflow-hidden bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 md:p-8 group-hover:from-blue-50/50 group-hover:to-white transition-colors">
       <img 
         src={img} 
         alt={name} 
         className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
       />
    </div>
    <div className="px-1 md:px-2">
      <div className="flex items-center justify-between mb-1.5 md:mb-2">
        <h4 className="text-base md:text-xl font-extrabold text-[#1A1A1A] font-elegant whitespace-nowrap overflow-hidden text-ellipsis">{name}</h4>
        <div className="flex items-center gap-1 text-amber-500 font-bold text-xs md:text-sm">
          <Star size={14} fill="currentColor" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="text-gray-400 mb-4 md:mb-8 text-[9px] md:text-xs font-bold uppercase tracking-widest">Optimized Infrastructure</div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[8px] md:text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-0.5">Entry Price</div>
          <div className="text-lg md:text-2xl font-black text-[#2D5BFF]">{price}</div>
        </div>
        <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 text-gray-900 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-[#2D5BFF] hover:text-white transition-all shadow-sm">
          <Search size={18} />
        </button>
      </div>
    </div>
  </div>
);

export const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-elegant">The Architecture of Simplicity</h2>
        <p className="text-gray-500 text-lg md:text-xl font-medium">Billing shouldn't be your bottleneck. Build faster with our infrastructure.</p>
      </div>

      {/* Controlled Height Video Player */}
      <div className="mb-24 relative max-w-5xl mx-auto rounded-[48px] overflow-hidden shadow-2xl group cursor-pointer border-[12px] border-white h-[350px] md:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
          alt="Dashboard Intro"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
           <div className="w-24 h-24 bg-[#2D5BFF] text-white rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-all duration-500">
             <Play size={40} fill="currentColor" className="ml-1" />
           </div>
        </div>
        <div className="absolute bottom-10 left-10 text-white pr-10 hidden md:block">
           <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-60">System Tour</div>
           <div className="text-3xl font-black font-elegant">Unify your entire cloud billing stack</div>
        </div>
      </div>

      <FeatureItem 
        label="Browse"
        title="Everything cloud, under one roof."
        description="Search through a unified marketplace of cloud providers. Compare prices, features, and deployment speed instantly."
        bullets={[
          "Compare 50+ cloud providers side-by-side",
          "Real-time pricing data updates",
          "One-click availability checks"
        ]}
        visual={<MarketplaceVideoMock />}
      />

      <FeatureItem 
        label="Subscribe"
        isReversed
        title="One-Click Checkout for Subscriptions."
        description="Stop jumping between 10 different provider dashboards. Subscribe and deploy infrastructure in a single click."
        bullets={[
          "Unified billing methods",
          "Automated provisioning tokens",
          "Bulk purchase discounts"
        ]}
        visual={
          <div className="p-8 flex items-center justify-center min-h-[300px]">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 w-full max-w-sm">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                    <div>
                      <div className="h-3 w-20 bg-gray-100 rounded mb-1"></div>
                      <div className="h-2 w-12 bg-gray-50 rounded"></div>
                    </div>
                  </div>
                  <div className="font-bold text-sm">$49/mo</div>
               </div>
               <div className="w-full py-4 bg-[#2D5BFF] text-white rounded-2xl font-bold flex items-center justify-center gap-2">
                 <MousePointer2 size={18} /> Confirm Subscription
               </div>
            </div>
          </div>
        }
      />

      <FeatureItem 
        label="Manage"
        title="Spend analytics that actually help."
        description="Visualize your entire organization's cloud footprint. Spot anomalies, get saving suggestions, and forecast monthly bills."
        bullets={[
          "Smart anomaly detection alerts",
          "Multi-cloud tag management",
          "Automated cost-reduction reports"
        ]}
        visual={
          <div className="p-4 space-y-4">
             <div className="h-24 w-full bg-white rounded-2xl border border-gray-100 flex items-center px-6 gap-6">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                   <Layers size={24} />
                </div>
                <div className="flex-1">
                  <div className="h-3 w-1/4 bg-gray-100 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-50 rounded"></div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">Saved $420</div>
                </div>
             </div>
          </div>
        }
      />

      {/* Services Section - Horizontal Slider on Mobile */}
      <div className="mt-40">
        <div className="text-center mb-12 md:mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-elegant">Premium Providers</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Access the world's most powerful cloud infrastructure with enterprise-grade security and exclusive discounts.</p>
        </div>
        
        {/* Horizontal Slider Layout for mobile, Grid for desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible pb-12 md:pb-0 hide-scrollbar snap-x snap-mandatory px-4 -mx-4 md:px-0 md:mx-0">
          <ServiceCard 
            name="Amazon Web Services" 
            price="$0.0116/hr" 
            rating={4.9} 
            img="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
          />
          <ServiceCard 
            name="Microsoft Azure" 
            price="$0.013/hr" 
            rating={4.8} 
            img="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" 
          />
          <ServiceCard 
            name="Google Cloud Platform" 
            price="$0.012/hr" 
            rating={4.8} 
            img="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
          />
        </div>
        
        {/* Scroll indicator for mobile only */}
        <div className="md:hidden flex justify-center gap-1.5 mt-2">
          <div className="w-8 h-1 bg-[#2D5BFF] rounded-full"></div>
          <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};