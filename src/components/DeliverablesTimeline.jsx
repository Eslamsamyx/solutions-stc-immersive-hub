import { useState } from 'react';
import { Calendar, CheckCircle2, Clock, AlertCircle, Video, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './DeliverablesTimeline.css';

const DeliverablesTimeline = () => {
  const milestones = [
    {
      id: 1,
      date: '2025-10-05',
      dateDisplay: 'October 5, 2025',
      title: 'Phase 1 Deliverables',
      status: 'upcoming',
      daysUntil: calculateDaysUntil('2025-10-05'),
      deliverables: [
        {
          id: '1a',
          title: 'Still Frames for Presentation',
          description: '1-2 completed still frames for each activation type for managerial presentation. These frames demonstrate the final look and feel before animation begins.',
          status: 'in-progress',
          icon: FileCheck
        },
        {
          id: '1b',
          title: 'Animated Showcase Videos',
          description: '1-2 fully animated demonstration videos for managerial presentation, showcasing the immersive hub experience and key interactive features.',
          status: 'in-progress',
          icon: Video
        }
      ]
    },
    {
      id: 2,
      date: '2025-10-08',
      dateDisplay: 'October 8, 2025',
      title: 'Final Content Completion',
      status: 'future',
      daysUntil: calculateDaysUntil('2025-10-08'),
      deliverables: [
        {
          id: '2a',
          title: 'All Content Completed',
          description: '100% of all screens, content, and interactive elements must be finalized',
          status: 'pending',
          icon: CheckCircle2
        }
      ]
    }
  ];

  function calculateDaysUntil(dateString) {
    const today = new Date();
    const targetDate = new Date(dateString);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'pending': return '#6B7280';
      case 'upcoming': return '#EC4899';
      case 'future': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return { label: 'Completed', icon: CheckCircle2, color: '#10B981' };
      case 'in-progress': return { label: 'In Progress', icon: Clock, color: '#F59E0B' };
      case 'pending': return { label: 'Pending', icon: AlertCircle, color: '#6B7280' };
      default: return { label: 'Pending', icon: AlertCircle, color: '#6B7280' };
    }
  };

  return (
    <div className="timeline-container">
      {/* Header */}
      <header className="timeline-header">
        <div className="header-content">
          <Link to="/" className="back-link">
            ← Back to Screens Dashboard
          </Link>
          <h1 className="timeline-title">
            <Calendar size={32} />
            Project Timeline & Deliverables
          </h1>
          <p className="timeline-subtitle">
            Track milestones, deadlines, and completion status for the STC Immersive Hub project
          </p>
        </div>
      </header>

      {/* Timeline */}
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="milestone-section">
            {/* Milestone Header */}
            <div className="milestone-header">
              <div className="milestone-marker" style={{ background: getStatusColor(milestone.status) }}>
                <Calendar size={24} />
              </div>

              <div className="milestone-info">
                <div className="milestone-date">
                  {milestone.dateDisplay}
                  {milestone.daysUntil >= 0 && (
                    <span className="days-until">
                      {milestone.daysUntil === 0 ? 'Today' :
                       milestone.daysUntil === 1 ? 'Tomorrow' :
                       `${milestone.daysUntil} days away`}
                    </span>
                  )}
                </div>
                <h2 className="milestone-title">{milestone.title}</h2>
              </div>
            </div>

            {/* Deliverables */}
            <div className="deliverables-grid">
              {milestone.deliverables.map((deliverable) => {
                const StatusIcon = deliverable.icon;
                const badge = getStatusBadge(deliverable.status);
                const BadgeIcon = badge.icon;

                return (
                  <div key={deliverable.id} className="deliverable-card">
                    <div className="deliverable-header">
                      <div className="deliverable-icon" style={{ background: `${getStatusColor(deliverable.status)}15`, color: getStatusColor(deliverable.status) }}>
                        <StatusIcon size={24} />
                      </div>
                      <div className="deliverable-badge" style={{ background: `${badge.color}15`, color: badge.color }}>
                        <BadgeIcon size={14} />
                        {badge.label}
                      </div>
                    </div>

                    <h3 className="deliverable-title">{deliverable.title}</h3>
                    <p className="deliverable-description">{deliverable.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DeliverablesTimeline;
