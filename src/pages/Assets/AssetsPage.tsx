import { useMemo, useState } from 'react';
import { Download, Search, Server, Laptop, Cloud, Network } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Panel from '../../components/ui/Panel';
import Badge from '../../components/ui/Badge';
import { assets } from '../../data/mockData';
import { downloadCsv } from '../../utils/csv';

export default function AssetsPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const filtered = useMemo(() => assets.filter(a => `${a.name} ${a.ip} ${a.owner} ${a.type}`.toLowerCase().includes(query.toLowerCase()) && (status === 'All' || a.status === status)), [query, status]);
  const iconFor = (type: string) => type.includes('Windows') ? Laptop : type.includes('Cloud') || type.includes('Kubernetes') ? Cloud : type.includes('Network') ? Network : Server;
  return <>
    <SectionHeader eyebrow="INVENTORY MANAGEMENT" title="Assets" description="Review and manage the devices and infrastructure represented in this workspace." action={<button className="button button-primary" onClick={() => downloadCsv('sentinel-assets.csv', filtered)}><Download size={15} /> Export CSV</button>} />
    <div className="stats-grid compact-stats">
      <div className="mini-stat"><span>Total assets</span><strong>248</strong><small>Across all environments</small></div>
      <div className="mini-stat"><span>Online</span><strong className="green-text">214</strong><small>86.3% availability</small></div>
      <div className="mini-stat"><span>At risk</span><strong className="amber-text">21</strong><small>Requires review</small></div>
      <div className="mini-stat"><span>Offline</span><strong className="red-text">13</strong><small>Last 24 hours</small></div>
    </div>
    <Panel title="Asset inventory" subtitle={`${filtered.length} sample records displayed`}>
      <div className="table-toolbar"><div className="search-field"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search assets, IPs, owners..." /></div><select className="filter-select" value={status} onChange={e => setStatus(e.target.value)}><option>All</option><option>Online</option><option>At risk</option><option>Offline</option></select></div>
      <div className="table-scroll"><table><thead><tr><th>ASSET</th><th>IP ADDRESS</th><th>OWNER</th><th>ENVIRONMENT</th><th>STATUS</th><th>RISK</th><th>LAST SEEN</th></tr></thead><tbody>
        {filtered.map(asset => { const Icon = iconFor(asset.type); return <tr key={asset.id}><td><div className="table-primary"><span className="table-icon"><Icon size={16} /></span><span><strong>{asset.name}</strong><small>{asset.id} · {asset.type}</small></span></div></td><td className="mono">{asset.ip}</td><td>{asset.owner}</td><td>{asset.environment}</td><td><Badge tone={asset.status === 'Online' ? 'success' : asset.status === 'At risk' ? 'Medium' : 'neutral'}>{asset.status}</Badge></td><td><Badge tone={asset.risk}>{asset.risk}</Badge></td><td className="muted-cell">{asset.lastSeen}</td></tr>})}
      </tbody></table>{filtered.length === 0 && <div className="empty-state">No assets match your filters.</div>}</div>
    </Panel>
  </>;
}
