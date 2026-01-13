# Blue Sidebar Pro - Design Export

A professional fleet tracking dashboard with left sidebar device list.

## Files to Copy

```
src/exports/design5/
├── Dashboard.tsx          # Main dashboard component
├── components/
│   ├── DeviceStatusBadge.tsx
│   └── AddDeviceDialog.tsx
├── hooks/
│   ├── useDevices.tsx
│   ├── useDeviceTelemetry.tsx
│   └── useAlerts.tsx
└── assets/
    └── (copy map-placeholder.jpg from src/assets/)
```

## Dependencies Required

```bash
npm install lucide-react tailwindcss @radix-ui/react-dialog
```

## Tailwind Config

Add these colors to your `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        // ... full slate palette
      }
    }
  }
}
```

## Usage

```tsx
import Dashboard from './exports/design5/Dashboard';

function App() {
  return <Dashboard />;
}
```

## Backend Requirements

The hooks expect a Supabase backend with these tables:
- `devices` - Vehicle/asset records
- `device_telemetry` - Real-time telemetry data
- `alerts` - Alert notifications

See the hook files for the expected data structure.
