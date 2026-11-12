# SENTINEL — Security Operations Dashboard

A polished, responsive **front-end demonstration** of a Security Operations Center (SOC) dashboard. SENTINEL uses deterministic mock data and client-side interactions to demonstrate dashboard design, data visualization, filtering, and information architecture.

> **Important:** This is a portfolio/demo interface. It is not connected to real infrastructure, does not scan systems, and does not provide real-time security monitoring. All displayed security data is synthetic.

## Product areas

1. **Overview** — security posture KPIs, event trends, severity distribution, recent activity.
2. **Assets** — searchable and filterable inventory of endpoints, servers, cloud resources, and network devices.
3. **Vulnerabilities** — severity, CVSS, status, affected assets, and remediation ownership.
4. **Threat Intelligence** — mock indicators of compromise (IOCs), confidence, source, and classification.
5. **Security Events** — searchable event stream with severity and status filters.
6. **Reports** — report catalogue and client-side report preview/download as CSV.
7. **Settings** — local interface preferences and product information.

## Technology

- React 19 + TypeScript (strict)
- Vite 6
- Tailwind CSS v4 (Vite plugin and CSS-first setup)
- React Router 7
- Recharts
- Lucide React
- Framer Motion

## Getting started

Requirements: Node.js 20.19+ or 22.12+, and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Project structure

```text
src/
├── components/
│   ├── charts/
│   ├── layout/
│   └── ui/
├── constants/
├── data/
├── hooks/
├── pages/
│   ├── Assets/
│   ├── Overview/
│   ├── Reports/
│   ├── SecurityEvents/
│   ├── Settings/
│   ├── ThreatIntel/
│   └── Vulnerabilities/
├── router/
├── types/
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

## Data and security notes

- Mock records are stored centrally in `src/data/mockData.ts`.
- UI actions are local to the browser session; there is no backend persistence.
- Do not enter real credentials, personal information, or operational security data.
- The interface is designed so a future API integration can replace the mock data layer without changing the page structure.

## Portfolio description

**SENTINEL — Cybersecurity Operations Dashboard**  
Designed and implemented a responsive SOC-style dashboard using React, TypeScript, Tailwind CSS, and Recharts. Built reusable UI components, centralized deterministic mock datasets, searchable tables, severity visualizations, and a multi-page application structure.
