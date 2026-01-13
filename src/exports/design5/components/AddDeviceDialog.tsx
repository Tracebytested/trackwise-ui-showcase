import { useState } from 'react';
import { X, Car, Ship, Caravan } from 'lucide-react';

interface AddDeviceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (device: { name: string; type: string; plate: string }) => void;
}

export const AddDeviceDialog = ({ isOpen, onClose, onAdd }: AddDeviceDialogProps) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('car');
  const [plate, setPlate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd?.({ name, type, plate });
    setName('');
    setType('car');
    setPlate('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">Add New Vehicle</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., BMW X5"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Vehicle Type</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'car', icon: Car, label: 'Car' },
                { value: 'yacht', icon: Ship, label: 'Boat' },
                { value: 'caravan', icon: Caravan, label: 'Caravan' },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setType(option.value)}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    type === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <option.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Select Model</label>
            <select
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
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

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
