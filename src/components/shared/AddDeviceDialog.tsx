import { useState } from 'react';
import { X, Car, Ship, Caravan, Shield, Truck, HelpCircle } from 'lucide-react';
import { useDevices } from '@/hooks/useDevices';
interface AddDeviceDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export const AddDeviceDialog = ({
  isOpen,
  onClose
}: AddDeviceDialogProps) => {
  const {
    addDevice
  } = useDevices();
  const [name, setName] = useState('');
  const [plate, setPlate] = useState('');
  const [type, setType] = useState('vehicle');
  const [imei, setImei] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const {
      error
    } = await addDevice({
      name,
      plate,
      type,
      imei,
      status: 'offline'
    });
    if (error) {
      setError(error.message);
    } else {
      onClose();
      setName('');
      setPlate('');
      setType('vehicle');
      setImei('');
    }
    setLoading(false);
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Add New Device</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Device Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500" placeholder="e.g., BMW X5" required />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Select Model</label>
            <select 
              value={plate} 
              onChange={e => setPlate(e.target.value)} 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
            >
              <option value="">Select a model...</option>
              <option value="BMW X5">BMW X5</option>
              <option value="BMW X3">BMW X3</option>
              <option value="Mercedes GLC">Mercedes GLC</option>
              <option value="Audi Q5">Audi Q5</option>
              <option value="Toyota Land Cruiser">Toyota Land Cruiser</option>
              <option value="Range Rover">Range Rover</option>
              <option value="Volvo XC90">Volvo XC90</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Device Type</label>
            <div className="grid grid-cols-3 gap-2">
              {[{
              value: 'vehicle',
              label: 'Vehicle',
              icon: Car
            }, {
              value: 'boat',
              label: 'Boat',
              icon: Ship
            }, {
              value: 'caravan',
              label: 'Caravan',
              icon: Caravan
            }, {
              value: 'security_tower',
              label: 'Security Tower',
              icon: Shield
            }, {
              value: 'truck',
              label: 'Truck',
              icon: Truck
            }, {
              value: 'other',
              label: 'Other',
              icon: HelpCircle
            }].map(item => <button key={item.value} type="button" onClick={() => setType(item.value)} className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-colors ${type === item.value ? 'bg-blue-600 border-blue-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </button>)}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">IMEI Number</label>
            <input type="text" value={imei} onChange={e => setImei(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500" placeholder="Device IMEI number" />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            {loading ? 'Adding...' : 'Add Device'}
          </button>
        </form>
      </div>
    </div>;
};