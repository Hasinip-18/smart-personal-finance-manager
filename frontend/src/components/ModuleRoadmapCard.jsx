import React from 'react';
import { CreditCard, PieChart, Repeat, BarChart3, Bell, LayoutDashboard, Clock } from 'lucide-react';

const modules = [
  {
    title: 'Expense Management',
    desc: 'Record, categorize, edit, and filter daily income and expenses.',
    icon: <CreditCard size={18} color="#2563eb" />,
    status: 'Ready for Implementation',
  },
  {
    title: 'Budget Management',
    desc: 'Set category-based monthly budgets and monitor threshold limits.',
    icon: <PieChart size={18} color="#2563eb" />,
    status: 'Ready for Implementation',
  },
  {
    title: 'Subscription Management',
    desc: 'Track recurring subscriptions, renewal dates, and billing cadences.',
    icon: <Repeat size={18} color="#2563eb" />,
    status: 'Ready for Implementation',
  },
  {
    title: 'Spending Analytics',
    desc: 'Visual monthly breakdowns, category insights, and trend analysis.',
    icon: <BarChart3 size={18} color="#2563eb" />,
    status: 'Ready for Implementation',
  },
  {
    title: 'Notification & Alert Logic',
    desc: 'Threshold alerts for overspending and upcoming subscription renewals.',
    icon: <Bell size={18} color="#2563eb" />,
    status: 'Ready for Implementation',
  },
  {
    title: 'Executive Dashboard',
    desc: 'Consolidated overview of financial health, recent transactions, and KPIs.',
    icon: <LayoutDashboard size={18} color="#2563eb" />,
    status: 'Ready for Implementation',
  },
];

export default function ModuleRoadmapCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Clock size={20} color="#2563eb" />
          Planned Core Modules
        </h2>
        <span className="nav-tag" style={{ background: '#f1f5f9', color: '#475569' }}>
          Phase 1 Complete
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
        {modules.map((m, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '1rem',
              background: '#f8fafc',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              {m.icon}
              <strong style={{ fontSize: '0.95rem', color: '#1e293b' }}>{m.title}</strong>
            </div>
            <p style={{ fontSize: '0.825rem', color: '#64748b', marginBottom: '0.5rem' }}>{m.desc}</p>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#2563eb',
                background: '#eff6ff',
                padding: '2px 8px',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            >
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
