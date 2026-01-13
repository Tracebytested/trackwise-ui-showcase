import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Zap, MoreHorizontal } from "lucide-react";

const Design6 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-white/20 backdrop-blur rounded-xl hover:bg-white/30 transition-colors">
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Navigation className="w-5 h-5 text-fuchsia-600" />
              </div>
              <span className="text-white font-bold text-xl">Gradient Track</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/20 backdrop-blur rounded-xl text-white text-sm">
              Add Device
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Active Devices", value: "12", icon: Signal, gradient: "from-amber-400 to-orange-500" },
              { label: "Avg Speed", value: "54 km/h", icon: Gauge, gradient: "from-emerald-400 to-teal-500" },
              { label: "GPS Quality", value: "Excellent", icon: Satellite, gradient: "from-blue-400 to-indigo-500" },
              { label: "Alerts", value: "2", icon: Zap, gradient: "from-rose-400 to-pink-500" },
            ].map((stat, i) => (
              <div key={i} className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-5 text-white`}>
                <stat.icon className="w-6 h-6 mb-3 opacity-80" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-6">
            {/* Map */}
            <div className="col-span-2 bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Live Map</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white rounded-xl text-sm font-medium">
                    Live Track
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-sm">
                    History
                  </button>
                </div>
              </div>
              <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #ddd 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-500">Interactive Map View</p>
                </div>
              </div>
            </div>

            {/* Device List */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h2 className="text-xl font-bold text-gray-800 mb-4">My Devices</h2>
              <div className="space-y-3">
                {[
                  { name: "BMW 5 Series", status: "Moving", speed: "78 km/h", color: "from-emerald-400 to-teal-500" },
                  { name: "Swift Caravan", status: "Parked", speed: "0 km/h", color: "from-amber-400 to-orange-500" },
                  { name: "Princess Yacht", status: "Anchored", speed: "0 kn", color: "from-blue-400 to-indigo-500" },
                  { name: "Audi Q7", status: "Moving", speed: "45 km/h", color: "from-rose-400 to-pink-500" },
                ].map((device, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${device.color} rounded-xl flex items-center justify-center`}>
                        <Navigation className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{device.name}</p>
                        <p className="text-sm text-gray-500">{device.status} • {device.speed}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${device.status === 'Moving' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Telemetry Grid */}
          <div className="mt-6 bg-white rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">BMW 5 Series - Telemetry</h3>
            <div className="grid grid-cols-6 gap-4">
              {[
                { icon: Gauge, label: "Speed", value: "78 km/h", color: "from-rose-400 to-pink-500" },
                { icon: Satellite, label: "Satellites", value: "14 GPS", color: "from-blue-400 to-indigo-500" },
                { icon: Signal, label: "Signal", value: "4G LTE", color: "from-emerald-400 to-teal-500" },
                { icon: Battery, label: "Battery", value: "94%", color: "from-amber-400 to-orange-500" },
                { icon: MapPin, label: "Heading", value: "NE 45°", color: "from-purple-400 to-violet-500" },
                { icon: Zap, label: "Ignition", value: "ON", color: "from-fuchsia-400 to-pink-500" },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.color} rounded-2xl p-4 text-white text-center`}>
                  <item.icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-sm opacity-80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Banner */}
          <div className="mt-6 bg-white rounded-3xl p-6 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">Unlock Live Tracking</h3>
                <p className="text-gray-500">Real-time updates, geofencing, and smart alerts</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
              Subscribe Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design6;
