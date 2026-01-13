import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Zap, Circle, Square, Triangle } from "lucide-react";

const Design17 = () => {
  return (
    <div className="min-h-screen bg-indigo-600 text-white">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="p-2 bg-white/10 rounded-xl hover:bg-white/20">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <Circle className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Square className="w-4 h-4 fill-pink-400 text-pink-400" />
                <Triangle className="w-4 h-4 fill-cyan-400 text-cyan-400" />
              </div>
              <span className="text-xl font-bold">FlatTrack</span>
            </div>
          </div>
          <button className="px-5 py-2 bg-white text-indigo-600 rounded-full font-bold">
            + Add Device
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Devices", value: "12", color: "bg-yellow-400 text-yellow-900" },
            { label: "Active", value: "8", color: "bg-pink-400 text-pink-900" },
            { label: "Avg Speed", value: "54 km/h", color: "bg-cyan-400 text-cyan-900" },
            { label: "Alerts", value: "3", color: "bg-orange-400 text-orange-900" },
          ].map((stat, i) => (
            <div key={i} className={`${stat.color} rounded-3xl p-6`}>
              <p className="text-sm opacity-80 mb-1">{stat.label}</p>
              <p className="text-4xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Device List */}
          <div className="col-span-4 space-y-4">
            <h2 className="font-bold text-lg">My Devices</h2>
            {[
              { name: "BMW M3", status: "Moving", speed: "87 km/h", color: "yellow" },
              { name: "VW California", status: "Parked", speed: "0 km/h", color: "pink" },
              { name: "Sea Ray 250", status: "Docked", speed: "0 kn", color: "cyan" },
              { name: "Audi e-tron", status: "Charging", speed: "0 km/h", color: "orange" },
            ].map((device, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 hover:bg-white/20 cursor-pointer transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-${device.color}-400 rounded-xl flex items-center justify-center`}>
                    <Navigation className={`w-6 h-6 text-${device.color}-900`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{device.name}</h3>
                    <p className="text-sm text-white/60">{device.status}</p>
                  </div>
                  <span className="text-lg font-bold">{device.speed}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="col-span-8">
            <div className="bg-white rounded-3xl overflow-hidden h-full">
              <div className="bg-indigo-700 px-6 py-4 flex items-center justify-between">
                <h2 className="font-bold text-white">Live Map</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold">Live</button>
                  <button className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">History</button>
                </div>
              </div>
              <div className="h-72 bg-indigo-100 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-50" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }}></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-indigo-600 font-medium">Interactive Map</p>
                </div>
              </div>
              
              {/* Telemetry */}
              <div className="p-6 grid grid-cols-4 gap-4">
                {[
                  { icon: Gauge, label: "Speed", value: "87 km/h", color: "yellow" },
                  { icon: Satellite, label: "GPS", value: "14", color: "pink" },
                  { icon: Signal, label: "Signal", value: "5G", color: "cyan" },
                  { icon: Battery, label: "Power", value: "94%", color: "orange" },
                ].map((item, i) => (
                  <div key={i} className={`bg-${item.color}-100 rounded-2xl p-4 text-center`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-600 mx-auto mb-2`} />
                    <p className={`text-xl font-black text-${item.color}-600`}>{item.value}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-white rounded-3xl p-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-900" />
              </div>
              <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-pink-900" />
              </div>
              <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-900" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-indigo-600">Unlock Pro Features!</h3>
              <p className="text-gray-500">Live tracking, geofencing, and instant alerts</p>
            </div>
          </div>
          <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg">
            Subscribe Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Design17;
