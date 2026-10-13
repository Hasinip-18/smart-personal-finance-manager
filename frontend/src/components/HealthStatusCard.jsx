import React, { useState, useEffect } from 'react';
import { Activity, Database, Server, RefreshCw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import apiService from '../api/apiService';

export default function HealthStatusCard() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  const fetchHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getHealth();
      setHealth(data);
      setLastChecked(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message || 'Unable to connect to Spring Boot backend');
      setHealth(null);
      setLastChecked(new Date().toLocaleTimeString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealth();
  }, []);

  const getStatusBadge = () => {
    if (loading) {
      return (
        <span className="status-badge" style={{ background: '#f1f5f9', color: '#64748b' }}>
          <RefreshCw size={14} className="spin" /> Checking...
        </span>
      );
    }
    if (error) {
      return (
        <span className="status-badge down">
          <XCircle size={14} /> Backend Disconnected
        </span>
      );
    }
    if (health?.status === 'HEALTHY') {
      return (
        <span className="status-badge healthy">
          <CheckCircle2 size={14} /> Healthy (All Services UP)
        </span>
      );
    }
    return (
      <span className="status-badge degraded">
        <AlertTriangle size={14} /> Degraded ({health?.status || 'Unknown'})
      </span>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <Activity size={20} color="#2563eb" />
          System Health & Connectivity
        </h2>
        {getStatusBadge()}
      </div>

      <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1rem' }}>
        Verifies end-to-end REST API communication between the React presentation layer, Spring Boot service layer, and MySQL data tier.
      </p>

      <table className="info-table">
        <tbody>
          <tr>
            <td>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Server size={15} /> Spring Boot Backend (Port 8080)
              </span>
            </td>
            <td>
              {error ? (
                <span style={{ color: '#ef4444' }}>OFFLINE (Cannot reach /api/health)</span>
              ) : health ? (
                <span style={{ color: '#10b981' }}>ONLINE ({health.status})</span>
              ) : (
                'Checking...'
              )}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Database size={15} /> MySQL Database (smart_finance_db)
              </span>
            </td>
            <td>
              {health?.databaseStatus === 'UP' ? (
                <span style={{ color: '#10b981' }}>CONNECTED (Port 3306)</span>
              ) : health?.databaseStatus ? (
                <span style={{ color: '#f59e0b' }}>{health.databaseStatus}</span>
              ) : (
                <span style={{ color: '#94a3b8' }}>Pending Backend Connection</span>
              )}
            </td>
          </tr>
          <tr>
            <td>API Message</td>
            <td>{health?.message || (error ? error : 'Connecting...')}</td>
          </tr>
          <tr>
            <td>Last Checked</td>
            <td>{lastChecked || 'Never'}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button className="btn btn-primary" onClick={fetchHealth} disabled={loading}>
          <RefreshCw size={16} />
          {loading ? 'Testing Connection...' : 'Test Backend Connection'}
        </button>
      </div>
    </div>
  );
}
