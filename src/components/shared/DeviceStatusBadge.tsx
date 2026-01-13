interface DeviceStatusBadgeProps {
  status: 'moving' | 'idle' | 'parked' | 'offline';
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export const DeviceStatusBadge = ({ status, showLabel = false, size = 'sm' }: DeviceStatusBadgeProps) => {
  const colors = {
    moving: 'bg-emerald-400',
    idle: 'bg-amber-400',
    parked: 'bg-slate-400',
    offline: 'bg-red-400',
  };

  const labels = {
    moving: 'Moving',
    idle: 'Idle',
    parked: 'Parked',
    offline: 'Offline',
  };

  const dotSize = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';

  if (showLabel) {
    return (
      <span className={`text-xs font-medium ${
        status === 'moving' ? 'text-emerald-400' : 
        status === 'idle' ? 'text-amber-400' : 
        status === 'parked' ? 'text-slate-400' : 'text-red-400'
      }`}>
        {labels[status]}
      </span>
    );
  }

  return <span className={`${dotSize} rounded-full ${colors[status]}`}></span>;
};
