import { useState } from 'react';
import { Bell, Monitor, Shield, SlidersHorizontal, Info } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Panel from '../../components/ui/Panel';

function Toggle({ defaultChecked = false, label, description }: { defaultChecked?: boolean; label: string; description: string }) {
  const [enabled, setEnabled] = useState(defaultChecked);
  return <div className="setting-row"><div><strong>{label}</strong><span>{description}</span></div><button className={`toggle ${enabled ? 'enabled' : ''}`} role="switch" aria-checked={enabled} aria-label={label} onClick={() => setEnabled(!enabled)}><i /></button></div>;
}

export default function SettingsPage() {
  return <>
    <SectionHeader eyebrow="PREFERENCES" title="Settings" description="Manage local interface preferences for this demonstration workspace." />
    <div className="settings-grid">
      <Panel title="General preferences" subtitle="Display and workspace options"><div className="settings-icon-title"><Monitor size={17} /><strong>Appearance</strong></div><div className="setting-row"><div><strong>Interface theme</strong><span>SENTINEL currently uses a dark operations theme.</span></div><span className="static-value">Dark</span></div><div className="setting-row"><div><strong>Workspace</strong><span>Current demonstration workspace.</span></div><span className="static-value">Acme Corp.</span></div></Panel>
      <Panel title="Notifications" subtitle="Local UI notification preferences"><div className="settings-icon-title"><Bell size={17} /><strong>Notification controls</strong></div><Toggle defaultChecked label="Security event alerts" description="Show visual alerts for new simulated security events." /><Toggle defaultChecked label="Vulnerability reminders" description="Highlight critical and high-severity sample findings." /><Toggle label="Weekly summary" description="Enable a local preference for weekly summary reminders." /></Panel>
      <Panel title="Security preferences" subtitle="Demonstration-only controls"><div className="settings-icon-title"><Shield size={17} /><strong>Workspace security</strong></div><Toggle defaultChecked label="Mask sensitive-looking values" description="Keep sample identifiers visually de-emphasized in tables." /><Toggle label="Compact data tables" description="Preference placeholder for a denser table layout." /></Panel>
      <Panel title="About SENTINEL" subtitle="Product and build information"><div className="about-block"><div className="about-logo"><Shield size={24} /></div><div><h3>SENTINEL</h3><span>Security Operations Dashboard</span></div></div><div className="preview-meta"><span>Version</span><strong>1.0.0</strong></div><div className="preview-meta"><span>Build</span><strong>Portfolio demo</strong></div><div className="preview-meta"><span>Data mode</span><strong>Deterministic mock data</strong></div><div className="settings-note"><Info size={15} /><span>This interface does not connect to real systems, APIs, identity providers, or security tools.</span></div></Panel>
    </div>
  </>;
}
