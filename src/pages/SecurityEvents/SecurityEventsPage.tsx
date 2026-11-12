import { useMemo, useState } from 'react';
import { Download, Search } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Panel from '../../components/ui/Panel';
import Badge from '../../components/ui/Badge';
import { events } from '../../data/mockData';
import { downloadCsv } from '../../utils/csv';

export default function SecurityEventsPage() {
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState('All');
  const [status, setStatus] = useState('All');
  const filtered = useMemo(() => events.filter(e => `${e.id} ${e.title} ${e.source} ${e.destination}`.toLowerCase().includes(query.toLowerCase()) && (severity === 'All' || e.severity === severity) && (status === 'All' || e.status === status)), [query, severity, status]);
  return <>
    <SectionHeader eyebrow="DETECTION & RESPONSE" title="Security Events" description="Investigate security signals and review their current triage status." action={<button className="button button-primary" onClick={() => downloadCsv('sentinel-security-events.csv', filtered)}><Download size={15} /> Export CSV</button>} />
    <div className="stats-grid compact-stats">
      <div className="mini-stat"><span>Total events</span><strong>1,284</strong><small>Last 24 hours</small></div>
      <div className="mini-stat"><span>New</span><strong className="red-text">16</strong><small>Awaiting triage</small></div>
      <div className="mini-stat"><span>Investigating</span><strong className="amber-text">28</strong><small>Analyst review</small></div>
      <div className="mini-stat"><span>Resolved</span><strong className="green-text">1,240</strong><small>Closed events</small></div>
    </div>
    <Panel title="Event stream" subtitle="Latest simulated detection activity">
      <div className="table-toolbar"><div className="search-field"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search events, sources, destinations..." /></div><div className="filter-group"><select className="filter-select" value={severity} onChange={e => setSeverity(e.target.value)}>{['All','Critical','High','Medium','Low'].map(s => <option key={s}>{s}</option>)}</select><select className="filter-select" value={status} onChange={e => setStatus(e.target.value)}>{['All','New','Investigating','Resolved'].map(s => <option key={s}>{s}</option>)}</select></div></div>
      <div className="table-scroll"><table><thead><tr><th>EVENT</th><th>CATEGORY</th><th>SOURCE</th><th>DESTINATION</th><th>SEVERITY</th><th>STATUS</th><th>TIME</th></tr></thead><tbody>
        {filtered.map(e => <tr key={e.id}><td><div className="table-primary"><span><strong>{e.title}</strong><small>{e.id} · {e.description}</small></span></div></td><td>{e.category}</td><td className="mono">{e.source}</td><td className="mono">{e.destination}</td><td><Badge tone={e.severity}>{e.severity}</Badge></td><td><Badge tone={e.status === 'Resolved' ? 'success' : e.status === 'Investigating' ? 'info' : 'neutral'}>{e.status}</Badge></td><td className="muted-cell">{e.time}</td></tr>)}
      </tbody></table>{filtered.length === 0 && <div className="empty-state">No events match your filters.</div>}</div>
    </Panel>
  </>;
}
