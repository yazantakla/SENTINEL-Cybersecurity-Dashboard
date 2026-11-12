import { useState } from 'react';
import { Download, FileBarChart, FileSpreadsheet, ShieldCheck, CalendarDays } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Panel from '../../components/ui/Panel';
import { assets, events, vulnerabilities } from '../../data/mockData';
import { downloadCsv } from '../../utils/csv';

const reports = [
  { title: 'Asset inventory summary', type: 'Asset register', date: 'Nov 12, 2026', icon: FileSpreadsheet, description: 'Inventory of sample assets, ownership, environment, and operational status.', rows: assets },
  { title: 'Vulnerability assessment', type: 'Risk assessment', date: 'Nov 12, 2026', icon: ShieldCheck, description: 'Findings with CVSS scores, severity, affected assets, and remediation state.', rows: vulnerabilities },
  { title: 'Security event activity', type: 'Event analysis', date: 'Nov 12, 2026', icon: FileBarChart, description: 'Simulated security event records, source and destination details, and triage status.', rows: events },
];

export default function ReportsPage() {
  const [selected, setSelected] = useState(reports[0].title);
  const active = reports.find(r => r.title === selected) ?? reports[0];
  return <>
    <SectionHeader eyebrow="ANALYTICS & EXPORTS" title="Reports" description="Generate downloadable snapshots from the demonstration dataset." />
    <div className="report-banner"><div className="report-banner-icon"><CalendarDays size={20} /></div><div><strong>Reporting period: November 2026</strong><span>These exports are generated locally from the current mock dataset.</span></div><span className="environment-pill">DEMO DATA</span></div>
    <div className="reports-layout">
      <Panel title="Available reports" subtitle="Select a report to preview its details">
        <div className="report-list">{reports.map(report => { const Icon = report.icon; return <button key={report.title} className={`report-item ${selected === report.title ? 'selected' : ''}`} onClick={() => setSelected(report.title)}><span className="report-icon"><Icon size={18} /></span><span><strong>{report.title}</strong><small>{report.type} · {report.date}</small></span></button> })}</div>
      </Panel>
      <Panel title="Report preview" subtitle="Export details">
        <div className="report-preview"><div className="preview-file"><active.icon size={28} /></div><h3>{active.title}</h3><p>{active.description}</p><div className="preview-meta"><span>Records included</span><strong>{active.rows.length}</strong></div><div className="preview-meta"><span>Format</span><strong>CSV spreadsheet</strong></div><div className="preview-meta"><span>Generated</span><strong>On demand</strong></div><button className="button button-primary full-button" onClick={() => downloadCsv(`${active.title.toLowerCase().replaceAll(' ', '-')}.csv`, active.rows)}><Download size={15} /> Download CSV</button></div>
      </Panel>
    </div>
  </>;
}
