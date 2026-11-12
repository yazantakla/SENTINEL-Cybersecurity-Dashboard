import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import OverviewPage from './pages/Overview/OverviewPage';
import AssetsPage from './pages/Assets/AssetsPage';
import VulnerabilitiesPage from './pages/Vulnerabilities/VulnerabilitiesPage';
import ThreatIntelPage from './pages/ThreatIntel/ThreatIntelPage';
import SecurityEventsPage from './pages/SecurityEvents/SecurityEventsPage';
import ReportsPage from './pages/Reports/ReportsPage';
import SettingsPage from './pages/Settings/SettingsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<OverviewPage />} />
        <Route path="assets" element={<AssetsPage />} />
        <Route path="vulnerabilities" element={<VulnerabilitiesPage />} />
        <Route path="threat-intelligence" element={<ThreatIntelPage />} />
        <Route path="security-events" element={<SecurityEventsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
