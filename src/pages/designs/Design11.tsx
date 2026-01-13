import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Car, Search, Filter, Bell } from "lucide-react";

const Design11 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-gray-100 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-400 hover:text-gray-600">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-light text-gray-800">
              pure<span className="font-semibold">track</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:border-gray-400"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Hero Stats */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Fleet Overview</p>
          <div className="flex items-center justify-center gap-16">
            <div>
              <p className="text-6xl font-extralight text-gray-800">12</p>
              <p className="text-sm text-gray-500">Devices</p>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div>
              <p className="text-6xl font-extralight text-emerald-500">8</p>
              <p className="text-sm text-gray-500">Active</p>
            </div>
            <div className="w-px h-16 bg-gray-200"></div>
            <div>
              <p className="text-6xl font-extralight text-gray-800">54</p>
              <p className="text-sm text-gray-500">km/h avg</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-16">
          {/* Map */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-light text-gray-800">Location</h2>
              <button className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
            <div className="aspect-square bg-gray-50 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-50" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #ddd 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>
              <div className="text-center z-10">
                <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-400">Interactive Map</p>
              </div>
            </div>
          </div>

          {/* Devices */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-light text-gray-800">Devices</h2>
              <button className="text-sm text-gray-800 font-medium">+ Add</button>
            </div>
            <div className="space-y-4">
              {[
                { name: "BMW 5 Series", status: "Moving", speed: "72 km/h", battery: 94 },
                { name: "Mercedes Sprinter", status: "Idle", speed: "0 km/h", battery: 67 },
                { name: "Swift Challenger", status: "Parked", speed: "0 km/h", battery: 88 },
                { name: "Princess Yacht 45", status: "Cruising", speed: "18 kn", battery: 91 },
              ].map((device, i) => (
                <div 
                  key={i} 
                  className="p-6 border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{device.name}</h3>
                      <p className="text-sm text-gray-400">{device.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-light text-gray-800">{device.speed}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Battery className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{device.battery}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Panel */}
        <div className="mt-16 pt-16 border-t border-gray-100">
          <h2 className="text-lg font-light text-gray-800 mb-8">BMW 5 Series — Telemetry</h2>
          <div className="grid grid-cols-6 gap-8">
            {[
              { icon: Gauge, label: "Speed", value: "72 km/h" },
              { icon: Satellite, label: "Satellites", value: "14" },
              { icon: Signal, label: "Signal", value: "4G" },
              { icon: Battery, label: "Battery", value: "94%" },
              { icon: Navigation, label: "Heading", value: "NE" },
              { icon: MapPin, label: "Location", value: "51.5°N" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-5 h-5 text-gray-400 mx-auto mb-3" />
                <p className="text-2xl font-light text-gray-800 mb-1">{item.value}</p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block border border-gray-200 rounded-full px-8 py-4">
            <span className="text-gray-500">Live tracking requires </span>
            <a href="#" className="text-gray-800 font-medium underline underline-offset-4">Pro subscription</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Design11;
