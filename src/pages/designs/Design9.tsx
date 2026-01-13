import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Car, Ship, Caravan, MoreVertical } from "lucide-react";

const Design9 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">CardGrid Tracker</h1>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
            + Add Device
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Devices", value: "8", color: "indigo" },
            { label: "Active Now", value: "6", color: "emerald" },
            { label: "Alerts", value: "2", color: "amber" },
            { label: "Geofences", value: "5", color: "blue" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className={`text-3xl font-bold text-${item.color}-600`}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Device Cards Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {[
            { name: "BMW X5", plate: "AB12 CDE", status: "Moving", speed: "78 km/h", battery: 94, signal: "4G", sats: 14, type: Car, color: "indigo" },
            { name: "Mercedes Sprinter", plate: "XY34 ZAB", status: "Idle", speed: "0 km/h", battery: 67, signal: "3G", sats: 12, type: Car, color: "amber" },
            { name: "Bailey Unicorn", plate: "Caravan", status: "Parked", speed: "0 km/h", battery: 88, signal: "4G", sats: 11, type: Caravan, color: "emerald" },
            { name: "Audi Q7", plate: "CD56 EFG", status: "Moving", speed: "54 km/h", battery: 72, signal: "5G", sats: 16, type: Car, color: "blue" },
            { name: "Princess 45", plate: "Marina C3", status: "Anchored", speed: "0 kn", battery: 91, signal: "4G", sats: 13, type: Ship, color: "cyan" },
            { name: "Swift Challenger", plate: "Caravan 2", status: "Towing", speed: "45 km/h", battery: 85, signal: "4G", sats: 15, type: Caravan, color: "purple" },
          ].map((device, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className={`bg-${device.color}-50 px-5 py-4 border-b border-${device.color}-100`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-${device.color}-100 flex items-center justify-center`}>
                      <device.type className={`w-5 h-5 text-${device.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{device.name}</h3>
                      <p className="text-sm text-gray-500">{device.plate}</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-white/50 rounded">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    device.status === 'Moving' || device.status === 'Towing' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {device.status}
                  </span>
                  <span className="text-2xl font-bold text-gray-800">{device.speed}</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Battery className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm font-medium text-gray-700">{device.battery}%</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Signal className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm font-medium text-gray-700">{device.signal}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Satellite className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm font-medium text-gray-700">{device.sats}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                <button className="text-indigo-600 text-sm font-medium">View on Map</button>
                <button className="text-gray-500 text-sm">Ping</button>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-800">Fleet Overview</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">Live</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm">Geofences</button>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-indigo-600 mx-auto mb-2" />
              <p className="text-gray-500">Interactive Map</p>
            </div>
          </div>
        </div>

        {/* Subscription Banner */}
        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-1">Unlock Premium Features</h3>
            <p className="text-indigo-100">Live tracking, advanced geofencing, and real-time alerts</p>
          </div>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-medium">
            Subscribe Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Design9;
