import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreHorizontal, Plus, Filter, Search } from 'lucide-react';

const data = [
  { name: 'Jan', spend: 4000 },
  { name: 'Feb', spend: 3000 },
  { name: 'Mar', spend: 2000 },
  { name: 'Apr', spend: 2780 },
  { name: 'May', spend: 1890 },
  { name: 'Jun', spend: 2390 },
  { name: 'Jul', spend: 3490 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] p-6 md:p-8 min-h-[500px]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Mock */}
        <div className="hidden lg:block w-64 space-y-4">
          <div className="h-10 w-full bg-white rounded-xl border border-gray-100 flex items-center px-3 gap-3">
             <Search size={16} className="text-gray-400" />
             <div className="h-2 w-20 bg-gray-100 rounded"></div>
          </div>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-10 w-full rounded-xl flex items-center px-3 gap-3 ${i === 1 ? 'bg-[#2D5BFF]/5 text-[#2D5BFF]' : 'hover:bg-gray-100 text-gray-500'}`}>
                <div className={`h-4 w-4 rounded ${i === 1 ? 'bg-[#2D5BFF]' : 'bg-gray-200'}`}></div>
                <div className={`h-2 w-24 rounded ${i === 1 ? 'bg-[#2D5BFF]/20' : 'bg-gray-100'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Mock */}
        <div className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold tracking-tight">Organization Spend</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-white border border-gray-100 text-gray-400"><Filter size={18}/></button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#2D5BFF] text-white rounded-xl text-sm font-bold">
                <Plus size={16} /> New Provider
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Licenses</span>
              <div className="text-3xl font-extrabold mt-2">124</div>
              <div className="text-sm text-green-500 font-medium mt-1">+12% from last month</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Monthly Bill</span>
              <div className="text-3xl font-extrabold mt-2">$8,432.00</div>
              <div className="text-sm text-blue-500 font-medium mt-1">Managed across 6 clouds</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Savings Found</span>
              <div className="text-3xl font-extrabold mt-2 text-[#2D5BFF]">$1,210.45</div>
              <div className="text-sm text-gray-500 font-medium mt-1">Optimization active</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-[300px]">
            <div className="flex items-center justify-between mb-6">
               <h4 className="font-bold">Spend Analysis</h4>
               <MoreHorizontal size={18} className="text-gray-400" />
            </div>
            <div className="w-full h-full pb-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2D5BFF" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2D5BFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#A0A0A0'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#A0A0A0'}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}
                  />
                  <Area type="monotone" dataKey="spend" stroke="#2D5BFF" strokeWidth={3} fillOpacity={1} fill="url(#colorSpend)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
