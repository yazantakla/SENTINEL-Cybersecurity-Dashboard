import {
  Activity, Boxes, Bug, ChartNoAxesCombined, FileText, Radar, Settings,
} from 'lucide-react';

export const navigation = [
  { label: 'Overview', path: '/', icon: ChartNoAxesCombined },
  { label: 'Assets', path: '/assets', icon: Boxes },
  { label: 'Vulnerabilities', path: '/vulnerabilities', icon: Bug },
  { label: 'Threat Intelligence', path: '/threat-intelligence', icon: Radar },
  { label: 'Security Events', path: '/security-events', icon: Activity },
  { label: 'Reports', path: '/reports', icon: FileText },
  { label: 'Settings', path: '/settings', icon: Settings },
] as const;
