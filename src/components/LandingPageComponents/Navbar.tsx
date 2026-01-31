import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#2D5BFF] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <ShieldCheck size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#1A1A1A] font-elegant">BILLNEST</span>
        </div>

        {/* actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-sm font-bold text-gray-500 hover:text-[#2D5BFF] px-6 py-2.5 rounded-xl transition-colors">
            Login
          </button>
          <button className="md:hidden px-6 py-2.5 bg-[#1A1A1A] text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all hover:shadow-lg">
            Login
          </button>
          <button className="hidden md:block px-6 py-2.5 bg-[#1A1A1A] text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
