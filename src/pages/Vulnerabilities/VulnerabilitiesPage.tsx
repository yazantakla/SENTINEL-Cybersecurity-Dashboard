import { useMemo, useState } from 'react';
import { Download, Search, ShieldAlert } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Panel from '../../components/ui/Panel';
import Badge from '../../components/ui/Badge';
import { vulnerabilities } from '../../data/mockData';
import { downloadCsv } from '../../utils/csv';

export default function VulnerabilitiesPage() {
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState('All');
  const filtered = useMemo(() => vulnerabilities.filter(v => `${v.title} ${v.cve} ${v.asset}`.toLowerCase().includes(query.toLowerCase()) && (severity === 'All' || v.severity === severity)), [query, severity]);
  return <>
    <SectionHeader eyebrow="RISK & EXPOSURE" title="Vulnerabilities" description="Prioritize weaknesses by severity, exposure, and remediation progress." action={<button className="button button-primary" onClick={() => downloadCsv('sentinel-vulnerabilities.csv', filtered)}><Download size={15} /> Export CSV</button>} />
    <div className="stats-grid compact-stats">
      <div className="mini-stat"><span>Open findings</span><strong>18</strong><small>Across the sample estate</small></div>
      <div className="mini-stat"><span>Critical</span><strong className="red-text">3</strong><small>Immediate action</small></div>
      <div className="mini-stat"><span>High</span><strong className="amber-text">7</strong><small>High priority</small></div>
      <div className="mini-stat"><span>Patched this month</span><strong className="green-text">12</strong><small>Remediation completed</small></div>
    </div>
    <Panel title="Vulnerability findings" subtitle="Synthetic vulnerability records for demonstration">
      <div className="table-toolbar"><div className="search-field"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search CVE, title, or asset..." /></div><select className="filter-select" value={severity} onChange={e => setSeverity(e.target.value)}>{['All','Critical','High','Medium','Low'].map(s => <option key={s}>{s}</option>)}</select></div>
      <div className="table-scroll"><table><thead><tr><th>FINDING</th><th>ASSET</th><th>CVSS</th><th>SEVERITY</th><th>STATUS</th><th>DISCOVERED</th><th>OWNER</th></tr></thead><tbody>
        {filtered.map(v => <tr key={v.id}><td><div className="table-primary"><span className="table-icon danger"><ShieldAlert size={16} /></span><span><strong>{v.title}</strong><small>{v.id} · {v.cve}</small></span></div></td><td className="mono">{v.asset}</td><td><strong>{v.cvss.toFixed(1)}</strong></td><td><Badge tone={v.severity}>{v.severity}</Badge></td><td><Badge tone={v.status === 'Patched' ? 'success' : v.status === 'In progress' ? 'info' : 'neutral'}>{v.status}</Badge></td><td className="muted-cell">{v.discovered}</td><td>{v.owner}</td></tr>)}
      </tbody></table>{filtered.length === 0 && <div className="empty-state">No findings match your filters.</div>}</div>
    </Panel>
  </>;
}
