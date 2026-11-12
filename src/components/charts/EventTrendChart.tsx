import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { eventTrend } from '../../data/mockData';

export default function EventTrendChart() {
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={eventTrend} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="criticalFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb7185" stopOpacity={0.28} /><stop offset="100%" stopColor="#fb7185" stopOpacity={0} /></linearGradient>
            <linearGradient id="highFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c" stopOpacity={0.2} /><stop offset="100%" stopColor="#fb923c" stopOpacity={0} /></linearGradient>
          </defs>
          <CartesianGrid stroke="#202b3c" strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="time" tick={{ fill: '#718096', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#718096', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: '#111a29', border: '1px solid #29364a', borderRadius: 10, color: '#e7edf7' }} />
          <Area type="monotone" dataKey="low" name="Low" stackId="1" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.05} />
          <Area type="monotone" dataKey="medium" name="Medium" stackId="1" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.07} />
          <Area type="monotone" dataKey="high" name="High" stackId="1" stroke="#fb923c" fill="url(#highFill)" />
          <Area type="monotone" dataKey="critical" name="Critical" stackId="1" stroke="#fb7185" fill="url(#criticalFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
