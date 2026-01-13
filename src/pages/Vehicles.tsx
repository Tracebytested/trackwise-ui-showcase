import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Ship, Caravan, Plus, Trash2, Edit2, MapPin, Signal, Battery, MoreVertical, X } from 'lucide-react';
import { useDevices, Device } from '@/hooks/useDevices';
import { useDeviceTelemetry } from '@/hooks/useDeviceTelemetry';
import { DeviceStatusBadge } from '@/components/shared/DeviceStatusBadge';
import { AddDeviceDialog } from '@/components/shared/AddDeviceDialog';

const getDeviceIcon = (type: string) => {
  switch (type) {
    case 'yacht': return Ship;
    case 'caravan': return Caravan;
    default: return Car;
  }
};

const Vehicles = () => {
  const { devices, loading, deleteDevice, totalCount, activeCount, movingCount } = useDevices();
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingDevice, setEditingDevice] = useState<Device | null>(null);

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];
  const { telemetry } = useDeviceTelemetry(selectedDevice?.id || null);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this device?')) {
      await deleteDevice(id);
    }
  };

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
              <h1 className="text-xl font-bold">Vehicles</h1>
              <p className="text-sm text-gray-500">{totalCount} total • {activeCount} active • {movingCount} moving</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddDevice(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            <Plus className="w-4 h-4" />
            Add Vehicle
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Vehicle List */}
          <div className="col-span-2">
            {loading ? (
              <div className="text-center py-12 text-gray-500">Loading vehicles...</div>
            ) : devices.length === 0 ? (
              <div className="text-center py-12 bg-gray-900 border border-gray-800 rounded-2xl">
                <Car className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No vehicles yet</h3>
                <p className="text-gray-500 mb-4">Add your first vehicle to start tracking</p>
                <button
                  onClick={() => setShowAddDevice(true)}
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Add Vehicle
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {devices.map((device) => {
                  const Icon = getDeviceIcon(device.type);
                  const isSelected = selectedDevice?.id === device.id;

                  return (
                    <div
                      key={device.id}
                      onClick={() => setSelectedDeviceId(device.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-blue-500/10 border-blue-500/50'
                          : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-blue-500' : 'bg-gray-800'
                        }`}>
                          <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{device.name}</h3>
                            <DeviceStatusBadge status={device.status} />
                          </div>
                          <p className="text-sm text-gray-500">{device.plate || 'No plate'}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                            <span>IMEI: {device.imei || 'N/A'}</span>
                            <span>Type: {device.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingDevice(device);
                              setShowEditModal(true);
                            }}
                            className="p-2 hover:bg-gray-800 rounded-lg"
                          >
                            <Edit2 className="w-4 h-4 text-gray-400" />
                          </button>
                          <button
                            onClick={(e) => handleDelete(device.id, e)}
                            className="p-2 hover:bg-gray-800 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Device Details Panel */}
          <div className="col-span-1">
            {selectedDevice ? (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sticky top-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Device Details</h3>
                  <DeviceStatusBadge status={selectedDevice.status} showLabel />
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="font-medium">{selectedDevice.name}</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <p className="text-xs text-gray-500">Plate</p>
                    <p className="font-medium">{selectedDevice.plate || 'Not set'}</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <p className="text-xs text-gray-500">IMEI</p>
                    <p className="font-mono text-sm">{selectedDevice.imei || 'Not set'}</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <p className="text-xs text-gray-500">SIM ICCID</p>
                    <p className="font-mono text-sm">{selectedDevice.sim_iccid || 'Not set'}</p>
                  </div>

                  {telemetry && (
                    <>
                      <div className="border-t border-gray-700 pt-4">
                        <h4 className="text-sm font-medium mb-3 text-gray-400">Latest Telemetry</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-gray-800 rounded-lg">
                            <p className="text-xs text-gray-500">Speed</p>
                            <p className="font-bold">{telemetry.speed} km/h</p>
                          </div>
                          <div className="p-2 bg-gray-800 rounded-lg">
                            <p className="text-xs text-gray-500">Battery</p>
                            <p className="font-bold">{telemetry.battery_level}%</p>
                          </div>
                          <div className="p-2 bg-gray-800 rounded-lg">
                            <p className="text-xs text-gray-500">Signal</p>
                            <p className="font-bold">{telemetry.signal_strength}%</p>
                          </div>
                          <div className="p-2 bg-gray-800 rounded-lg">
                            <p className="text-xs text-gray-500">GPS</p>
                            <p className="font-bold">{telemetry.satellites} sats</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-800 rounded-xl">
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-medium">{telemetry.address || 'Unknown'}</p>
                      </div>
                    </>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/history?device=${selectedDevice.id}`}
                      className="py-2 bg-gray-800 rounded-lg text-sm text-center hover:bg-gray-700"
                    >
                      View History
                    </Link>
                    <button className="py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-500">
                      Live Track
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
                <Car className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">Select a vehicle to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AddDeviceDialog isOpen={showAddDevice} onClose={() => setShowAddDevice(false)} />
    </div>
  );
};

export default Vehicles;
