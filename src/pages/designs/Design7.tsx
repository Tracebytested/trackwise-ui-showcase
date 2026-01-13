import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Settings, Bell, Plus } from "lucide-react";

const Design7 = () => {
  return (
    <div className="min-h-screen bg-slate-200 p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="bg-slate-200 rounded-3xl p-6 shadow-[20px_20px_60px_#b8b8b8,-20px_-20px_60px_#ffffff]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="w-12 h-12 rounded-2xl bg-slate-200 shadow-[inset_5px_5px_10px_#b8b8b8,inset_-5px_-5px_10px_#ffffff] flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-200 shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff] flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-700">NeuTrack</h1>
                  <p className="text-sm text-slate-500">Fleet Tracking System</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-2xl bg-slate-200 shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff] flex items-center justify-center hover:shadow-[inset_5px_5px_10px_#b8b8b8,inset_-5px_-5px_10px_#ffffff] transition-shadow">
                <Bell className="w-5 h-5 text-slate-600" />
              </button>
              <button className="w-12 h-12 rounded-2xl bg-slate-200 shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff] flex items-center justify-center hover:shadow-[inset_5px_5px_10px_#b8b8b8,inset_-5px_-5px_10px_#ffffff] transition-shadow">
                <Settings className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="col-span-3 space-y-6">
          <div className="bg-slate-200 rounded-3xl p-6 shadow-[20px_20px_60px_#b8b8b8,-20px_-20px_60px_#ffffff]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-slate-700">Devices</h2>
              <button className="w-8 h-8 rounded-xl bg-indigo-500 shadow-[3px_3px_6px_#b8b8b8,-3px_-3px_6px_#ffffff] flex items-center justify-center">
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { name: "Mercedes E-Class", status: "Moving", speed: "72 km/h" },
                { name: "Bailey Caravan", status: "Parked", speed: "0 km/h" },
                { name: "Sunseeker 50", status: "Cruising", speed: "18 kn" },
              ].map((device, i) => (
                <button key={i} className={`w-full p-4 rounded-2xl text-left transition-shadow ${
                  i === 0 
                    ? 'bg-slate-200 shadow-[inset_5px_5px_10px_#b8b8b8,inset_-5px_-5px_10px_#ffffff]' 
                    : 'bg-slate-200 shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b8b8,inset_-3px_-3px_6px_#ffffff]'
                }`}>
                  <p className="font-medium text-slate-700 mb-1">{device.name}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className={device.status === 'Moving' || device.status === 'Cruising' ? 'text-emerald-600' : 'text-amber-600'}>
                      {device.status}
                    </span>
                    <span className="text-slate-500">{device.speed}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-6">
          {/* Map Card */}
          <div className="bg-slate-200 rounded-3xl p-6 shadow-[20px_20px_60px_#b8b8b8,-20px_-20px_60px_#ffffff]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-slate-700">Live Location</h2>
              <div className="flex gap-3">
                <button className="px-5 py-2 rounded-xl bg-indigo-500 text-white shadow-[3px_3px_6px_#b8b8b8,-3px_-3px_6px_#ffffff]">
                  Live Track
                </button>
                <button className="px-5 py-2 rounded-xl bg-slate-200 text-slate-600 shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff]">
                  Geofence
                </button>
              </div>
            </div>
            <div className="h-64 rounded-2xl bg-slate-200 shadow-[inset_10px_10px_20px_#b8b8b8,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-200 shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff] flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-7 h-7 text-indigo-500" />
                </div>
                <p className="text-slate-500">Map Display Area</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: Gauge, label: "Speed", value: "72 km/h", color: "text-rose-500" },
              { icon: Satellite, label: "Satellites", value: "14", color: "text-blue-500" },
              { icon: Signal, label: "Signal", value: "4G", color: "text-emerald-500" },
              { icon: Battery, label: "Battery", value: "91%", color: "text-amber-500" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-200 rounded-2xl p-5 shadow-[10px_10px_20px_#b8b8b8,-10px_-10px_20px_#ffffff]">
                <div className="w-12 h-12 rounded-xl bg-slate-200 shadow-[inset_3px_3px_6px_#b8b8b8,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center mb-3">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold text-slate-700">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Subscription Card */}
          <div className="bg-slate-200 rounded-3xl p-6 shadow-[20px_20px_60px_#b8b8b8,-20px_-20px_60px_#ffffff] flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-700 mb-1">Upgrade to Pro</h3>
              <p className="text-slate-500">Unlock live tracking, geofencing, and premium features</p>
            </div>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-[5px_5px_10px_#b8b8b8,-5px_-5px_10px_#ffffff]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design7;
