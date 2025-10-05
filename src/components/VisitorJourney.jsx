import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { journeyStations, journeyStats, journeyPhases } from '../data/visitorJourney';
import MediaGallery from './MediaGallery';
import {
  HiArrowUp,
  HiChevronDown,
  HiMapPin,
  HiClock,
  HiComputerDesktop,
  HiCheckCircle
} from 'react-icons/hi2';
import './VisitorJourney.css';

const VisitorJourney = () => {
  const [expandedStation, setExpandedStation] = useState(null);
  const [visibleStations, setVisibleStations] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState('attract');
  const [currentStationIndex, setCurrentStationIndex] = useState(0);
  const [showMobileTimeline, setShowMobileTimeline] = useState(false);
  const stationRefs = useRef([]);
  const timelineStartRef = useRef(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for station visibility - tracks both entering and exiting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stationId = entry.target.getAttribute('data-station-id');
          const stationIndex = parseInt(entry.target.getAttribute('data-station-index'));

          if (entry.isIntersecting) {
            setVisibleStations(prev => new Set([...prev, stationId]));
            setCurrentStationIndex(stationIndex);

            // Update active phase
            const station = journeyStations.find(s => s.id === stationId);
            if (station) {
              setActivePhase(station.phase);
            }
          } else {
            // When scrolling up, remove station from visited if it's below the viewport
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
              setVisibleStations(prev => {
                const newSet = new Set(prev);
                newSet.delete(stationId);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
    );

    stationRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Observer to show/hide mobile timeline based on journey timeline section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowMobileTimeline(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    );

    if (timelineStartRef.current) {
      observer.observe(timelineStartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleStation = (stationId) => {
    setExpandedStation(expandedStation === stationId ? null : stationId);
  };

  const currentStation = journeyStations[currentStationIndex];
  const completedCount = visibleStations.size;
  const progressPercent = Math.round((completedCount / journeyStations.length) * 100);

  return (
    <div className="visitor-journey" style={{ '--active-phase-color': currentStation?.color || '#8B5CF6' }}>
      {/* Mobile Progress Header */}
      <div className="mobile-progress-header">
        <div className="progress-header-content">
          <div className="station-counter">
            <span className="current-number">{currentStationIndex + 1}</span>
            <span className="total-number">/ {journeyStations.length}</span>
          </div>
          <div className="current-station-info">
            <h3>{currentStation?.title || 'Welcome'}</h3>
            <p>{currentStation?.phase || 'Begin Journey'}</p>
          </div>
          <div className="progress-percentage">{progressPercent}%</div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%`, background: currentStation?.gradient }}
          />
        </div>
      </div>

      {/* Mobile Journey Timeline - Only shows when timeline section is in view */}
      <div className={`mobile-journey-timeline ${showMobileTimeline ? 'visible' : ''}`} id="mobile-timeline">
        <svg className="timeline-path" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              {journeyStations.map((station, idx) => (
                <stop
                  key={station.id}
                  offset={`${(idx / (journeyStations.length - 1)) * 100}%`}
                  stopColor={station.color}
                />
              ))}
            </linearGradient>
            <filter id="mobileGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 20 0 Q 35 12.5, 20 25 T 20 50 T 20 75 Q 10 87.5, 20 100"
            fill="none"
            stroke="url(#mobileGradient)"
            strokeWidth="3"
            strokeDasharray="8 4"
            filter="url(#mobileGlow)"
          />
        </svg>

        {journeyStations.map((station, index) => {
          const Icon = station.icon;
          return (
            <div
              key={station.id}
              className={`timeline-dot-mobile ${visibleStations.has(station.id) ? 'visited' : ''} ${currentStationIndex === index ? 'current' : ''}`}
              style={{
                top: `${(index / (journeyStations.length - 1)) * 100}%`,
                '--dot-color': station.color
              }}
            >
              <div className="dot-inner">
                {visibleStations.has(station.id) ? <HiCheckCircle /> : <Icon />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Section */}
      <div className="journey-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Journey Through
            <span className="gradient-text"> Innovation</span>
          </h1>
          <p className="hero-subtitle">
            Experience the future of digital transformation at the STC Immersive Hub
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">{journeyStats.totalZones}</span>
              <span className="stat-label">Interactive Zones</span>
            </div>
          </div>
          <div className="scroll-indicator">
            <HiChevronDown className="scroll-icon" />
          </div>
        </div>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        <div
          className="progress-fill"
          style={{ height: `${scrollProgress}%` }}
        />
        {journeyStations.map((station, index) => (
          <div
            key={station.id}
            className={`progress-dot ${visibleStations.has(station.id) ? 'visited' : ''} ${activePhase === station.phase ? 'active' : ''}`}
            style={{
              top: `${(index / (journeyStations.length - 1)) * 100}%`,
              '--dot-color': station.color
            }}
            title={station.title}
          >
            {visibleStations.has(station.id) && <HiCheckCircle className="check-icon" />}
          </div>
        ))}
      </div>

      {/* Journey Timeline */}
      <div className="journey-timeline" ref={timelineStartRef}>
        {journeyStations.map((station, index) => {
          const Icon = station.icon;
          const isVisible = visibleStations.has(station.id);
          const isExpanded = expandedStation === station.id;

          return (
            <div
              key={station.id}
              ref={el => stationRefs.current[index] = el}
              data-station-id={station.id}
              data-station-index={index}
              className={`journey-station ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ '--station-color': station.color, '--station-gradient': station.gradient }}
            >
              <div className="station-number">
                <span>{index + 1}</span>
              </div>

              <div className="station-card">
                <div className="station-header">
                  <div className="station-icon">
                    <Icon />
                  </div>
                  <div className="station-title-group">
                    <h3 className="station-title">{station.title}</h3>
                    <p className="station-subtitle">{station.subtitle}</p>
                  </div>
                  <div className="station-phase-badge" style={{ background: station.color }}>
                    {station.phase}
                  </div>
                </div>

                <div className="station-image">
                  <img src={station.image} alt={station.title} loading="lazy" />
                  <div className="image-overlay" style={{ background: `${station.gradient}` }} />
                </div>

                <div className="station-meta">
                  <div className="meta-item">
                    <HiMapPin />
                    <span>{station.location}</span>
                  </div>
                  <div className="meta-item">
                    <HiClock />
                    <span>{station.duration}</span>
                  </div>
                  <div className="meta-item">
                    <HiComputerDesktop />
                    <span>{station.screens.length} screen{station.screens.length > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="station-description">
                  <p>{station.description}</p>
                </div>

                <div className="station-features">
                  <h4>Key Features</h4>
                  <ul>
                    {station.keyFeatures.slice(0, isExpanded ? undefined : 3).map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {isExpanded && (
                  <div className="station-details">
                    <div className="detail-section">
                      <h4>Visitor Experience</h4>
                      <p><strong>Emotional Goal:</strong> {station.emotionalGoal}</p>
                      <p><strong>Visitor State:</strong> {station.visitorState}</p>
                    </div>

                    <MediaGallery screens={station.screens} />

                    <div className="detail-section">
                      <h4>Technical Specifications</h4>
                      {station.screens.map((screen, i) => (
                        <div key={i} className="screen-spec">
                          <span>{screen.type}</span>
                          {screen.resolution && <span className="spec-detail">Resolution: {screen.resolution}</span>}
                          {screen.size && <span className="spec-detail">Size: {screen.size}</span>}
                          {screen.quantity && <span className="spec-detail">Qty: {screen.quantity}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className="expand-button" onClick={() => toggleStation(station.id)}>
                  {isExpanded ? 'Show Less' : 'Learn More'}
                  <HiChevronDown className={isExpanded ? 'rotate' : ''} />
                </button>
              </div>

              {index < journeyStations.length - 1 && (
                <div className="station-connector">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d={index % 2 === 0 ? "M 50 0 Q 80 50 50 100" : "M 50 0 Q 20 50 50 100"}
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      className="connector-path"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={station.color} />
                        <stop offset="100%" stopColor={journeyStations[index + 1].color} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <button className="back-to-top" onClick={scrollToTop}>
          <HiArrowUp />
        </button>
      )}
    </div>
  );
};

export default VisitorJourney;
