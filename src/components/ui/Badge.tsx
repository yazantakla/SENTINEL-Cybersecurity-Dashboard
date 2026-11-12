import type { ReactNode } from 'react';
import type { Severity } from '../../types';

type BadgeTone = Severity | 'success' | 'neutral' | 'info';
const toneClass: Record<BadgeTone, string> = {
  Critical: 'badge-critical', High: 'badge-high', Medium: 'badge-medium',
  Low: 'badge-low', Informational: 'badge-info', success: 'badge-success',
  neutral: 'badge-neutral', info: 'badge-info',
};

export default function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: BadgeTone }) {
  return <span className={`badge ${toneClass[tone]}`}>{children}</span>;
}
