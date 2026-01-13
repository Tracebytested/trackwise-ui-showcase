import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Gauge, Satellite, Signal, Battery, Navigation, Car, Ship, Caravan, MoreVertical } from "lucide-react";

const Design19 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Panel - Fleet */}
      <div className="w-1/2 bg-gray-950 border-r border-gray-800 flex flex-col">
        <header className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold">SplitView</h1>
                <p className="text-sm text-gray-500">Fleet Overview</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">
              + Add Device
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800">
          {[
            { label: "Total", value: "12", color: "blue" },
            { label: "Active", value: "9", color: "green" },
            { label: "Alerts", value: "2", color: "yellow" },
          ].map((stat, i) => (
            <div key={i} className={`bg-${stat.color}-500/10 border border-${stat.color}-500/30 rounded-xl p-4 text-center`}>
              <p className={`text-3xl font-bold text-${stat.color}-400`}>{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Device List */}
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-3">
            {[
              { name: "Range Rover Sport", plate: "AB12 CDE", status: "Moving", speed: "78 km/h", type: Car, selected: true },
              { name: "Mercedes V-Class", plate: "XY34 ZAB", status: "Idle", speed: "0 km/h", type: Car, selected: false },
              { name: "Swift Challenger 580", plate: "Caravan", status: "Towing", speed: "54 km/h", type: Caravan, selected: false },
              { name: "Princess V48", plate: "Marina B7", status: "Cruising", speed: "18 kn", type: Ship, selected: false },
              { name: "BMW X5", plate: "CD56 EFG", status: "Parked", speed: "0 km/h", type: Car, selected: false },
              { name: "Fairline Squadron", plate: "Marina C2", status: "Anchored", speed: "0 kn", type: Ship, selected: false },
            ].map((device, i) => (
              <div key={i} className={`p-4 rounded-xl border cursor-pointer transition-all ${
                device.selected 
                  ? 'bg-blue-500/10 border-blue-500/50' 
                  : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    device.selected ? 'bg-blue-500' : 'bg-gray-700'
                  }`}>
                    <device.type className={`w-6 h-6 ${device.selected ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{device.name}</h3>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">{device.plate}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700/50">
                  <span className={`text-sm ${
                    device.status === 'Moving' || device.status === 'Cruising' || device.status === 'Towing'
                      ? 'text-green-400'
                      : 'text-gray-500'
                  }`}>{device.status}</span>
                  <span className="text-lg font-bold">{device.speed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Details */}
      <div className="w-1/2 flex flex-col">
        {/* Map Section */}
        <div className="flex-1 bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-500">Live Location Map</p>
              <p className="text-sm text-gray-600">Range Rover Sport</p>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">Live</button>
            <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm">History</button>
            <button className="px-4 py-2 bg-gray-700 rounded-lg text-sm">Geofence</button>
          </div>

          {/* Location Info */}
          <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur rounded-xl p-4">
            <p className="text-sm text-gray-400">Current Location</p>
            <p className="font-medium">A40, London, UK</p>
            <p className="text-xs text-gray-500 mt-1">51.5074° N, 0.1278° W</p>
          </div>
        </div>

        {/* Telemetry Section */}
        <div className="bg-gray-900 border-t border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold">Range Rover Sport</h2>
              <p className="text-sm text-gray-500">AB12 CDE • Last update: 2s ago</p>
            </div>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm">Ping Device</button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Gauge, label: "Speed", value: "78 km/h", color: "blue" },
              { icon: Satellite, label: "GPS Sats", value: "14", color: "green" },
              { icon: Signal, label: "Signal", value: "4G LTE", color: "purple" },
              { icon: Battery, label: "Battery", value: "94%", color: "yellow" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-4">
                <item.icon className={`w-5 h-5 text-${item.color}-400 mb-3`} />
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>

          {/* SIM Info */}
          <div className="mt-4 bg-gray-800 rounded-xl p-4">
            <h3 className="text-sm font-medium text-gray-400 mb-3">SIM Information</h3>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-500">ICCID</p>
                <p className="font-mono">8944...7890</p>
              </div>
              <div>
                <p className="text-gray-500">Carrier</p>
                <p>Vodafone UK</p>
              </div>
              <div>
                <p className="text-gray-500">Data Used</p>
                <p>234 MB</p>
              </div>
              <div>
                <p className="text-gray-500">Roaming</p>
                <p className="text-green-400">No</p>
              </div>
            </div>
          </div>

          {/* Subscription CTA */}
          <div className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">Upgrade for Live Tracking</p>
              <p className="text-sm text-blue-200">Real-time updates every second</p>
            </div>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design19;
