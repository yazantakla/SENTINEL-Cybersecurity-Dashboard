import type { Asset, SecurityEvent, ThreatIndicator, Vulnerability } from '../types';

export const assets: Asset[] = [
  { id: 'AST-001', name: 'CORE-DC-01', type: 'Windows Server', ip: '10.20.1.10', owner: 'Infrastructure', environment: 'Production', status: 'Online', lastSeen: 'Just now', risk: 'High' },
  { id: 'AST-002', name: 'WEB-PROD-02', type: 'Linux Server', ip: '10.20.2.18', owner: 'Platform', environment: 'Production', status: 'At risk', lastSeen: '2 min ago', risk: 'Critical' },
  { id: 'AST-003', name: 'FIN-LAP-114', type: 'Windows Endpoint', ip: '10.20.8.44', owner: 'Finance', environment: 'Corporate', status: 'Online', lastSeen: '4 min ago', risk: 'Medium' },
  { id: 'AST-004', name: 'API-GW-01', type: 'Cloud Gateway', ip: '10.30.0.12', owner: 'Engineering', environment: 'Production', status: 'Online', lastSeen: '1 min ago', risk: 'Low' },
  { id: 'AST-005', name: 'HR-WS-022', type: 'Windows Endpoint', ip: '10.20.9.22', owner: 'People', environment: 'Corporate', status: 'Offline', lastSeen: '3 hours ago', risk: 'High' },
  { id: 'AST-006', name: 'DB-CLUSTER-A', type: 'Database', ip: '10.20.4.30', owner: 'Data', environment: 'Production', status: 'Online', lastSeen: 'Just now', risk: 'Medium' },
  { id: 'AST-007', name: 'DEV-K8S-01', type: 'Kubernetes', ip: '10.40.1.5', owner: 'Platform', environment: 'Development', status: 'At risk', lastSeen: '8 min ago', risk: 'High' },
  { id: 'AST-008', name: 'VPN-EDGE-01', type: 'Network Appliance', ip: '10.20.0.1', owner: 'Infrastructure', environment: 'Production', status: 'Online', lastSeen: 'Just now', risk: 'Low' },
];

export const vulnerabilities: Vulnerability[] = [
  { id: 'VUL-2401', title: 'Remote code execution in web framework', cve: 'CVE-2025-24813', asset: 'WEB-PROD-02', cvss: 9.8, severity: 'Critical', status: 'Open', discovered: '2026-11-10', owner: 'Platform' },
  { id: 'VUL-2398', title: 'Privilege escalation vulnerability', cve: 'CVE-2025-21298', asset: 'CORE-DC-01', cvss: 8.6, severity: 'High', status: 'In progress', discovered: '2026-11-09', owner: 'Infrastructure' },
  { id: 'VUL-2391', title: 'SQL injection in legacy endpoint', cve: 'CVE-2024-4912', asset: 'API-GW-01', cvss: 8.1, severity: 'High', status: 'Open', discovered: '2026-11-08', owner: 'Engineering' },
  { id: 'VUL-2386', title: 'Cross-site scripting exposure', cve: 'CVE-2024-3400', asset: 'WEB-PROD-02', cvss: 6.4, severity: 'Medium', status: 'In progress', discovered: '2026-11-07', owner: 'Platform' },
  { id: 'VUL-2372', title: 'Outdated TLS configuration', cve: 'N/A', asset: 'VPN-EDGE-01', cvss: 4.3, severity: 'Medium', status: 'Open', discovered: '2026-11-05', owner: 'Infrastructure' },
  { id: 'VUL-2360', title: 'Missing security headers', cve: 'N/A', asset: 'FIN-LAP-114', cvss: 3.1, severity: 'Low', status: 'Patched', discovered: '2026-11-02', owner: 'Finance' },
];

export const events: SecurityEvent[] = [
  { id: 'EVT-88421', title: 'Multiple failed authentication attempts', category: 'Identity', source: '185.220.101.14', destination: 'CORE-DC-01', severity: 'High', status: 'Investigating', time: '2 min ago', description: 'Repeated authentication failures detected against a privileged account.' },
  { id: 'EVT-88420', title: 'Suspicious outbound connection', category: 'Network', source: 'WEB-PROD-02', destination: '91.212.166.22:443', severity: 'Critical', status: 'New', time: '6 min ago', description: 'Unusual outbound traffic to an unclassified external destination.' },
  { id: 'EVT-88419', title: 'Endpoint protection policy changed', category: 'Endpoint', source: 'HR-WS-022', destination: 'Management Console', severity: 'Medium', status: 'Investigating', time: '18 min ago', description: 'A local endpoint security policy was modified outside the maintenance window.' },
  { id: 'EVT-88418', title: 'New administrative session', category: 'Identity', source: '10.20.8.44', destination: 'CORE-DC-01', severity: 'Low', status: 'Resolved', time: '32 min ago', description: 'Administrative session established from a managed workstation.' },
  { id: 'EVT-88417', title: 'Potential malware signature detected', category: 'Endpoint', source: 'DEV-K8S-01', destination: 'Container runtime', severity: 'High', status: 'New', time: '47 min ago', description: 'A file hash matched a simulated malware intelligence signature.' },
  { id: 'EVT-88416', title: 'Unusual DNS query volume', category: 'Network', source: '10.40.1.5', destination: 'DNS Resolver', severity: 'Medium', status: 'Resolved', time: '1 hour ago', description: 'DNS request volume exceeded the baseline for this development asset.' },
  { id: 'EVT-88415', title: 'MFA challenge rejected', category: 'Identity', source: '10.20.9.22', destination: 'Identity Provider', severity: 'Low', status: 'Resolved', time: '2 hours ago', description: 'A multi-factor authentication challenge was rejected by the user.' },
];

export const indicators: ThreatIndicator[] = [
  { id: 'IOC-101', indicator: '185.220.101.14', type: 'IPv4', classification: 'Suspicious proxy', confidence: 96, source: 'Internal simulation feed', firstSeen: '2026-11-11', severity: 'High' },
  { id: 'IOC-102', indicator: 'update-service-check.com', type: 'Domain', classification: 'Command and control', confidence: 91, source: 'Threat research feed', firstSeen: '2026-11-10', severity: 'Critical' },
  { id: 'IOC-103', indicator: 'd4c3b2a1908f7e6d5c4b3a291807f6e5', type: 'SHA256', classification: 'Malware hash (sample)', confidence: 88, source: 'Sandbox analysis', firstSeen: '2026-11-09', severity: 'High' },
  { id: 'IOC-104', indicator: 'cdn-content-delivery.net/login', type: 'URL', classification: 'Credential phishing', confidence: 79, source: 'Analyst submission', firstSeen: '2026-11-08', severity: 'Medium' },
  { id: 'IOC-105', indicator: '91.212.166.22', type: 'IPv4', classification: 'Unclassified external host', confidence: 62, source: 'Network telemetry (mock)', firstSeen: '2026-11-07', severity: 'Medium' },
];

export const eventTrend = [
  { time: '00:00', critical: 2, high: 8, medium: 14, low: 20 },
  { time: '04:00', critical: 1, high: 5, medium: 11, low: 17 },
  { time: '08:00', critical: 4, high: 12, medium: 19, low: 24 },
  { time: '12:00', critical: 3, high: 15, medium: 22, low: 29 },
  { time: '16:00', critical: 6, high: 13, medium: 18, low: 25 },
  { time: '20:00', critical: 2, high: 9, medium: 15, low: 21 },
];

export const severityDistribution = [
  { name: 'Critical', value: 8, fill: '#fb7185' },
  { name: 'High', value: 24, fill: '#fb923c' },
  { name: 'Medium', value: 42, fill: '#fbbf24' },
  { name: 'Low', value: 26, fill: '#38bdf8' },
];
