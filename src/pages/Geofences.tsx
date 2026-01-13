import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Plus, Trash2, Edit2, ToggleLeft, ToggleRight, X, Target } from 'lucide-react';
import { useGeofences, Geofence } from '@/hooks/useGeofences';
import { useSubscription } from '@/hooks/useSubscription';

const Geofences = () => {
  const { geofences, loading, addGeofence, updateGeofence, deleteGeofence, activeCount, totalCount } = useGeofences();
  const { canAccessGeofencing } = useSubscription();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingGeofence, setEditingGeofence] = useState<Geofence | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    center_lat: '',
    center_lng: '',
    radius: '500',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const geofenceData = {
      name: formData.name,
      description: formData.description || null,
      type: 'circle',
      center_lat: parseFloat(formData.center_lat),
      center_lng: parseFloat(formData.center_lng),
      radius: parseFloat(formData.radius),
      coordinates: null,
      is_active: true,
    };

    if (editingGeofence) {
      await updateGeofence(editingGeofence.id, geofenceData);
    } else {
      await addGeofence(geofenceData);
    }

    setShowAddModal(false);
    setEditingGeofence(null);
    setFormData({ name: '', description: '', center_lat: '', center_lng: '', radius: '500' });
  };

  const handleEdit = (geofence: Geofence) => {
    setEditingGeofence(geofence);
    setFormData({
      name: geofence.name,
      description: geofence.description || '',
      center_lat: geofence.center_lat?.toString() || '',
      center_lng: geofence.center_lng?.toString() || '',
      radius: geofence.radius?.toString() || '500',
    });
    setShowAddModal(true);
  };

  const handleToggle = async (geofence: Geofence) => {
    await updateGeofence(geofence.id, { is_active: !geofence.is_active });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this geofence?')) {
      await deleteGeofence(id);
    }
  };

  if (!canAccessGeofencing) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Geofencing is a Pro Feature</h2>
          <p className="text-gray-400 mb-6">Upgrade to Pro to create and manage geofences</p>
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
              <h1 className="text-xl font-bold">Geofences</h1>
              <p className="text-sm text-gray-500">{activeCount} active of {totalCount} total</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            <Plus className="w-4 h-4" />
            Add Geofence
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Map Preview */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl h-64 mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
            <p className="text-gray-500">Geofence Map View</p>
            <p className="text-xs text-gray-600">{totalCount} geofences configured</p>
          </div>
          {/* Show geofence markers */}
          {geofences.slice(0, 3).map((g, i) => (
            <div
              key={g.id}
              className={`absolute w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                g.is_active ? 'bg-blue-500/20 border-blue-500' : 'bg-gray-500/20 border-gray-500'
              }`}
              style={{ top: `${30 + i * 20}%`, left: `${20 + i * 25}%` }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Geofence List */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading geofences...</div>
        ) : geofences.length === 0 ? (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No geofences yet</h3>
            <p className="text-gray-500 mb-4">Create your first geofence to get alerts when devices enter or exit areas</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Create Geofence
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {geofences.map((geofence) => (
              <div
                key={geofence.id}
                className={`p-4 rounded-xl border transition-all ${
                  geofence.is_active
                    ? 'bg-gray-900 border-gray-800'
                    : 'bg-gray-900/50 border-gray-800/50 opacity-60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      geofence.is_active ? 'bg-blue-500/20' : 'bg-gray-700'
                    }`}>
                      <Target className={`w-6 h-6 ${geofence.is_active ? 'text-blue-400' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{geofence.name}</h3>
                      <p className="text-sm text-gray-500">{geofence.description || 'No description'}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                        <span>Radius: {geofence.radius}m</span>
                        <span>Lat: {geofence.center_lat?.toFixed(4)}</span>
                        <span>Lng: {geofence.center_lng?.toFixed(4)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggle(geofence)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                      title={geofence.is_active ? 'Disable' : 'Enable'}
                    >
                      {geofence.is_active ? (
                        <ToggleRight className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ToggleLeft className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    <button
                      onClick={() => handleEdit(geofence)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <Edit2 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(geofence.id)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{editingGeofence ? 'Edit Geofence' : 'Add Geofence'}</h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingGeofence(null);
                  setFormData({ name: '', description: '', center_lat: '', center_lng: '', radius: '500' });
                }}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  placeholder="e.g., Home Zone"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  placeholder="Optional description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Latitude</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.center_lat}
                    onChange={(e) => setFormData({ ...formData, center_lat: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                    placeholder="51.5074"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Longitude</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.center_lng}
                    onChange={(e) => setFormData({ ...formData, center_lng: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                    placeholder="-0.1278"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Radius (meters)</label>
                <input
                  type="number"
                  value={formData.radius}
                  onChange={(e) => setFormData({ ...formData, radius: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  placeholder="500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500"
              >
                {editingGeofence ? 'Update Geofence' : 'Create Geofence'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Geofences;
