import type { ReactNode } from 'react';
export default function SectionHeader({ eyebrow, title, description, action }: {
  eyebrow?: string; title: string; description?: string; action?: ReactNode;
}) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="section-description">{description}</p>}
      </div>
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}
