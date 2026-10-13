import React from 'react';
import { Wallet, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-icon">
          <Wallet size={20} />
        </div>
        <span>Smart Personal Finance Manager</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="nav-tag">Software Application & Architecture</span>
      </div>
    </nav>
  );
}
