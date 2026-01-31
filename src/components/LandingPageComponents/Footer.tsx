import React from 'react';
import { ShieldCheck, Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#2D5BFF] rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={22} />
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-[#1A1A1A]">BILLNEST</span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              The modern standard for cloud billing and subscription management. Powering the next generation of infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#2D5BFF] hover:bg-blue-50 transition-all"><Twitter size={22}/></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#2D5BFF] hover:bg-blue-50 transition-all"><Github size={22}/></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#2D5BFF] hover:bg-blue-50 transition-all"><Linkedin size={22}/></a>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6">
            <button className="px-6 py-3 bg-[#1A1A1A] text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
              Join the waitlist <ArrowUpRight size={18} />
            </button>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-1">Office</div>
              <p className="text-gray-500 font-medium">San Francisco, CA</p>
              <p className="text-gray-500 font-medium">Remote First</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-gray-300 uppercase tracking-widest">
           <div className="flex gap-8">
             <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
             <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
             <a href="#" className="hover:text-gray-900 transition-colors">Status</a>
           </div>
           <p>© 2024 Billnest Inc. Built for scale.</p>
        </div>
      </div>
    </footer>
  );
};