import { useParams, Link, useNavigate } from 'react-router-dom';
import { getZoneById } from '../data/hubData';
import './ZoneDetail.css';

function ZoneDetail() {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const zone = getZoneById(zoneId);

  if (!zone) {
    return (
      <div className="zone-detail-container">
        <div className="error-message">
          <h2>Zone not found</h2>
          <Link to="/" className="back-link">← Back to Zones</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="zone-detail-container">
      <div className="zone-detail-header" style={{ backgroundColor: zone.color }}>
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Zones
        </button>
        <h1>{zone.name}</h1>
        <p>{zone.description}</p>
      </div>

      <div className="screens-container">
        <div className="screens-header">
          <h2>Screens & Activations</h2>
          <div className="filter-badges">
            <span className="badge">
              {zone.screens.filter(s => s.type === 'screen').length} Screens
            </span>
            <span className="badge">
              {zone.screens.filter(s => s.type === 'activation').length} Activations
            </span>
          </div>
        </div>

        <div className="screens-grid">
          {zone.screens.map((screen) => (
            <Link
              key={screen.id}
              to={`/zone/${zoneId}/screen/${screen.id}`}
              className="screen-card"
            >
              <div className="screen-type-badge" data-type={screen.type}>
                {screen.type === 'screen' ? '📺' : '⚡'} {screen.type}
              </div>
              <h3>{screen.name}</h3>
              <p className="screen-description">{screen.content.description}</p>
              <div className="screen-meta">
                <span className="media-type">{screen.content.mediaType}</span>
                <span className="view-details">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZoneDetail;
