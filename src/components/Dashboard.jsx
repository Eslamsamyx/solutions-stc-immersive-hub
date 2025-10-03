import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Search, DoorOpen, Users, Building2, Network, Award, Monitor, Zap, X } from 'lucide-react';
import { hubData, getAllScreensAndActivations } from '../data/hubData';
import './Dashboard.css';

const zoneIcons = {
  'entrance': DoorOpen,
  'sister-companies': Users,
  'smart-city': Building2,
  'future-partners': Network,
  'solutions-overview': Award
};

function Dashboard() {
  const navigate = useNavigate();
  const { zoneId, screenId } = useParams();
  const [selectedZone, setSelectedZone] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allScreens = getAllScreensAndActivations();
  console.log('All screens:', allScreens);

  // Filter screens based on selected zone and search query
  const filteredScreens = useMemo(() => {
    let screens = allScreens;

    // Filter by zone
    if (selectedZone !== 'all') {
      screens = screens.filter(item => item.zoneId === selectedZone);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      screens = screens.filter(item =>
        item.screen.name.toLowerCase().includes(query) ||
        item.screen.content.title.toLowerCase().includes(query) ||
        item.zone.name.toLowerCase().includes(query)
      );
    }

    return screens;
  }, [allScreens, selectedZone, searchQuery]);

  const selectedScreen = screenId ? allScreens.find(
    item => item.zoneId === zoneId && item.screen.id === screenId
  ) : null;

  const handleCardClick = (item) => {
    navigate(`/screen/${item.zoneId}/${item.screen.id}`);
  };

  const closeModal = () => {
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-title">
            <h1>STC Immersive Hub</h1>
            <p className="header-subtitle">Content Management Dashboard</p>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-container">
          {/* Search */}
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search screens and activations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Zone Filters */}
          <div className="zone-filters">
            <button
              className={`zone-filter ${selectedZone === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedZone('all')}
            >
              All Zones
              <span className="zone-count">{allScreens.length}</span>
            </button>
            {hubData.zones.map((zone) => {
              const Icon = zoneIcons[zone.id];
              const count = allScreens.filter(item => item.zoneId === zone.id).length;
              return (
                <button
                  key={zone.id}
                  className={`zone-filter ${selectedZone === zone.id ? 'active' : ''}`}
                  onClick={() => setSelectedZone(zone.id)}
                  style={{ '--zone-color': zone.color }}
                >
                  <Icon size={16} />
                  {zone.name}
                  <span className="zone-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Screen Grid */}
      <div className="screens-container">
        <div className="screens-grid">
          {filteredScreens.map((item) => {
            const Icon = zoneIcons[item.zoneId];
            const TypeIcon = item.screen.type === 'screen' ? Monitor : Zap;

            return (
              <div
                key={`${item.zoneId}-${item.screen.id}`}
                className="screen-card"
                onClick={() => handleCardClick(item)}
              >
                {/* Image */}
                {item.screen.content.image && (
                  <div className="card-image">
                    <img src={item.screen.content.image} alt={item.screen.name} />
                  </div>
                )}

                {/* Content */}
                <div className="card-content">
                  {/* Header */}
                  <div className="card-header">
                    <div className="card-badges">
                      <span className="zone-badge" style={{ backgroundColor: item.zone.color }}>
                        <Icon size={14} />
                        {item.zone.name}
                      </span>
                      <span className={`type-badge ${item.screen.type}`}>
                        <TypeIcon size={14} />
                        {item.screen.type}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="card-title">{item.screen.name}</h3>
                  <p className="card-description">{item.screen.content.description}</p>

                  {/* Key Specs */}
                  {item.screen.content.technicalSpecs && (
                    <div className="card-specs">
                      {item.screen.content.technicalSpecs.screenSize && (
                        <div className="spec-item">
                          <Monitor size={14} />
                          <span>{item.screen.content.technicalSpecs.screenSize}</span>
                        </div>
                      )}
                      {item.screen.content.technicalSpecs.resolution && (
                        <div className="spec-item">
                          <span>{item.screen.content.technicalSpecs.resolution}</span>
                        </div>
                      )}
                      {item.screen.content.technicalSpecs.wallResolution && (
                        <div className="spec-item">
                          <span>{item.screen.content.technicalSpecs.wallResolution}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredScreens.length === 0 && (
          <div className="no-results">
            <Search size={48} />
            <h3>No screens found</h3>
            <p>Try adjusting your filters or search query</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedScreen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="modal-header" style={{ borderLeftColor: selectedScreen.zone.color }}>
              <div className="modal-badges">
                <span className="zone-badge" style={{ backgroundColor: selectedScreen.zone.color }}>
                  {selectedScreen.zone.name}
                </span>
                <span className={`type-badge ${selectedScreen.screen.type}`}>
                  {selectedScreen.screen.type === 'screen' ? <Monitor size={14} /> : <Zap size={14} />}
                  {selectedScreen.screen.type}
                </span>
              </div>
              <h2>{selectedScreen.screen.content.title}</h2>
              <p className="modal-subtitle">{selectedScreen.screen.content.description}</p>
              <span className="media-type-tag">{selectedScreen.screen.content.mediaType}</span>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Image */}
              {selectedScreen.screen.content.image && (
                <section className="modal-section">
                  <h3>🖼️ Visualization</h3>
                  <img src={selectedScreen.screen.content.image} alt={selectedScreen.screen.content.title} className="modal-image" />
                </section>
              )}

              {/* Explanation */}
              <section className="modal-section">
                <h3>📖 Explanation</h3>
                <p>{selectedScreen.screen.content.explanation}</p>
              </section>

              {/* Features */}
              <section className="modal-section">
                <h3>✨ Features</h3>
                <ul className="features-list">
                  {selectedScreen.screen.content.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* Technical Specs */}
              {selectedScreen.screen.content.technicalSpecs && (
                <section className="modal-section">
                  <h3>🔧 Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedScreen.screen.content.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="spec-detail">
                        <dt className="spec-label">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </dt>
                        <dd className="spec-value">{value}</dd>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Success Stories if available */}
              {selectedScreen.screen.content.successStories && (
                <section className="modal-section">
                  <h3>🏆 Success Stories</h3>
                  <ul className="success-list">
                    {selectedScreen.screen.content.successStories.map((story, index) => (
                      <li key={index}>{story}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
