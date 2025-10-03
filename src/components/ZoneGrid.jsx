import { Link } from 'react-router-dom';
import { hubData } from '../data/hubData';
import './ZoneGrid.css';

function ZoneGrid() {
  return (
    <div className="zone-grid-container">
      <header className="header">
        <h1>STC Immersive Hub</h1>
        <p className="subtitle">Explore zones, screens, and activations</p>
      </header>

      <div className="zones-grid">
        {hubData.zones.map((zone) => (
          <Link
            key={zone.id}
            to={`/zone/${zone.id}`}
            className="zone-card"
            style={{ borderLeftColor: zone.color }}
          >
            <div className="zone-card-header" style={{ backgroundColor: zone.color }}>
              <h2>{zone.name}</h2>
            </div>
            <div className="zone-card-body">
              <p>{zone.description}</p>
              <div className="zone-stats">
                <span className="stat">
                  <strong>{zone.screens.length}</strong> {zone.screens.length === 1 ? 'item' : 'items'}
                </span>
                <span className="stat">
                  <strong>{zone.screens.filter(s => s.type === 'screen').length}</strong> screens
                </span>
                <span className="stat">
                  <strong>{zone.screens.filter(s => s.type === 'activation').length}</strong> activations
                </span>
              </div>
            </div>
            <div className="zone-card-footer">
              <span className="explore-link">Explore Zone →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ZoneGrid;
