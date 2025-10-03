import { useParams, useNavigate } from 'react-router-dom';
import { getZoneById, getScreenById } from '../data/hubData';
import './ScreenDetail.css';

function ScreenDetail() {
  const { zoneId, screenId } = useParams();
  const navigate = useNavigate();
  const zone = getZoneById(zoneId);
  const screen = getScreenById(zoneId, screenId);

  if (!zone || !screen) {
    return (
      <div className="screen-detail-container">
        <div className="error-message">
          <h2>Screen not found</h2>
          <button onClick={() => navigate(`/zone/${zoneId}`)} className="back-button">
            ← Back to Zone
          </button>
        </div>
      </div>
    );
  }

  const { content } = screen;

  return (
    <div className="screen-detail-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <button onClick={() => navigate('/')} className="breadcrumb-link">
          Zones
        </button>
        <span className="breadcrumb-separator">/</span>
        <button onClick={() => navigate(`/zone/${zoneId}`)} className="breadcrumb-link">
          {zone.name}
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{screen.name}</span>
      </div>

      {/* Header */}
      <div className="screen-header" style={{ borderLeftColor: zone.color }}>
        <div className="screen-type-badge" data-type={screen.type}>
          {screen.type === 'screen' ? '📺' : '⚡'} {screen.type}
        </div>
        <h1>{content.title}</h1>
        <p className="screen-subtitle">{content.description}</p>
        <span className="media-type-tag">{content.mediaType}</span>
      </div>

      {/* Main Content */}
      <div className="content-grid">
        {/* Image Section */}
        {content.image && (
          <section className="content-section image-section">
            <h2>🖼️ Visualization</h2>
            <div className="section-content">
              <img src={content.image} alt={content.title} className="screen-image" />
            </div>
          </section>
        )}

        {/* Explanation Section */}
        <section className="content-section explanation-section">
          <h2>📖 Explanation</h2>
          <div className="section-content">
            <p>{content.explanation}</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="content-section features-section">
          <h2>✨ Features</h2>
          <div className="section-content">
            <ul className="features-list">
              {content.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="content-section specs-section">
          <h2>🔧 Technical Specifications</h2>
          <div className="section-content">
            <div className="specs-grid">
              {Object.entries(content.technicalSpecs).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <dt className="spec-label">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </dt>
                  <dd className="spec-value">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="action-bar">
        <button
          onClick={() => navigate(`/zone/${zoneId}`)}
          className="btn btn-secondary"
        >
          ← Back to {zone.name}
        </button>
        <button
          onClick={() => navigate('/')}
          className="btn btn-outline"
        >
          View All Zones
        </button>
      </div>
    </div>
  );
}

export default ScreenDetail;
