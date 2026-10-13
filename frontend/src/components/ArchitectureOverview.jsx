import React from 'react';
import { Layers, Monitor, Cpu, Database, Check } from 'lucide-react';

export default function ArchitectureOverview() {
  return (
    <div className="architecture-banner">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <Layers size={22} color="#60a5fa" />
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>3-Tier Layered Architecture</h3>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
        Designed strictly following multi-tier architectural standards with clean separation of concerns:
      </p>

      <div className="architecture-grid">
        <div className="tier-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Monitor size={18} color="#93c5fd" />
            <div className="tier-title">Tier 1: Presentation Layer</div>
          </div>
          <p className="tier-desc">
            <strong>React 19 + Vite</strong> single page application handling user interaction, state management, and asynchronous REST API consumption.
          </p>
        </div>

        <div className="tier-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Cpu size={18} color="#93c5fd" />
            <div className="tier-title">Tier 2: Business Logic Layer</div>
          </div>
          <p className="tier-desc">
            <strong>Spring Boot 3 (Java 17)</strong> service layer encapsulating business rules, transaction boundaries, validations, and REST controllers.
          </p>
        </div>

        <div className="tier-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Database size={18} color="#93c5fd" />
            <div className="tier-title">Tier 3: Data Access Layer</div>
          </div>
          <p className="tier-desc">
            <strong>Spring Data JPA & Hibernate</strong> communicating with <strong>MySQL 8+</strong> using repository interfaces and typed entities.
          </p>
        </div>
      </div>
    </div>
  );
}
