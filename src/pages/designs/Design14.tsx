import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Flag, Timer, Zap, TrendingUp, Activity } from "lucide-react";

const Design14 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Racing stripe header */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500"></div>
      
      <header className="px-6 py-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 bg-zinc-900 rounded-lg hover:bg-zinc-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center transform -skew-x-6">
                <Gauge className="w-6 h-6 transform skew-x-6" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight">VELOCITY<span className="text-red-500">TRACK</span></h1>
                <p className="text-xs text-zinc-500">PERFORMANCE MONITORING</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-lg">
              <Activity className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm text-red-400 font-medium">LIVE</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Speed Display */}
        <div className="text-center mb-8">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Current Velocity</p>
          <div className="relative inline-block">
            <span className="text-9xl font-black bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">87</span>
            <span className="text-3xl font-bold text-zinc-500 ml-2">KM/H</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-green-400">+12 km/h from last reading</span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {[
            { label: "TOP SPEED", value: "142", unit: "km/h", color: "red" },
            { label: "AVG SPEED", value: "67", unit: "km/h", color: "orange" },
            { label: "DISTANCE", value: "234", unit: "km", color: "yellow" },
            { label: "TRIP TIME", value: "3:24", unit: "hrs", color: "green" },
            { label: "G-FORCE", value: "0.3", unit: "G", color: "blue" },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-${stat.color}-500`}></div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-black">{stat.value}<span className="text-lg text-zinc-500 font-normal ml-1">{stat.unit}</span></p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Vehicle Cards */}
          <div className="col-span-1 space-y-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Flag className="w-5 h-5 text-red-500" />
              Fleet
            </h2>
            {[
              { name: "BMW M4 Competition", status: "Racing", speed: "87 km/h", maxSpeed: "142 km/h" },
              { name: "Porsche 911 GT3", status: "Pit Stop", speed: "0 km/h", maxSpeed: "167 km/h" },
              { name: "Audi RS6", status: "Cruising", speed: "54 km/h", maxSpeed: "98 km/h" },
            ].map((car, i) => (
              <div key={i} className={`p-4 rounded-xl border ${
                i === 0 
                  ? 'bg-gradient-to-r from-red-950/50 to-orange-950/30 border-red-500/50' 
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
              } cursor-pointer transition-colors`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    car.status === 'Racing' 
                      ? 'bg-red-500/20 text-red-400' 
                      : car.status === 'Pit Stop'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-green-500/20 text-green-400'
                  }`}>{car.status}</span>
                </div>
                <h3 className="font-bold mb-1">{car.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black">{car.speed}</span>
                  <span className="text-xs text-zinc-500">Max: {car.maxSpeed}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Track Map */}
          <div className="col-span-2">
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                <h2 className="font-bold">Live Track</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-red-600 rounded-lg text-sm font-bold">LIVE</button>
                  <button className="px-4 py-2 bg-zinc-800 rounded-lg text-sm">REPLAY</button>
                </div>
              </div>
              <div className="h-64 bg-zinc-950 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #333 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }}></div>
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-2" />
                  <p className="text-zinc-500">Track Map</p>
                </div>
              </div>
            </div>

            {/* Telemetry Grid */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[
                { icon: Gauge, label: "SPEED", value: "87 km/h", color: "red" },
                { icon: Satellite, label: "GPS", value: "16 Sats", color: "blue" },
                { icon: Signal, label: "SIGNAL", value: "5G", color: "green" },
                { icon: Battery, label: "BATTERY", value: "94%", color: "yellow" },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className={`w-4 h-4 text-${item.color}-500`} />
                    <span className="text-xs text-zinc-500">{item.label}</span>
                  </div>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pro CTA */}
        <div className="mt-8 bg-gradient-to-r from-red-950/50 via-orange-950/30 to-yellow-950/30 border border-red-500/30 rounded-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center transform -skew-x-6">
              <Zap className="w-7 h-7 transform skew-x-6" />
            </div>
            <div>
              <h3 className="text-xl font-black">UNLOCK PRO TELEMETRY</h3>
              <p className="text-zinc-400">Real-time data, lap timing, and performance analytics</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl font-bold transform hover:scale-105 transition-transform">
            UPGRADE NOW
          </button>
        </div>
      </main>
    </div>
  );
};

export default Design14;
