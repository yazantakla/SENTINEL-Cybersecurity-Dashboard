import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { severityDistribution } from '../../data/mockData';

export default function SeverityChart() {
  return (
    <div className="severity-chart">
      <div className="donut-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={severityDistribution} dataKey="value" nameKey="name" innerRadius={58} outerRadius={78} paddingAngle={4} stroke="none">
              {severityDistribution.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
            </Pie>
            <Tooltip contentStyle={{ background: '#111a29', border: '1px solid #29364a', borderRadius: 10, color: '#e7edf7' }} />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center"><strong>100</strong><span>EVENTS</span></div>
      </div>
      <div className="severity-legend">
        {severityDistribution.map((item) => <div className="legend-row" key={item.name}><span><i style={{ background: item.fill }} />{item.name}</span><strong>{item.value}%</strong></div>)}
      </div>
    </div>
  );
}
