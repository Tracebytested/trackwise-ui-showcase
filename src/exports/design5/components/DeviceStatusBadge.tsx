interface DeviceStatusBadgeProps {
  status: 'moving' | 'idle' | 'parked' | 'offline';
  showLabel?: boolean;
}

export const DeviceStatusBadge = ({ status, showLabel = false }: DeviceStatusBadgeProps) => {
  const config = {
    moving: { color: 'bg-emerald-500', label: 'Moving' },
    idle: { color: 'bg-amber-500', label: 'Idle' },
    parked: { color: 'bg-blue-500', label: 'Parked' },
    offline: { color: 'bg-slate-400', label: 'Offline' },
  };

  const { color, label } = config[status] || config.offline;

  if (showLabel) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
        status === 'moving' ? 'bg-emerald-100 text-emerald-700' :
        status === 'idle' ? 'bg-amber-100 text-amber-700' :
        status === 'parked' ? 'bg-blue-100 text-blue-700' :
        'bg-slate-100 text-slate-600'
      }`}>
        <span className={`w-1.5 h-1.5 rounded-full ${color}`}></span>
        {label}
      </span>
    );
  }

  return <span className={`w-2 h-2 rounded-full ${color}`}></span>;
};
