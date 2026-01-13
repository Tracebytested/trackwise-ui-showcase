import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, CheckCircle, AlertTriangle, Zap, Battery, Wifi, MapPin, Clock } from 'lucide-react';
import { useAlerts } from '@/hooks/useAlerts';
import { formatDistanceToNow } from 'date-fns';

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'speed': return Zap;
    case 'battery_low': return Battery;
    case 'offline': return Wifi;
    case 'geofence_enter':
    case 'geofence_exit': return MapPin;
    case 'sos': return AlertTriangle;
    default: return Bell;
  }
};

const getAlertColor = (type: string) => {
  switch (type) {
    case 'speed': return 'text-amber-400 bg-amber-500/20';
    case 'battery_low': return 'text-red-400 bg-red-500/20';
    case 'offline': return 'text-gray-400 bg-gray-500/20';
    case 'geofence_enter': return 'text-green-400 bg-green-500/20';
    case 'geofence_exit': return 'text-blue-400 bg-blue-500/20';
    case 'sos': return 'text-red-400 bg-red-500/20';
    default: return 'text-gray-400 bg-gray-500/20';
  }
};

const Alerts = () => {
  const { alerts, loading, markAsRead, unreadCount } = useAlerts();

  const handleMarkAsRead = async (alertId: string) => {
    await markAsRead(alertId);
  };

  const handleMarkAllAsRead = async () => {
    for (const alert of alerts.filter(a => !a.is_read)) {
      await markAsRead(alert.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Alerts</h1>
              <p className="text-sm text-gray-500">{unreadCount} unread alerts</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm"
            >
              <CheckCircle className="w-4 h-4" />
              Mark all as read
            </button>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading alerts...</div>
        ) : alerts.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No alerts yet</h3>
            <p className="text-gray-500">You'll see alerts here when something important happens with your devices</p>
          </div>
        ) : (
          <div className="space-y-3">
            {alerts.map((alert) => {
              const Icon = getAlertIcon(alert.type);
              const colorClass = getAlertColor(alert.type);

              return (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl border transition-all ${
                    alert.is_read
                      ? 'bg-gray-900/50 border-gray-800/50'
                      : 'bg-gray-900 border-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className={`font-medium ${alert.is_read ? 'text-gray-400' : 'text-white'}`}>
                            {alert.message}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{formatDistanceToNow(new Date(alert.created_at), { addSuffix: true })}</span>
                          </div>
                        </div>
                        {!alert.is_read && (
                          <button
                            onClick={() => handleMarkAsRead(alert.id)}
                            className="p-2 hover:bg-gray-800 rounded-lg"
                            title="Mark as read"
                          >
                            <CheckCircle className="w-4 h-4 text-gray-500 hover:text-green-400" />
                          </button>
                        )}
                      </div>
                      {alert.details && (
                        <div className="mt-2 p-2 bg-gray-800 rounded-lg text-xs text-gray-400 font-mono">
                          {JSON.stringify(alert.details, null, 2)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Alerts;
