import React, { useState, useEffect } from 'react';
import { UserPlus, LayoutGrid, CreditCard, ShieldCheck, Check, MousePointer2 } from 'lucide-react';

const steps = [
  { icon: UserPlus, title: "1. Create Account", desc: "Set up your workspace in seconds with enterprise-grade SSO." },
  { icon: LayoutGrid, title: "2. Choose Services", desc: "Select from hundreds of cloud providers in our global marketplace." },
  { icon: CreditCard, title: "3. Pay & Manage", desc: "Single unified invoice and automated cost optimization." }
];

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">How it works</h2>
          <p className="text-gray-500 text-lg">One workflow. Zero friction. Total control.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div 
                  key={idx} 
                  className={`p-6 rounded-3xl transition-all duration-500 border-2 ${
                    isActive 
                      ? 'bg-white border-[#2D5BFF] shadow-xl shadow-blue-500/5' 
                      : 'bg-transparent border-transparent opacity-50 grayscale'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#2D5BFF] text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simulated Demo "Video" */}
          <div className="relative aspect-video bg-white rounded-[40px] shadow-2xl border-[12px] border-white overflow-hidden shadow-blue-500/10">
            <div className="absolute inset-0 bg-gray-50">
              {/* Step 1: Sign Up Mockup */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 p-8 ${activeStep === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                 <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#2D5BFF] rounded-xl mb-6 flex items-center justify-center text-white"><ShieldCheck size={20}/></div>
                    <div className="h-4 w-1/2 bg-gray-100 rounded mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-10 w-full bg-gray-50 border border-gray-100 rounded-xl px-3 flex items-center">
                        <div className="h-2 w-24 bg-[#2D5BFF] rounded animate-pulse"></div>
                      </div>
                      <div className="h-10 w-full bg-[#2D5BFF] rounded-xl flex items-center justify-center">
                        <div className="h-2 w-16 bg-white/40 rounded"></div>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Step 2: Choose Services Mockup */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 p-8 ${activeStep === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                 <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`bg-white rounded-2xl p-4 border border-gray-100 shadow-sm relative overflow-hidden transition-all duration-500 ${i === 1 ? 'ring-2 ring-[#2D5BFF] scale-105' : 'opacity-40'}`}>
                         <div className={`w-8 h-8 rounded-lg mb-3 ${i === 1 ? 'bg-orange-100' : 'bg-gray-100'}`}></div>
                         <div className="h-2 w-16 bg-gray-100 rounded mb-2"></div>
                         <div className="h-2 w-8 bg-gray-50 rounded"></div>
                         {i === 1 && <div className="absolute top-2 right-2 text-[#2D5BFF]"><Check size={16}/></div>}
                      </div>
                    ))}
                 </div>
                 <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm animate-bounce">
                    <MousePointer2 size={16} className="text-[#2D5BFF]" />
                    <span className="text-xs font-bold">Selecting AWS...</span>
                 </div>
              </div>

              {/* Step 3: Pay & Manage Mockup */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 p-8 ${activeStep === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                 <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                       <div className="text-sm font-bold">Monthly Spend</div>
                       <div className="text-lg font-black text-[#2D5BFF]">$1,240.00</div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white"><Check size={14} /></div>
                          <div className="flex-1 h-2 bg-gray-100 rounded"></div>
                       </div>
                       <div className="h-24 w-full bg-blue-50/30 rounded-2xl border border-blue-100 border-dashed flex items-center justify-center">
                          <div className="text-[10px] font-bold text-[#2D5BFF] uppercase tracking-widest">Optimized & Secured</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Progress Bar for the demo */}
            <div className="absolute bottom-0 left-0 h-1.5 bg-[#2D5BFF] transition-all duration-[4000ms] ease-linear" style={{ width: `${(activeStep + 1) * 33.3}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
