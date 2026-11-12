import { useMemo, useState } from 'react';
import { Copy, Database, Search } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Panel from '../../components/ui/Panel';
import Badge from '../../components/ui/Badge';
import { indicators } from '../../data/mockData';

export default function ThreatIntelPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => indicators.filter(i => `${i.indicator} ${i.classification} ${i.source}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const copy = async (value: string) => { try { await navigator.clipboard.writeText(value); } catch { /* Clipboard may be unavailable in insecure contexts. */ } };
  return <>
    <SectionHeader eyebrow="EXTERNAL CONTEXT" title="Threat Intelligence" description="Review simulated indicators of compromise and their associated confidence levels." action={<div className="environment-pill"><Database size={13} /> SIMULATED FEED</div>} />
    <div className="demo-notice"><Database size={16} /><span>Indicators below are fabricated examples for UI demonstration. They are not verified threat intelligence and should not be used for blocking decisions.</span></div>
    <div className="stats-grid compact-stats">
      <div className="mini-stat"><span>Tracked indicators</span><strong>{indicators.length}</strong><small>In this sample feed</small></div>
      <div className="mini-stat"><span>High confidence</span><strong className="green-text">3</strong><small>Confidence ≥ 85%</small></div>
      <div className="mini-stat"><span>Critical indicators</span><strong className="red-text">1</strong><small>Requires analyst review</small></div>
      <div className="mini-stat"><span>Feed status</span><strong className="blue-text">Demo</strong><small>No external integrations</small></div>
    </div>
    <Panel title="Indicator library" subtitle="Search and inspect simulated IOCs">
      <div className="table-toolbar"><div className="search-field"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search indicator or classification..." /></div><span className="table-count">{filtered.length} indicators</span></div>
      <div className="table-scroll"><table><thead><tr><th>INDICATOR</th><th>TYPE</th><th>CLASSIFICATION</th><th>CONFIDENCE</th><th>SEVERITY</th><th>SOURCE</th><th>FIRST SEEN</th></tr></thead><tbody>
        {filtered.map(i => <tr key={i.id}><td><div className="indicator-cell"><span className="mono">{i.indicator}</span><button className="copy-button" title="Copy indicator" onClick={() => void copy(i.indicator)}><Copy size={13} /></button></div><small className="sub-id">{i.id}</small></td><td><Badge tone="info">{i.type}</Badge></td><td>{i.classification}</td><td><div className="confidence"><span><i style={{ width: `${i.confidence}%` }} /></span><strong>{i.confidence}%</strong></div></td><td><Badge tone={i.severity}>{i.severity}</Badge></td><td className="muted-cell">{i.source}</td><td className="muted-cell">{i.firstSeen}</td></tr>)}
      </tbody></table>{filtered.length === 0 && <div className="empty-state">No indicators match your search.</div>}</div>
    </Panel>
  </>;
}
