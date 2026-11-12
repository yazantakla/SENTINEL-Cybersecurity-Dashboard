export type Severity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational';
export type AssetStatus = 'Online' | 'At risk' | 'Offline';
export type EventStatus = 'New' | 'Investigating' | 'Resolved';

export interface Asset {
  id: string;
  name: string;
  type: string;
  ip: string;
  owner: string;
  environment: string;
  status: AssetStatus;
  lastSeen: string;
  risk: Severity;
}

export interface Vulnerability {
  id: string;
  title: string;
  cve: string;
  asset: string;
  cvss: number;
  severity: Severity;
  status: 'Open' | 'In progress' | 'Patched';
  discovered: string;
  owner: string;
}

export interface SecurityEvent {
  id: string;
  title: string;
  category: string;
  source: string;
  destination: string;
  severity: Severity;
  status: EventStatus;
  time: string;
  description: string;
}

export interface ThreatIndicator {
  id: string;
  indicator: string;
  type: 'IPv4' | 'Domain' | 'SHA256' | 'URL';
  classification: string;
  confidence: number;
  source: string;
  firstSeen: string;
  severity: Severity;
}
