import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Play, Pause, SkipBack, SkipForward, Calendar, Car } from 'lucide-react';
import { useDevices } from '@/hooks/useDevices';
import { useSubscription } from '@/hooks/useSubscription';

const History = () => {
  const { devices, loading } = useDevices();
  const { canAccessLiveTracking } = useSubscription();
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId);

  // Mock history data for demo
  const mockHistoryPoints = [
    { time: '08:00', lat: 51.5074, lng: -0.1278, speed: 0, address: 'Home - London' },
    { time: '08:30', lat: 51.5155, lng: -0.1419, speed: 45, address: 'A40 Western Avenue' },
    { time: '09:00', lat: 51.5234, lng: -0.1543, speed: 32, address: 'Shepherd\'s Bush' },
    { time: '09:30', lat: 51.5312, lng: -0.1234, speed: 0, address: 'Office - Paddington' },
    { time: '12:00', lat: 51.5234, lng: -0.1543, speed: 28, address: 'Lunch - Notting Hill' },
    { time: '14:00', lat: 51.5312, lng: -0.1234, speed: 0, address: 'Office - Paddington' },
    { time: '17:30', lat: 51.5155, lng: -0.1419, speed: 52, address: 'A40 Western Avenue' },
    { time: '18:00', lat: 51.5074, lng: -0.1278, speed: 0, address: 'Home - London' },
  ];

  if (!canAccessLiveTracking) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <Clock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">History is a Pro Feature</h2>
          <p className="text-gray-400 mb-6">Upgrade to Pro to view route history and playback</p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              Go Back
            </Link>
            <Link to="/subscribe" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500">
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold">History Playback</h1>
              <p className="text-sm text-gray-500">View and replay device routes</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Device Selector */}
          <div className="col-span-1 bg-gray-900 border border-gray-800 rounded-2xl p-4">
            <h3 className="font-semibold mb-4">Select Device</h3>
            <div className="space-y-2">
              {loading ? (
                <div className="text-sm text-gray-500">Loading...</div>
              ) : devices.length === 0 ? (
                <div className="text-sm text-gray-500">No devices</div>
              ) : (
                devices.map((device) => (
                  <button
                    key={device.id}
                    onClick={() => setSelectedDeviceId(device.id)}
                    className={`w-full p-3 rounded-xl text-left transition-colors ${
                      selectedDeviceId === device.id
                        ? 'bg-blue-600'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Car className="w-4 h-4" />
                      <div>
                        <p className="text-sm font-medium">{device.name}</p>
                        <p className="text-xs text-gray-400">{device.plate}</p>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Map & Timeline */}
          <div className="col-span-3 space-y-4">
            {/* Map */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-500">
                  {selectedDevice 
                    ? `Route for ${selectedDevice.name} on ${selectedDate}`
                    : 'Select a device to view history'
                  }
                </p>
              </div>
              {selectedDevice && (
                <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur rounded-xl p-3">
                  <p className="text-xs text-gray-400">Current Position</p>
                  <p className="font-medium">{mockHistoryPoints[playbackPosition]?.address}</p>
                  <p className="text-xs text-gray-500">{mockHistoryPoints[playbackPosition]?.time}</p>
                </div>
              )}
            </div>

            {/* Playback Controls */}
            {selectedDevice && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setPlaybackPosition(0)}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      <SkipBack className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button 
                      onClick={() => setPlaybackPosition(mockHistoryPoints.length - 1)}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      <SkipForward className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={mockHistoryPoints.length - 1}
                      value={playbackPosition}
                      onChange={(e) => setPlaybackPosition(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{mockHistoryPoints[0]?.time}</span>
                      <span>{mockHistoryPoints[mockHistoryPoints.length - 1]?.time}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono">{mockHistoryPoints[playbackPosition]?.time}</p>
                    <p className="text-xs text-gray-500">{mockHistoryPoints[playbackPosition]?.speed} km/h</p>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline Events */}
            {selectedDevice && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
                <h3 className="font-semibold mb-4">Route Timeline</h3>
                <div className="space-y-3 max-h-48 overflow-auto">
                  {mockHistoryPoints.map((point, i) => (
                    <button
                      key={i}
                      onClick={() => setPlaybackPosition(i)}
                      className={`w-full p-3 rounded-xl text-left flex items-center gap-4 transition-colors ${
                        playbackPosition === i
                          ? 'bg-blue-600/20 border border-blue-500/50'
                          : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{point.address}</p>
                        <p className="text-xs text-gray-500">{point.time} • {point.speed} km/h</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
