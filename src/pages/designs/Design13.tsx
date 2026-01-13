import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Anchor, Waves, Compass, Wind, Thermometer } from "lucide-react";

const Design13 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-blue-800/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 border border-blue-700/50 rounded-lg hover:bg-blue-900/30">
              <ArrowLeft className="w-5 h-5 text-blue-300" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-100">Maritime Track</h1>
                <p className="text-sm text-blue-400">Fleet & Vessel Monitoring</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
              <Waves className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">3 Vessels Active</span>
            </div>
            <button className="px-5 py-2 bg-blue-600 rounded-lg text-sm font-medium">Add Vessel</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Weather Bar */}
        <div className="mb-6 p-4 bg-blue-900/30 border border-blue-800/30 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200">Wind: 12 kn NW</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200">Sea State: Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200">18°C</span>
            </div>
          </div>
          <span className="text-blue-400 text-sm">Updated 2 min ago</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Vessel List */}
          <div className="col-span-3 space-y-4">
            <h2 className="text-lg font-semibold text-blue-100 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-cyan-400" />
              Fleet
            </h2>
            {[
              { name: "Princess 55", type: "Motor Yacht", status: "Cruising", speed: "18 kn", location: "English Channel" },
              { name: "Sunseeker 40", type: "Sport Yacht", status: "Anchored", speed: "0 kn", location: "Brighton Marina" },
              { name: "Beneteau Swift", type: "Caravan Tow", status: "On Trailer", speed: "45 km/h", location: "M25 Junction 8" },
              { name: "Range Rover", type: "Tow Vehicle", status: "Moving", speed: "45 km/h", location: "M25 Junction 8" },
            ].map((vessel, i) => (
              <div key={i} className={`p-4 rounded-xl border ${
                i === 0 
                  ? 'bg-blue-800/30 border-cyan-500/50' 
                  : 'bg-blue-900/20 border-blue-800/30 hover:border-blue-700/50'
              } cursor-pointer transition-colors`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-400">{vessel.type}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    vessel.status === 'Cruising' || vessel.status === 'Moving' 
                      ? 'bg-cyan-500/20 text-cyan-300' 
                      : 'bg-blue-800/50 text-blue-300'
                  }`}>{vessel.status}</span>
                </div>
                <h3 className="font-semibold text-blue-100 mb-1">{vessel.name}</h3>
                <p className="text-sm text-blue-400 mb-2">{vessel.location}</p>
                <p className="text-2xl font-light text-cyan-300">{vessel.speed}</p>
              </div>
            ))}
          </div>

          {/* Map Area */}
          <div className="col-span-6">
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl overflow-hidden">
              <div className="p-4 border-b border-blue-800/30 flex items-center justify-between">
                <h2 className="font-semibold text-blue-100">Chart View</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-cyan-600 rounded-lg text-sm">Live Track</button>
                  <button className="px-4 py-1.5 bg-blue-800/50 rounded-lg text-sm">Voyage</button>
                </div>
              </div>
              <div className="h-96 bg-gradient-to-br from-blue-950 to-slate-900 relative">
                {/* Water pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q10 15 20 20 T40 20' fill='none' stroke='%2300BFFF' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px'
                }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Compass className="w-16 h-16 text-cyan-500/50 mx-auto mb-4" />
                    <p className="text-blue-400">Marine Chart Display</p>
                  </div>
                </div>

                {/* Vessel markers */}
                <div className="absolute top-1/3 left-1/2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-cyan-300 bg-blue-950/80 px-2 py-1 rounded">Princess 55</span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry */}
          <div className="col-span-3 space-y-4">
            <h2 className="text-lg font-semibold text-blue-100">Princess 55 - Live</h2>
            
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Gauge, label: "Speed", value: "18 kn" },
                  { icon: Compass, label: "Heading", value: "225° SW" },
                  { icon: Satellite, label: "GPS", value: "16 Sats" },
                  { icon: Signal, label: "Signal", value: "4G" },
                  { icon: Battery, label: "Power", value: "94%" },
                  { icon: Anchor, label: "Depth", value: "45m" },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-blue-950/50 rounded-lg">
                    <item.icon className="w-4 h-4 text-cyan-400 mb-2" />
                    <p className="text-lg font-semibold text-blue-100">{item.value}</p>
                    <p className="text-xs text-blue-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-4">
              <h3 className="text-sm font-medium text-blue-200 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-2 bg-cyan-600 rounded-lg text-sm font-medium">Set Geofence</button>
                <button className="w-full py-2 bg-blue-800/50 border border-blue-700/50 rounded-lg text-sm">Ping Vessel</button>
                <button className="w-full py-2 bg-blue-800/50 border border-blue-700/50 rounded-lg text-sm">View History</button>
              </div>
            </div>

            {/* Subscription */}
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-4">
              <h3 className="font-medium text-cyan-200 mb-2">Pro Features</h3>
              <p className="text-sm text-blue-300 mb-3">
                Unlock live tracking, AIS data, and voyage planning.
              </p>
              <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design13;
