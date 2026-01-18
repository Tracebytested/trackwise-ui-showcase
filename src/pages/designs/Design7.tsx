import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Car, MapPin, Bell, Settings, Plus, Search, 
  Battery, Navigation, Activity, Eye, ArrowLeft, 
  Moon, Menu, X
} from 'lucide-react';

// Monochrome Minimal - Clean black and white design
const Design7 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const devices = [
    { id: 1, name: 'Tesla Model 3', plate: 'ABC-1234', status: 'moving', speed: 65, battery: 87, location: 'Highway 101, San Francisco' },
    { id: 2, name: 'Ford Transit', plate: 'XYZ-5678', status: 'idle', speed: 0, battery: 54, location: 'Warehouse District, Oakland' },
    { id: 3, name: 'BMW X5', plate: 'DEF-9012', status: 'parked', speed: 0, battery: 92, location: 'Downtown Parking, San Jose' },
    { id: 4, name: 'Mercedes Sprinter', plate: 'GHI-3456', status: 'offline', speed: 0, battery: 12, location: 'Last seen: Fremont' },
    { id: 5, name: 'Rivian R1T', plate: 'JKL-7890', status: 'moving', speed: 45, battery: 78, location: 'Mountain View' },
  ];

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'moving': return 'bg-black';
      case 'idle': return 'bg-gray-400';
      case 'parked': return 'bg-gray-600';
      case 'offline': return 'bg-gray-200';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-black">
        <div className="flex items-center justify-between px-8 h-16">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <Moon className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold tracking-tight">TRACEPORTAL</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {['Dashboard', 'Fleet', 'Map', 'Reports', 'Settings'].map((item, i) => (
                <button
                  key={item}
                  className={`text-sm ${i === 0 ? 'font-medium' : 'text-gray-500 hover:text-black'} transition-colors`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">
              ← Back
            </Link>
            <button className="p-2 hover:bg-gray-100 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></span>
            </button>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors">
              Add Vehicle
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="p-8 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Fleet Overview</h1>
          <p className="text-gray-500">Manage and monitor your vehicles</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-px bg-black mb-12">
          {[
            { label: 'Total Vehicles', value: '24' },
            { label: 'In Motion', value: '8' },
            { label: 'Total Distance', value: '2,847 km' },
            { label: 'Active Alerts', value: '3' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-8">
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search vehicles..." 
              className="w-full pl-8 pr-4 py-3 border-b border-gray-200 focus:border-black focus:outline-none text-sm"
            />
          </div>
          <div className="text-sm text-gray-500">
            Showing {devices.length} vehicles
          </div>
        </div>

        {/* Vehicle List */}
        <div className="border border-black">
          {devices.map((device, i) => (
            <div 
              key={device.id} 
              className={`flex items-center p-6 hover:bg-gray-50 transition-colors ${i !== devices.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mr-6">
                <Car className="w-8 h-8 text-gray-700" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-medium">{device.name}</h3>
                  <span className={`w-2 h-2 rounded-full ${getStatusDot(device.status)}`}></span>
                  <span className="text-xs text-gray-500 uppercase">{device.status}</span>
                </div>
                <p className="text-sm text-gray-500">{device.plate} • {device.location}</p>
              </div>

              <div className="flex items-center gap-12 text-sm mr-8">
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Speed</p>
                  <p className="font-medium">{device.speed} km/h</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase mb-1">Battery</p>
                  <p className="font-medium">{device.battery}%</p>
                </div>
              </div>

              <button className="px-4 py-2 border border-black text-sm hover:bg-black hover:text-white transition-colors">
                View
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Design7;
