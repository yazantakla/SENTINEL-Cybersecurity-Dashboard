import { Activity, AlertTriangle, Boxes, ShieldCheck, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/ui/SectionHeader';
import StatCard from '../../components/ui/StatCard';
import Panel from '../../components/ui/Panel';
import Badge from '../../components/ui/Badge';
import EventTrendChart from '../../components/charts/EventTrendChart';
import SeverityChart from '../../components/charts/SeverityChart';
import { assets, events, vulnerabilities } from '../../data/mockData';

export default function OverviewPage() {
  const stats = [
    { label: 'Monitored assets', value: '248', detail: '↑ 12 added this month', icon: Boxes, accent: 'blue' as const },
    { label: 'Open vulnerabilities', value: String(vulnerabilities.filter(v => v.status !== 'Patched').length).padStart(2, '0'), detail: '3 require immediate attention', icon: AlertTriangle, accent: 'red' as const },
    { label: 'Security events', value: '1,284', detail: '↑ 8.4% vs. previous period', icon: Activity, accent: 'amber' as const },
    { label: 'Security posture', value: '92.4%', detail: '↑ 2.1% from last assessment', icon: ShieldCheck, accent: 'green' as const },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <SectionHeader eyebrow="SECURITY OVERVIEW" title="Good evening, Analyst" description="Here is what is happening across your security environment." action={<button className="button button-secondary"><span className="status-dot" /> Last updated just now</button>} />
      <div className="demo-notice"><ShieldCheck size={16} /><span><strong>Demonstration workspace</strong> — all metrics, alerts, and records shown here are synthetic sample data.</span></div>
      <div className="stats-grid">{stats.map((item) => <StatCard key={item.label} {...item} />)}</div>
      <div className="overview-grid">
        <Panel title="Security events trend" subtitle="Event volume over the last 24 hours" action={<button className="select-button">Last 24 hours <ArrowUpRight size={13} /></button>}>
          <div className="chart-legend"><span><i className="legend-dot critical" />Critical</span><span><i className="legend-dot high" />High</span><span><i className="legend-dot medium" />Medium</span><span><i className="legend-dot low" />Low</span></div>
          <EventTrendChart />
        </Panel>
        <Panel title="Events by severity" subtitle="Current distribution">
          <SeverityChart />
          <div className="chart-footnote">Based on 100 simulated security events</div>
        </Panel>
      </div>
      <div className="overview-grid lower-grid">
        <Panel title="Recent security events" subtitle="Latest activity detected in the environment" action={<Link className="text-link" to="/security-events">View all <ArrowRight size={14} /></Link>}>
          <div className="event-list">
            {events.slice(0, 4).map((event) => <div className="event-row" key={event.id}><div className={`event-indicator ${event.severity.toLowerCase()}`} /><div className="event-main"><strong>{event.title}</strong><span>{event.source} <b>→</b> {event.destination}</span></div><div className="event-meta"><Badge tone={event.severity}>{event.severity}</Badge><small>{event.time}</small></div></div>)}
          </div>
        </Panel>
        <Panel title="Asset health" subtitle="Snapshot of monitored infrastructure" action={<Link className="text-link" to="/assets">Inventory <ArrowRight size={14} /></Link>}>
          <div className="asset-health">
            <div className="health-total"><strong>{assets.length}</strong><span>sample assets</span></div>
            <div className="health-bar"><span style={{ width: '62%' }} /><span style={{ width: '25%' }} /><span style={{ width: '13%' }} /></div>
            <div className="health-legend"><span><i className="health-online" />Online <b>5</b></span><span><i className="health-risk" />At risk <b>2</b></span><span><i className="health-offline" />Offline <b>1</b></span></div>
            <div className="mini-callout"><AlertTriangle size={16} /><span><strong>3 assets need review</strong><small>Prioritize critical and high-risk assets.</small></span></div>
          </div>
        </Panel>
      </div>
    </motion.div>
  );
}
