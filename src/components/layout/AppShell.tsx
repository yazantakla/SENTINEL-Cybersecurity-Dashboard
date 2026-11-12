import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Bell, ChevronDown, Menu, Search, ShieldCheck, X } from 'lucide-react';
import { navigation } from '../../constants/navigation';

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const current = navigation.find((item) => item.path === location.pathname)?.label ?? 'Overview';

  return (
    <div className="app-shell">
      {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><ShieldCheck size={22} /></div>
          <div><strong>SENTINEL</strong><span>SECURITY OPERATIONS</span></div>
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>
        <div className="workspace-label">WORKSPACE</div>
        <div className="workspace-switch"><div className="workspace-avatar">AC</div><div><strong>Acme Corporation</strong><span>Enterprise workspace</span></div><ChevronDown size={15} /></div>
        <div className="nav-label">MAIN MENU</div>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink key={path} to={path} end={path === '/'} onClick={() => setMobileOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>
              {label === 'Vulnerabilities' && <span className="nav-count">6</span>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="system-status"><span className="status-dot" /><div><strong>All systems operational</strong><small>Mock environment</small></div></div>
          <div className="user-profile"><div className="user-avatar">SA</div><div><strong>Security Analyst</strong><span>Analyst workspace</span></div><ChevronDown size={15} /></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
            <div className="breadcrumb"><span>Workspace</span><span className="crumb-separator">/</span><strong>{current}</strong></div>
          </div>
          <div className="topbar-actions">
            <div className="environment-pill"><span className="status-dot" /> DEMO ENVIRONMENT</div>
            <button className="icon-button search-shortcut" aria-label="Search"><Search size={18} /></button>
            <button className="icon-button notification-button" aria-label="Notifications"><Bell size={18} /><i /></button>
            <div className="topbar-divider" />
            <div className="top-user"><div className="user-avatar">SA</div><span>Analyst</span></div>
          </div>
        </header>
        <div className="page-content"><Outlet /></div>
        <footer className="footer"><span>© 2026 SENTINEL Security Operations</span><span><span className="status-dot" /> Synthetic data · Portfolio demonstration</span></footer>
      </main>
    </div>
  );
}
