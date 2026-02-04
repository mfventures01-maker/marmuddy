
import React from 'react';
import {
  TrendingUp, Users, ShoppingBag, MessageSquare,
  Plus, Search, Edit2, Trash2, Calendar,
  BarChart3, Settings, LogOut, CheckCircle
} from 'lucide-react';
/* 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
*/
import { MOCK_INQUIRIES, MOCK_COLLECTIONS, COLORS } from '../constants';

const stats = [
  { label: 'Total Revenue', value: '₦4.8M', change: '+12%', icon: TrendingUp },
  { label: 'Active Inquiries', value: '24', change: '+5', icon: MessageSquare },
  { label: 'Total Collections', value: '8', change: '0', icon: ShoppingBag },
  { label: 'New Clients', value: '15', change: '+8%', icon: Users },
];

/*
const revenueData = [
  { name: 'Jan', revenue: 400 },
  { name: 'Feb', revenue: 600 },
  { name: 'Mar', revenue: 500 },
  { name: 'Apr', revenue: 800 },
  { name: 'May', revenue: 1200 },
  { name: 'Jun', revenue: 900 },
];
*/

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <div className="lg:w-64 space-y-2">
          <div className="p-4 border border-zinc-800 rounded-xl mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C9A961] rounded-full flex items-center justify-center font-bold text-[#0A0A0A]">M</div>
              <div>
                <p className="text-sm font-bold">Admin Panel</p>
                <p className="text-[10px] text-zinc-500 uppercase">Marmuddy's HQ</p>
              </div>
            </div>
          </div>

          {[
            { label: 'Dashboard', icon: BarChart3, active: true },
            { label: 'Collections', icon: ShoppingBag },
            { label: 'Gallery', icon: Users },
            { label: 'Inquiries', icon: MessageSquare },
            { label: 'Appointments', icon: Calendar },
            { label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${item.active ? 'bg-[#C9A961] text-[#0A0A0A] font-bold' : 'text-zinc-400 hover:bg-zinc-900'
                }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-red-500 hover:bg-red-500/10 transition-colors mt-8">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold">Royal Overview</h2>
              <p className="text-zinc-500 text-sm">Welcome back, your empire is flourishing.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-[#C9A961] text-[#0A0A0A] px-4 py-2 rounded-lg font-bold text-sm">
                <Plus size={18} /> Add New Item
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-zinc-800 rounded-lg text-[#C9A961]">
                    <stat.icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{stat.change}</span>
                </div>
                <p className="text-zinc-400 text-xs uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
            ))}
          </div>

          {/* Charts Row - Disabled for preview
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-6">Revenue Growth</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="name" stroke="#71717a" fontSize={12} />
                    <YAxis stroke="#71717a" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0A0A0A', borderColor: '#27272a', fontSize: '12px' }}
                      itemStyle={{ color: '#C9A961' }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#C9A961" strokeWidth={3} dot={{ fill: '#C9A961' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-6">Top Categories</h3>
              <div className="space-y-4">
                {[
                  { name: 'Suits', val: 75 },
                  { name: 'African Royalty', val: 88 },
                  { name: 'Shirts', val: 45 },
                  { name: 'Pants', val: 32 },
                ].map((cat) => (
                  <div key={cat.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{cat.name}</span>
                      <span className="text-zinc-500">{cat.val}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#C9A961]" style={{ width: `${cat.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          */}

          {/* Recent Inquiries Table */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-lg font-bold">Recent Inquiries</h3>
              <button className="text-xs text-[#C9A961] hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-zinc-950 text-zinc-400 uppercase text-[10px] tracking-widest">
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {MOCK_INQUIRIES.map((inq) => (
                    <tr key={inq.id} className="hover:bg-zinc-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold">{inq.customerName}</div>
                        <div className="text-xs text-zinc-500">{inq.email}</div>
                      </td>
                      <td className="px-6 py-4 text-zinc-300">{inq.serviceInterest}</td>
                      <td className="px-6 py-4 text-zinc-500">{inq.date}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold rounded-full">NEW</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-1 text-zinc-400 hover:text-white"><Edit2 size={16} /></button>
                          <button className="p-1 text-zinc-400 hover:text-red-500"><Trash2 size={16} /></button>
                          <button className="p-1 text-zinc-400 hover:text-green-500"><CheckCircle size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
