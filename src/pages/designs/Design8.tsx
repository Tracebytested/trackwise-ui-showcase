import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Navigation, Activity, Eye, ArrowLeft, 
  Sparkles, Star, TrendingUp, Clock
} from 'lucide-react';

// Rose Gold Luxury - Premium rose gold/pink theme
const Design8 = () => {
  const devices = [
    { id: 1, name: 'Tesla Model S', plate: 'LUX-001', status: 'moving', speed: 65, battery: 87, location: 'Beverly Hills, CA', driver: 'Alexandra M.' },
    { id: 2, name: 'Range Rover', plate: 'LUX-002', status: 'idle', speed: 0, battery: 54, location: 'Malibu, CA', driver: 'Victoria R.' },
    { id: 3, name: 'Porsche Taycan', plate: 'LUX-003', status: 'parked', speed: 0, battery: 92, location: 'Santa Monica, CA', driver: 'Isabella K.' },
    { id: 4, name: 'Mercedes EQS', plate: 'LUX-004', status: 'moving', speed: 45, battery: 78, location: 'Pacific Coast Hwy', driver: 'Sophia L.' },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'moving': return 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white';
      case 'idle': return 'bg-gradient-to-r from-amber-300 to-orange-300 text-amber-900';
      case 'parked': return 'bg-gradient-to-r from-rose-300 to-pink-300 text-rose-900';
      case 'offline': return 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 text-gray-800">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen bg-white/60 backdrop-blur-xl border-r border-rose-200/50 flex flex-col">
          <div className="p-6 border-b border-rose-200/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg shadow-rose-300/50">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-rose-900">TracePortal</span>
                <p className="text-xs text-rose-400">Premium Fleet</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {[
              { icon: Home, label: 'Dashboard', active: true },
              { icon: Car, label: 'Vehicles' },
              { icon: MapPin, label: 'Locations' },
              { icon: Bell, label: 'Notifications', badge: 3 },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active 
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg shadow-rose-300/50' 
                    : 'text-gray-600 hover:bg-rose-100/50 hover:text-rose-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className={`ml-auto px-2 py-0.5 rounded-full text-xs ${item.active ? 'bg-white/20' : 'bg-rose-500 text-white'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-rose-200/50">
            <Link
              to="/"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-100/50 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Designs</span>
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-rose-900 mb-1">Good Morning ✨</h1>
              <p className="text-rose-400">Your fleet is performing beautifully today</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-300" />
                <input 
                  type="text" 
                  placeholder="Search vehicles..." 
                  className="pl-11 pr-4 py-3 bg-white/60 backdrop-blur-sm border border-rose-200/50 rounded-2xl text-sm focus:outline-none focus:border-rose-400 w-64 placeholder:text-rose-300"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl font-medium shadow-lg shadow-rose-300/50 hover:shadow-xl hover:shadow-rose-300/60 transition-all">
                <Plus className="w-5 h-5" />
                Add Vehicle
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { icon: Car, label: 'Total Vehicles', value: '12', sub: 'Premium Fleet', color: 'from-rose-400 to-pink-400' },
              { icon: TrendingUp, label: 'Active Now', value: '8', sub: '67% Active', color: 'from-emerald-400 to-teal-400' },
              { icon: Navigation, label: 'Distance Today', value: '847', sub: 'Kilometers', color: 'from-violet-400 to-purple-400' },
              { icon: Star, label: 'Performance', value: '98%', sub: 'Excellent', color: 'from-amber-400 to-orange-400' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-200/50 hover:shadow-xl hover:shadow-rose-200/50 transition-all">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-rose-400">{stat.label} • {stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Vehicles */}
          <div className="rounded-3xl bg-white/60 backdrop-blur-sm border border-rose-200/50 overflow-hidden">
            <div className="p-6 border-b border-rose-200/50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-rose-900">Your Vehicles</h2>
              <button className="text-rose-400 text-sm font-medium">View All →</button>
            </div>

            <div className="divide-y divide-rose-100/50">
              {devices.map((device) => (
                <div key={device.id} className="p-6 flex items-center gap-6 hover:bg-rose-50/50 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                    <Car className="w-8 h-8 text-rose-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{device.name}</h3>
                    <p className="text-sm text-rose-400">{device.plate} • Driven by {device.driver}</p>
                  </div>

                  <span className={`px-4 py-2 rounded-full text-xs font-medium ${getStatusStyle(device.status)}`}>
                    {device.status}
                  </span>

                  <div className="flex items-center gap-8 text-sm text-gray-600">
                    <div className="text-center">
                      <p className="font-bold text-lg text-gray-800">{device.speed}</p>
                      <p className="text-xs text-rose-300">km/h</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg text-gray-800">{device.battery}%</p>
                      <p className="text-xs text-rose-300">Battery</p>
                    </div>
                  </div>

                  <button className="p-3 rounded-xl hover:bg-rose-100 transition-colors">
                    <Eye className="w-5 h-5 text-rose-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Design8;
