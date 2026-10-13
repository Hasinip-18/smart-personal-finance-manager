import React from 'react';
import Navbar from './components/Navbar';
import HealthStatusCard from './components/HealthStatusCard';
import ArchitectureOverview from './components/ArchitectureOverview';
import ModuleRoadmapCard from './components/ModuleRoadmapCard';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Smart Personal Finance Manager</h1>
          <p className="hero-subtitle">
            A 3-Tier Web Application for Software Application & Architecture. Tracks expenses, automates budget alerts, monitors recurring subscriptions, and provides spending intelligence.
          </p>
        </section>

        <div className="grid">
          <HealthStatusCard />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <ModuleRoadmapCard />
        </div>

        <ArchitectureOverview />
      </main>

      <footer className="footer">
        Smart Personal Finance Manager &bull; 3-Tier Architecture Prototype &bull; React &bull; Spring Boot &bull; MySQL
      </footer>
    </div>
  );
}
