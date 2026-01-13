import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Zap, Radio, Activity, Cpu } from "lucide-react";

const Design3 = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Neon Border Top */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
      
      {/* Header */}
      <header className="border-b border-cyan-500/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 border border-cyan-500/50 hover:bg-cyan-500/20 rounded transition-colors">
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Radio className="w-8 h-8 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-cyan-400 text-xl tracking-wider">CYBER//TRACK</h1>
                <p className="text-xs text-cyan-400/50">v2.0.77 // SYSTEM ONLINE</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-pink-500 text-sm animate-pulse">[LIVE FEED ACTIVE]</span>
            <button className="px-4 py-2 border border-pink-500 text-pink-500 hover:bg-pink-500/20 rounded text-sm">
              + ADD UNIT
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Left Panel */}
        <div className="col-span-3 space-y-4">
          <div className="border border-cyan-500/30 rounded-lg overflow-hidden">
            <div className="bg-cyan-500/10 px-4 py-2 border-b border-cyan-500/30">
              <span className="text-cyan-400 text-sm">// ACTIVE UNITS</span>
            </div>
            <div className="p-2 space-y-2">
              {[
                { id: "UNIT-001", name: "GHOST RIDER", status: "MOBILE", speed: "87" },
                { id: "UNIT-007", name: "NIGHT HAWK", status: "IDLE", speed: "0" },
                { id: "UNIT-013", name: "SEA PHANTOM", status: "MOBILE", speed: "23" },
              ].map((unit, i) => (
                <div key={i} className="p-3 border border-purple-500/30 rounded bg-purple-500/5 hover:bg-purple-500/10 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 text-xs">{unit.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${unit.status === 'MOBILE' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {unit.status}
                    </span>
                  </div>
                  <p className="text-white mb-1">{unit.name}</p>
                  <p className="text-pink-400 text-2xl">{unit.speed} <span className="text-xs text-pink-400/50">KM/H</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="col-span-6">
          <div className="border border-cyan-500/30 rounded-lg overflow-hidden h-96 relative bg-gradient-to-br from-cyan-950/30 to-purple-950/30">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Center Point */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-2 border-cyan-500/50 animate-ping"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-pink-500 flex items-center justify-center bg-pink-500/20">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Labels */}
            <div className="absolute top-4 left-4 text-cyan-400/50 text-xs">
              LAT: 51.5074° N<br/>
              LON: 0.1278° W
            </div>
            <div className="absolute top-4 right-4 text-pink-400/50 text-xs text-right">
              ZOOM: 14x<br/>
              MODE: SATELLITE
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <button className="px-6 py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition-colors flex items-center gap-2">
                <Zap className="w-4 h-4" />
                LIVE TRACK
              </button>
              <div className="flex gap-2">
                <button className="px-4 py-3 border border-purple-500 text-purple-400 rounded hover:bg-purple-500/20 transition-colors">
                  GEOFENCE
                </button>
                <button className="px-4 py-3 border border-pink-500 text-pink-400 rounded hover:bg-pink-500/20 transition-colors">
                  PING
                </button>
              </div>
            </div>
          </div>

          {/* Telematics Bar */}
          <div className="mt-4 grid grid-cols-4 gap-4">
            {[
              { icon: Gauge, label: "VELOCITY", value: "87", unit: "KM/H", color: "cyan" },
              { icon: Satellite, label: "GPS FIX", value: "12", unit: "SATS", color: "purple" },
              { icon: Signal, label: "SIGNAL", value: "4G", unit: "LTE", color: "pink" },
              { icon: Battery, label: "POWER", value: "92", unit: "%", color: "yellow" },
            ].map((stat, i) => (
              <div key={i} className={`border border-${stat.color}-500/30 rounded-lg p-4 bg-${stat.color}-500/5`}>
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
                  <span className={`text-xs text-${stat.color}-400/70`}>{stat.label}</span>
                </div>
                <p className={`text-3xl text-${stat.color}-400`}>
                  {stat.value}
                  <span className="text-sm opacity-50 ml-1">{stat.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-3 space-y-4">
          <div className="border border-pink-500/30 rounded-lg overflow-hidden">
            <div className="bg-pink-500/10 px-4 py-2 border-b border-pink-500/30 flex items-center gap-2">
              <Activity className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 text-sm">SYSTEM STATUS</span>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-white/50">CPU LOAD</span>
                <span className="text-cyan-400">23%</span>
              </div>
              <div className="h-1 bg-white/10 rounded">
                <div className="h-full w-1/4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded"></div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-white/50">DATA TX</span>
                <span className="text-pink-400">1.2 MB/s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">UPTIME</span>
                <span className="text-purple-400">47:23:11</span>
              </div>
            </div>
          </div>

          {/* Subscription Box */}
          <div className="border border-yellow-500/50 rounded-lg p-4 bg-gradient-to-b from-yellow-500/10 to-transparent">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 text-sm">UPGRADE REQUIRED</span>
            </div>
            <p className="text-xs text-white/50 mb-4">
              Live tracking is a premium feature. Unlock real-time updates and advanced telemetry.
            </p>
            <button className="w-full py-3 bg-gradient-to-r from-yellow-500 to-pink-500 text-black font-bold rounded hover:opacity-90 transition-opacity">
              UNLOCK PRO ACCESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
