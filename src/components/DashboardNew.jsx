import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Search, Monitor, Tv, Projector, Activity, X, Image, BookOpen, Sparkles, Wrench, Trophy, LayoutList, ChevronDown, ChevronUp, Calendar, Map } from 'lucide-react';
import { hubData, getAllTopics, getScreenById } from '../data/hubDataNew';
import './Dashboard.css';

const screenIcons = {
  'outside-wall': Monitor,
  'entrance-holobox': Projector,
  'sister-screens': Tv,
  'smart-city-zone': Activity,
  'future-partners-screen': Monitor,
  'digital-wall': Tv,
  'collaboration-room': Monitor
};

function Dashboard() {
  const navigate = useNavigate();
  const { screenId, topicId } = useParams();
  const [selectedScreen, setSelectedScreen] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, show: false });
  const [isRawContentOpen, setIsRawContentOpen] = useState(false);

  const allTopics = getAllTopics();
  const allScreens = hubData.screens;

  // Create display items - screens and individual topics
  const displayItems = useMemo(() => {
    const items = [];

    // Add each screen (for tabbed screens, show as one card)
    allScreens.forEach(screen => {
      if (screen.isTabbedView) {
        // For tabbed screens like Sister Screens, show as one card
        items.push({
          type: 'screen',
          screen: screen,
          screenId: screen.id
        });
      } else {
        // For regular screens, show each topic as a card
        screen.topics.forEach(topic => {
          items.push({
            type: 'topic',
            topic: topic,
            screen: screen,
            screenId: screen.id
          });
        });
      }
    });

    return items;
  }, [allScreens]);

  // Filter display items
  const filteredItems = useMemo(() => {
    let items = displayItems;

    // Filter by screen
    if (selectedScreen !== 'all') {
      items = items.filter(item => item.screenId === selectedScreen);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => {
        if (item.type === 'screen') {
          return item.screen.name.toLowerCase().includes(query);
        } else {
          return item.topic.name.toLowerCase().includes(query) ||
                 item.topic.content.title.toLowerCase().includes(query) ||
                 item.screen.name.toLowerCase().includes(query);
        }
      });
    }

    return items;
  }, [displayItems, selectedScreen, searchQuery]);

  // Handle modal state
  const selectedTopic = topicId ? allTopics.find(
    item => item.screenId === screenId && item.topic.id === topicId
  ) : null;

  const selectedTabbedScreen = screenId && !topicId ? getScreenById(screenId) : null;

  const handleCardClick = (item) => {
    if (item.type === 'screen' && item.screen.isTabbedView) {
      // Open tabbed screen modal
      setActiveTab(0);
      navigate(`/screen/${item.screenId}`);
    } else {
      // Open regular topic modal
      navigate(`/screen/${item.screenId}/topic/${item.topic.id}`);
    }
  };

  const closeModal = () => {
    navigate('/');
  };

  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY, show: true });
  };

  const handleMouseLeave = () => {
    setTooltipPosition({ x: 0, y: 0, show: false });
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTopic || selectedTabbedScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTopic, selectedTabbedScreen]);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-title">
            <h1>STC Immersive Hub</h1>
            <p className="header-subtitle">Physical Screens & Content Management</p>
          </div>
          <div className="header-nav-buttons">
            <Link to="/journey" className="nav-button">
              <Map size={20} />
              Visitor Journey
            </Link>
            <Link to="/timeline" className="nav-button">
              <Calendar size={20} />
              Project Timeline
            </Link>
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
              placeholder="Search topics and content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Screen Filters */}
          <div className="zone-filters">
            <button
              className={`zone-filter ${selectedScreen === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedScreen('all')}
            >
              All Screens
            </button>
            {hubData.screens.map((screen) => {
              const Icon = screenIcons[screen.id];
              return (
                <button
                  key={screen.id}
                  className={`zone-filter ${selectedScreen === screen.id ? 'active' : ''}`}
                  onClick={() => setSelectedScreen(screen.id)}
                  style={{ '--zone-color': screen.color }}
                >
                  {Icon && <Icon size={16} />}
                  {screen.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="screens-container">
        <div className="screens-grid">
          {filteredItems.map((item, index) => {
            const ScreenIcon = screenIcons[item.screenId];

            if (item.type === 'screen') {
              // Render tabbed screen card
              const tabbedLabel = item.screenId === 'sister-screens' ? 'Companies' : 'Solutions';
              const clickText = item.screenId === 'sister-screens'
                ? 'Click to view all sister companies'
                : 'Click to view all smart city solutions';

              const isOutOfScope = item.screenId === 'future-partners-screen';

              // Calculate total duration for sister screens
              let totalDuration = '';
              if (item.screenId === 'sister-screens') {
                const individualCompanies = item.screen.topics.filter(t =>
                  t.id !== 'overview' && t.id !== 'stronger-together'
                ).length;
                const overviewDuration = 90; // 90 seconds for overview
                const companiesDuration = individualCompanies * 30; // 30 seconds each
                const totalSeconds = overviewDuration + companiesDuration;
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                totalDuration = seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
              }

              return (
                <div
                  key={`screen-${item.screenId}`}
                  className={`screen-card screen-card-tabbed ${isOutOfScope ? 'disabled' : ''}`}
                  onClick={isOutOfScope ? undefined : () => handleCardClick(item)}
                  onMouseMove={isOutOfScope ? handleMouseMove : undefined}
                  onMouseLeave={isOutOfScope ? handleMouseLeave : undefined}
                  style={{
                    '--tabbed-color': item.screen.color,
                    cursor: isOutOfScope ? 'not-allowed' : 'pointer',
                    opacity: isOutOfScope ? 0.6 : 1
                  }}
                >
                  {/* Image */}
                  {item.screen.image && (
                    <div className="card-image">
                      <img src={item.screen.image} alt={item.screen.name} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-badges">
                        <span className="zone-badge" style={{ backgroundColor: item.screen.color }}>
                          {ScreenIcon && <ScreenIcon size={14} />}
                          {item.screen.name}
                        </span>
                      </div>
                    </div>

                    <h3 className="card-title">{item.screen.name}</h3>
                    <p className="card-description">{item.screen.description}</p>

                    <div className="card-specs">
                      <div className="spec-item">
                        <span>{isOutOfScope ? 'Out of scope' : clickText}</span>
                      </div>
                      {totalDuration && (
                        <div className="spec-item">
                          <span style={{ fontWeight: '600', color: item.screen.color }}>Total: {totalDuration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else {
              // Render regular topic card
              const isOutOfScope = item.screenId === 'future-partners-screen';

              return (
                <div
                  key={`${item.screenId}-${item.topic.id}`}
                  className="screen-card"
                  onClick={isOutOfScope ? undefined : () => handleCardClick(item)}
                  onMouseMove={isOutOfScope ? handleMouseMove : undefined}
                  onMouseLeave={isOutOfScope ? handleMouseLeave : undefined}
                  style={{
                    cursor: isOutOfScope ? 'not-allowed' : 'pointer',
                    opacity: isOutOfScope ? 0.6 : 1
                  }}
                >
                  {/* Image */}
                  {(item.topic.content.image || item.screen.image) && (
                    <div className="card-image">
                      <img src={item.topic.content.image || item.screen.image} alt={item.topic.name} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-badges">
                        <span className="zone-badge" style={{ backgroundColor: item.screen.color }}>
                          {ScreenIcon && <ScreenIcon size={14} />}
                          {item.screen.name}
                        </span>
                        <span className={`type-badge ${item.topic.type}`}>
                          {item.topic.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="card-title">{item.topic.name}</h3>
                    <p className="card-description">{item.topic.content.description}</p>

                    {isOutOfScope ? (
                      <div className="card-specs">
                        <div className="spec-item">
                          <span>Out of scope</span>
                        </div>
                      </div>
                    ) : (
                      <div className="card-specs">
                        {item.topic.content.mediaType && (
                          <div className="spec-item">
                            <span>{item.topic.content.mediaType}</span>
                          </div>
                        )}
                        {item.topic.content.screenContent?.duration && (
                          <div className="spec-item">
                            <span>{item.topic.content.screenContent.duration}</span>
                          </div>
                        )}
                        {item.topic.content.screenContent?.tabletDuration && (
                          <div className="spec-item">
                            <span>Tablet: {item.topic.content.screenContent.tabletDuration}</span>
                          </div>
                        )}
                        {item.topic.content.screenContent?.holoboxDuration && (
                          <div className="spec-item">
                            <span>Holobox: {item.topic.content.screenContent.holoboxDuration}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <Search size={48} />
            <h3>No content found</h3>
            <p>Try adjusting your filters or search query</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedTopic && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Cover Image - At the very top */}
            {(selectedTopic.topic.content.image || selectedTopic.screen.image) && (
              <div className="modal-cover-image">
                <img
                  src={selectedTopic.topic.content.image || selectedTopic.screen.image}
                  alt={selectedTopic.topic.content.title}
                  className="cover-image"
                />
              </div>
            )}

            {/* Modal Header */}
            <div className="modal-header" style={{ borderLeftColor: selectedTopic.screen.color }}>
              <div className="modal-badges">
                <span className="zone-badge" style={{ backgroundColor: selectedTopic.screen.color }}>
                  {selectedTopic.screen.name}
                </span>
                <span className={`type-badge ${selectedTopic.topic.type}`}>
                  {selectedTopic.topic.type}
                </span>
              </div>
              <h2 dangerouslySetInnerHTML={{ __html: selectedTopic.topic.content.title }}></h2>
              <p className="modal-subtitle">{selectedTopic.topic.content.description}</p>
              {selectedTopic.topic.content.mediaType && (
                <span className="media-type-tag">{selectedTopic.topic.content.mediaType}</span>
              )}
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Screen Technical Specs */}
              {selectedTopic.screen.technicalSpecs && (
                <section className="modal-section">
                  <h3><Monitor size={20} className="section-icon" /> Screen Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedTopic.screen.technicalSpecs).map(([key, value]) => (
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

              {/* Explanation */}
              {selectedTopic.topic.content.explanation && (
                <section className="modal-section">
                  <h3><BookOpen size={20} className="section-icon" /> Explanation</h3>
                  <div dangerouslySetInnerHTML={{ __html: selectedTopic.topic.content.explanation }} />
                </section>
              )}

              {/* Screen Content */}
              {selectedTopic.topic.content.screenContent && (
                <section className="modal-section">
                  <h3><BookOpen size={20} className="section-icon" /> Screen Content</h3>
                  <div className="screen-content-wrapper">
                    {/* Text-over-visualization layout (Outside Wall Screen) */}
                    {selectedTopic.topic.content.screenContent.layout === 'text-over-visualization' && (
                      <>
                        <div className="screen-content-text">
                          {selectedTopic.topic.content.screenContent.duration && (
                            <div className="content-text-item">
                              <span className="content-label">Content Duration:</span>
                              <span className="content-text">{selectedTopic.topic.content.screenContent.duration}</span>
                            </div>
                          )}
                          <div className="content-text-item">
                            <span className="content-label">Top Text:</span>
                            <span className="content-text">
                              {Array.isArray(selectedTopic.topic.content.screenContent.topText)
                                ? selectedTopic.topic.content.screenContent.topText.join(' ')
                                : selectedTopic.topic.content.screenContent.topText}
                            </span>
                          </div>
                          <div className="content-text-item">
                            <span className="content-label">Visualization:</span>
                            <span className="content-text">{selectedTopic.topic.content.screenContent.visualization}</span>
                          </div>
                        </div>
                        <div className="screen-content-box">
                          <div className="screen-mockup">
                            <div className="mockup-top-text">
                              {Array.isArray(selectedTopic.topic.content.screenContent.topText) ? (
                                selectedTopic.topic.content.screenContent.topText.map((word, index) => (
                                  <div key={index} className={`text-word word-${index}`}>
                                    {word}
                                  </div>
                                ))
                              ) : (
                                selectedTopic.topic.content.screenContent.topText
                              )}
                            </div>
                            <div className="mockup-visualization">
                              {selectedTopic.topic.content.screenContent.visualization}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Text-slides layout (Holobox) */}
                    {selectedTopic.topic.content.screenContent.layout === 'text-slides' && (
                      <>
                        <div className="screen-content-text">
                          {selectedTopic.topic.content.screenContent.tabletDuration && (
                            <div className="content-text-item">
                              <span className="content-label">Tablet Duration:</span>
                              <span className="content-text">{selectedTopic.topic.content.screenContent.tabletDuration}</span>
                            </div>
                          )}
                          <div className="content-text-item">
                            <span className="content-label">Welcome Screen Content:</span>
                            <div className="content-list">
                              {selectedTopic.topic.content.screenContent.items.map((item, index) => (
                                <div key={index} className="content-list-item">
                                  <span className="item-number">{index + 1}.</span>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          {selectedTopic.topic.content.screenContent.holoboxDuration && (
                            <div className="content-text-item">
                              <span className="content-label">Holobox Duration:</span>
                              <span className="content-text">{selectedTopic.topic.content.screenContent.holoboxDuration}</span>
                            </div>
                          )}
                          <div className="content-text-item">
                            <span className="content-label">Holobox Content:</span>
                            <span className="content-text">
                              {selectedTopic.topic.content.screenContent.holoboxContent || '3D holographic display object'}
                            </span>
                          </div>
                        </div>
                        <div className="holobox-displays">
                          <div className="display-with-note">
                            <div className="screen-content-box tablet-mockup">
                              <div className="screen-mockup">
                                {selectedTopic.topic.content.screenContent.items.map((item, index) => (
                                  <div key={index} className="mockup-slide-item">
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <p className="screen-content-note">{selectedTopic.topic.content.screenContent.description}</p>
                          </div>
                          <div className="display-with-note">
                            <div className="screen-content-box holobox-mockup">
                              <div className="screen-mockup">
                                <div className="hologram-container">
                                  <div className="rotating-cube">
                                    <div className="cube-face front"></div>
                                    <div className="cube-face back"></div>
                                    <div className="cube-face right"></div>
                                    <div className="cube-face left"></div>
                                    <div className="cube-face top"></div>
                                    <div className="cube-face bottom"></div>
                                  </div>
                                </div>
                                <div className="holobox-display-content">
                                  {selectedTopic.topic.content.screenContent.holoboxContent || '3D holographic display object'}
                                </div>
                              </div>
                            </div>
                            <p className="screen-content-note">Holographic content (looping)</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </section>
              )}

              {/* Features */}
              {selectedTopic.topic.content.features && (
                <section className="modal-section">
                  <h3><Sparkles size={20} className="section-icon" /> Features</h3>
                  <ul className="features-list">
                    {selectedTopic.topic.content.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Content Technical Specs */}
              {selectedTopic.topic.content.technicalSpecs && (
                <section className="modal-section">
                  <h3><Wrench size={20} className="section-icon" /> Content Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedTopic.topic.content.technicalSpecs).map(([key, value]) => (
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

              {/* 27" Screen Mockup - Only for ARIA Technology */}
              {selectedTopic.screen.id === 'aria-technology' && (
                <section className="modal-section">
                  <h3><Monitor size={20} className="section-icon" /> 27" Display Preview</h3>
                  <div className="screen-content-wrapper">
                    <div className="aria-screen-mockup">
                      <div className="screen-bezel">
                        <div className="screen-display">
                          {/* Header Section */}
                          <div className="display-header aria-header">
                            <h4 className="display-title">
                              {selectedTopic.topic.content.title}
                            </h4>
                          </div>

                          {/* Content Section */}
                          <div className="display-content">
                            {selectedTopic.topic.content.explanation
                              ?.replace(/<[^>]*>/g, '')
                              .replace(/\n\s*\n/g, '\n\n')
                              .trim()
                            }
                          </div>
                        </div>

                        {/* Screen Label */}
                        <div className="bezel-label">27" FHD</div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* LED Wall Mockup - Only for Collaboration Room */}
              {selectedTopic.screen.id === 'collaboration-room' && (
                <section className="modal-section">
                  <h3><Monitor size={20} className="section-icon" /> LED Wall Display Preview (6x9)</h3>
                  <div className="screen-content-wrapper">
                    <div className="collab-screen-mockup">
                      <div className="screen-bezel">
                        <div className="screen-display idle-screen">
                          {/* Idle Screen - Animated Background with Logo */}
                          <div className="idle-screen-content">
                            <div className="idle-logo-shape">
                              <div className="logo-circle"></div>
                              <div className="logo-ring"></div>
                            </div>
                          </div>
                        </div>

                        {/* Screen Label */}
                        <div className="bezel-label">6x9 LED Wall (4320x1620)</div>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tabbed Screen Modal (Sister Screens) */}
      {selectedTabbedScreen && selectedTabbedScreen.isTabbedView && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content modal-tabbed" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Cover Image - At the very top */}
            {selectedTabbedScreen.image && (
              <div className="modal-cover-image">
                <img
                  src={selectedTabbedScreen.image}
                  alt={selectedTabbedScreen.name}
                  className="cover-image"
                />
              </div>
            )}

            {/* Modal Header */}
            <div className="modal-header" style={{ borderLeftColor: selectedTabbedScreen.color }}>
              <div className="modal-badges">
                <span className="zone-badge" style={{ backgroundColor: selectedTabbedScreen.color }}>
                  {selectedTabbedScreen.name}
                </span>
              </div>
              <h2>{selectedTabbedScreen.name}</h2>
              <p className="modal-subtitle">{selectedTabbedScreen.description}</p>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Screen Technical Specs - Always at top */}
              {selectedTabbedScreen.technicalSpecs && (
                <section className="modal-section">
                  <h3><Monitor size={20} className="section-icon" /> Screen Technical Specifications</h3>
                  <div className="specs-grid">
                    {Object.entries(selectedTabbedScreen.technicalSpecs).map(([key, value]) => (
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
            </div>

            {/* Sticky Tabs */}
            <div className="modal-tabs-sticky">
              {selectedTabbedScreen.topics.map((topic, index) => (
                <button
                  key={topic.id}
                  className={`modal-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    borderBottomColor: activeTab === index ? selectedTabbedScreen.color : 'transparent'
                  }}
                >
                  {topic.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="modal-body">
              {selectedTabbedScreen.topics[activeTab] && (
                <>
                  {/* Company Info */}
                  <section className="modal-section">
                    <h3><BookOpen size={20} className="section-icon" /> <span dangerouslySetInnerHTML={{ __html: selectedTabbedScreen.topics[activeTab].content.title }}></span></h3>

                    {/* For Sister Companies tab (overview), make explanation an accordion */}
                    {selectedTabbedScreen.topics[activeTab].id === 'overview' ? (
                      <>
                        <button
                          onClick={() => setIsRawContentOpen(!isRawContentOpen)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1rem',
                            backgroundColor: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            width: '100%',
                            marginBottom: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151'
                          }}
                        >
                          {isRawContentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          RAW Content (for context)
                        </button>
                        {isRawContentOpen && (
                          <div dangerouslySetInnerHTML={{ __html: selectedTabbedScreen.topics[activeTab].content.explanation }} />
                        )}
                      </>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: selectedTabbedScreen.topics[activeTab].content.explanation }} />
                    )}
                  </section>

                  {/* Screen Content for Walkby */}
                  {selectedTabbedScreen.topics[activeTab].content.screenContent && (
                    <section className="modal-section">
                      <h3><BookOpen size={20} className="section-icon" /> {selectedTabbedScreen.topics[activeTab].content.screenContent.title}</h3>
                      <p style={{ marginBottom: '0.5rem', color: '#6B7280' }}>Duration: {selectedTabbedScreen.topics[activeTab].content.screenContent.duration}</p>
                      <pre style={{
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'inherit',
                        backgroundColor: '#F9FAFB',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        lineHeight: '1.8'
                      }}>{selectedTabbedScreen.topics[activeTab].content.screenContent.content}</pre>
                    </section>
                  )}

                  {/* 55" Vertical Screen Mockup - Only for Sister Screens */}
                  {selectedTabbedScreen.id === 'sister-screens' && (
                    <section className="modal-section">
                      <h3><Monitor size={20} className="section-icon" /> 55" Vertical Display Preview</h3>
                      <div className="screen-content-wrapper">
                        <div className="sister-screen-mockup">
                          <div className="screen-bezel">
                            <div className="screen-display">
                              {/* Header Section */}
                              <div className="display-header">
                                <h4 className="display-title">
                                  {selectedTabbedScreen.topics[activeTab].content.title
                                    ?.replace(/<[^>]*>/g, '')
                                    .replace(/\(up to 25-30 seconds max\)/g, '')
                                    .trim()
                                  }
                                </h4>
                              </div>

                              {/* Content Section */}
                              <div className="display-content">
                                {selectedTabbedScreen.topics[activeTab].content.screenContent
                                  ? selectedTabbedScreen.topics[activeTab].content.screenContent.content
                                  : selectedTabbedScreen.topics[activeTab].content.explanation
                                      ?.replace(/<[^>]*>/g, '')
                                      .replace(/\n\s*\n/g, '\n\n')
                                      .trim()
                                }
                              </div>
                            </div>

                            {/* Screen Label */}
                            <div className="bezel-label">55" FHD</div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Features */}
                  {selectedTabbedScreen.topics[activeTab].content.features && (
                    <section className="modal-section">
                      <h3><Sparkles size={20} className="section-icon" /> Features & Capabilities</h3>
                      <ul className="features-list">
                        {selectedTabbedScreen.topics[activeTab].content.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Company Technical Specs */}
                  {selectedTabbedScreen.topics[activeTab].content.technicalSpecs && (
                    <section className="modal-section">
                      <h3><Wrench size={20} className="section-icon" /> Company Details</h3>
                      <div className="specs-grid">
                        {Object.entries(selectedTabbedScreen.topics[activeTab].content.technicalSpecs).map(([key, value]) => (
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
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tooltip for out of scope items */}
      {tooltipPosition.show && (
        <div
          className="cursor-tooltip"
          style={{
            left: `${tooltipPosition.x + 15}px`,
            top: `${tooltipPosition.y + 15}px`
          }}
        >
          Out of scope
        </div>
      )}
    </div>
  );
}

export default Dashboard;
