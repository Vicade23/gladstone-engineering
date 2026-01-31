import React, { useEffect, useState, useRef } from 'react';
import { PlayCircle, ArrowRight, Server, Cloud, ShieldCheck, Globe } from 'lucide-react';
import { DashboardPreview } from './DashboardPreview';

const MobileDashboardStack = () => {
  return (
    <div className="w-full space-y-4 px-2">
      <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
            <Server size={24} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Primary Instance</div>
            <div className="text-lg font-extrabold text-[#1A1A1A]">AWS EC2</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-black text-[#2D5BFF]">$420.00</div>
          <div className="text-[10px] font-bold text-green-500 uppercase">Active</div>
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-between relative z-10 -mt-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
            <Cloud size={24} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Database Tier</div>
            <div className="text-lg font-extrabold text-[#1A1A1A]">Azure SQL</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-black text-[#2D5BFF]">$185.50</div>
          <div className="text-[10px] font-bold text-blue-400 uppercase">Managed</div>
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-between relative z-0 -mt-2 opacity-60">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500">
            <Globe size={24} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Edge Network</div>
            <div className="text-lg font-extrabold text-[#1A1A1A]">Cloudflare</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-black text-[#2D5BFF]">$12.00</div>
          <div className="text-[10px] font-bold text-gray-300 uppercase">Ready</div>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (containerRef.current) {
        const parentWidth = containerRef.current.offsetWidth;
        const padding = mobile ? 32 : 48;
        const availableWidth = parentWidth - padding;
        const newScale = Math.min(1, availableWidth / 1200);
        setScale(newScale);
      }
    };
    window.addEventListener('resize', updateScale);
    updateScale();
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const baseHeight = 600;

  return (
    <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 bg-[#FFFFFF] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Desktop Blobs */}
        <div className="hidden md:block absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] blob-animate-1"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#2D5BFF]/10 rounded-full blur-[140px] blob-animate-2"></div>
        </div>
        
        {/* New Classic Mobile Mesh Background */}
        <div className="md:hidden mesh-gradient-mobile"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16 px-6 stagger-reveal">
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-[#2D5BFF] text-[10px] md:text-xs font-bold mb-6 md:mb-8 shadow-sm backdrop-blur-md">
          <ShieldCheck size={14} className="animate-pulse" />
           SECURED
        </div> */}
        
        <h1 className="text-[2.75rem] md:text-7xl lg:text-7xl font-[800] tracking-tight text-[#1A1A1A] leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 font-elegant px-2">
          All your cloud bills <br className="hidden md:block" /> in one nest.
        </h1>
        
        <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-normal px-4 md:px-0">
          The elegant standard for infrastructure management. Procure, track, and optimize subscriptions without leaving your nest.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <button className="w-auto sm:w-auto group px-6 py-3 bg-[#2D5BFF] text-white rounded-2xl font-bold text-md hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25">
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-auto sm:w-auto px-6 py-3 bg-white border border-gray-100 text-[#1A1A1A] rounded-2xl font-bold text-md hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <PlayCircle size={20} /> Watch Demo
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-4 md:mt-12 relative z-10 flex justify-center items-start overflow-visible px-4 md:px-6" ref={containerRef}>
        {!isMobile && (
          <>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-32"></div>
            <div 
              className="relative z-0 shadow-[0_40px_100px_rgba(0,0,0,0.12)] rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-100 pointer-events-none select-none origin-top transition-all duration-700 ease-out"
              style={{ 
                width: '1200px', 
                transform: `scale(${scale})`,
                height: `${baseHeight}px`,
                marginBottom: `calc(-${baseHeight}px * (1 - ${scale}))`, 
                flexShrink: 0
              }}
            >
              <DashboardPreview />
            </div>
          </>
        )}

        {isMobile && (
          <div className="w-full max-w-md mx-auto pt-4 stagger-reveal" style={{ animationDelay: '0.6s' }}>
            <MobileDashboardStack />
          </div>
        )}
      </div>
    </section>
  );
};
