import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Car, Ship, Caravan, Home, Map, Bell, Settings, BarChart3, Shield, Clock } from "lucide-react";

const Design10 = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Map, label: "Live Map" },
    { icon: Car, label: "Vehicles" },
    { icon: Shield, label: "Geofences" },
    { icon: BarChart3, label: "Reports" },
    { icon: Clock, label: "History" },
    { icon: Bell, label: "Alerts" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      {/* Heavy Sidebar */}
      <aside className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Gallery</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg">SideTrack</h1>
              <p className="text-xs text-slate-400">Fleet Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {menuItems.map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  item.active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Devices in Sidebar */}
        <div className="p-4 border-t border-slate-800">
          <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-3">Quick Access</h3>
          <div className="space-y-2">
            {[
              { name: "BMW X5", status: "Moving", icon: Car },
              { name: "Yacht Marina", status: "Anchored", icon: Ship },
              { name: "Bailey Van", status: "Parked", icon: Caravan },
            ].map((device, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                <device.icon className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{device.name}</span>
                <span className={`ml-auto w-2 h-2 rounded-full ${device.status === 'Moving' ? 'bg-emerald-400' : 'bg-slate-500'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Pro Badge */}
        <div className="p-4">
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-4">
            <p className="text-sm font-medium text-amber-400 mb-1">Upgrade to Pro</p>
            <p className="text-xs text-slate-400 mb-3">Unlock live tracking & more</p>
            <button className="w-full py-2 bg-amber-500 text-black text-sm font-medium rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-slate-400">Monitor your fleet in real-time</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="px-5 py-3 bg-blue-600 rounded-xl font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Live Track
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Active Vehicles", value: "12", sub: "8 moving", color: "blue" },
            { label: "Total Distance", value: "2,456 km", sub: "Today", color: "emerald" },
            { label: "Avg Speed", value: "54 km/h", sub: "Fleet average", color: "amber" },
            { label: "Alerts", value: "3", sub: "2 critical", color: "red" },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className={`text-sm text-${stat.color}-400`}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Map and Details */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="font-semibold">Fleet Map</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-blue-600 rounded-lg text-sm">Live</button>
                <button className="px-3 py-1.5 bg-slate-700 rounded-lg text-sm">Satellite</button>
              </div>
            </div>
            <div className="h-80 bg-slate-900 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-slate-400">Interactive Map</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4">
            <h3 className="font-semibold mb-4">BMW X5 - Live</h3>
            <div className="space-y-4">
              {[
                { icon: Gauge, label: "Speed", value: "72 km/h" },
                { icon: Satellite, label: "Satellites", value: "14 GPS" },
                { icon: Signal, label: "Signal", value: "4G LTE" },
                { icon: Battery, label: "Battery", value: "91%" },
                { icon: MapPin, label: "Location", value: "London, UK" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-900 rounded-xl">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="py-2 bg-blue-600 rounded-lg text-sm">Ping</button>
              <button className="py-2 bg-slate-700 rounded-lg text-sm">History</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design10;
