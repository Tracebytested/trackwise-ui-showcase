import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Wifi, Zap, Clock } from "lucide-react";

const Design2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
      {/* Glass Header */}
      <header className="backdrop-blur-xl bg-white/5 border-b border-white/10 px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h1 className="font-semibold">GlassTrack</h1>
                <p className="text-xs text-white/50">Fleet Management</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm text-emerald-400">Live</span>
            </div>
            <button className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-sm hover:bg-white/20 transition-colors">
              Add Device
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8">
        {/* Main Glass Card */}
        <div className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/10 overflow-hidden mb-8">
          {/* Map Area */}
          <div className="h-80 relative bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-xl">
                  <MapPin className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-white/60">Interactive Map</p>
              </div>
            </div>
            
            {/* Floating Controls */}
            <div className="absolute bottom-6 left-6 flex gap-3">
              <button className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2 hover:bg-white/20 transition-all">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Live Track</span>
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-2 hover:bg-white/20 transition-all">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Geofence</span>
              </button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Gauge, label: "Current Speed", value: "72 km/h", sub: "Max: 120 km/h" },
              { icon: Satellite, label: "GPS Satellites", value: "14", sub: "Excellent Signal" },
              { icon: Wifi, label: "SIM Status", value: "4G LTE", sub: "Carrier: Vodafone" },
              { icon: Battery, label: "Device Battery", value: "94%", sub: "Est. 48h remaining" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/10">
                    <stat.icon className="w-5 h-5 text-white/70" />
                  </div>
                </div>
                <p className="text-3xl font-light mb-1">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
                <p className="text-xs text-white/30 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Device Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { name: "Range Rover Sport", plate: "AB12 XYZ", status: "Moving", speed: "65 km/h", type: "Car" },
            { name: "Swift Challenger", plate: "Caravan", status: "Parked", speed: "0 km/h", type: "Caravan" },
            { name: "Princess 45", plate: "Marina A12", status: "Anchored", speed: "0 kn", type: "Boat" },
          ].map((device, i) => (
            <div key={i} className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10">{device.type}</span>
                <span className={`w-3 h-3 rounded-full ${device.status === 'Moving' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
              </div>
              <h3 className="text-lg font-medium mb-1 group-hover:text-blue-400 transition-colors">{device.name}</h3>
              <p className="text-sm text-white/50 mb-4">{device.plate}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">{device.status}</span>
                <span className="font-mono">{device.speed}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Banner */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-purple-500/30 p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-1">Unlock Live Tracking</h3>
              <p className="text-white/50">Real-time updates, geofencing alerts, and advanced analytics</p>
            </div>
          </div>
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-medium hover:opacity-90 transition-opacity">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Design2;
