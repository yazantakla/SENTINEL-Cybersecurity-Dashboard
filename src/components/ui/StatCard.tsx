import type { LucideIcon } from 'lucide-react';
export default function StatCard({ label, value, detail, icon: Icon, accent = 'blue' }: {
  label: string; value: string; detail: string; icon: LucideIcon; accent?: 'blue' | 'red' | 'amber' | 'green';
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${accent}`}><Icon size={18} /></div>
      <p className="stat-label">{label}</p>
      <div className="stat-value">{value}</div>
      <p className="stat-detail">{detail}</p>
    </div>
  );
}
