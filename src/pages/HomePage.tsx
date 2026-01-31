
import React from 'react';
import { Navbar } from '../components/LandingPageComponents/Navbar';
import { Hero } from '../components/LandingPageComponents/Hero';
import { Marquee } from '../components/LandingPageComponents/Marquee';
import { FeatureGrid } from '../components/LandingPageComponents/FeatureGrid';
import { HowItWorks } from '../components/LandingPageComponents/HowItWorks';
import { Footer } from '../components/LandingPageComponents/Footer';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#2D5BFF] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <HowItWorks />
        <FeatureGrid />
        
        {/* Bluish Glassmorphism CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto rounded-[48px] bg-[#0A1A4D] p-12 md:p-28 text-center text-white relative overflow-hidden shadow-2xl">
             {/* Animated Glass Gradients */}
             <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-[#2D5BFF] opacity-30 blur-[120px] rounded-full animate-pulse transition-all duration-10000"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-indigo-500 opacity-20 blur-[100px] rounded-full blob-animate-2"></div>
             </div>

             {/* Glass Pane Content */}
             <div className="relative z-10 glass-panel bg-white/5 border-white/10 p-12 md:p-20 rounded-[40px] backdrop-blur-3xl shadow-2xl">
                <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 font-elegant leading-[1.1]">Ready to upgrade your billing infrastructure?</h2>
                <p className="text-blue-100/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">Join 5,000+ companies optimizing their cloud spend with Billnest's unified architecture.</p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <button className="w-full md:w-auto px-10 py-5 bg-[#2D5BFF] text-white rounded-2xl font-bold text-xl hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
                    Get Started Now <ArrowRight size={22} />
                  </button>
                  <button className="w-full md:w-auto px-10 py-5 bg-white/10 border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all backdrop-blur-md">
                    Contact Sales
                  </button>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;