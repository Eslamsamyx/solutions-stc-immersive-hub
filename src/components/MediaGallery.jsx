import { useState, useMemo } from 'react';
import { HiPlayCircle, HiPhoto } from 'react-icons/hi2';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import './MediaGallery.css';

const MediaGallery = ({ screens }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Collect and transform media for lightbox library
  const slides = useMemo(() => {
    const allMedia = screens.flatMap((screen) =>
      (screen.media || []).map(item => ({
        ...item,
        screenType: screen.type,
      }))
    );

    return allMedia.map(item => {
      if (item.type === 'video') {
        return {
          type: 'video',
          width: 1920,
          height: 1080,
          sources: [
            {
              src: item.url,
              type: 'video/mp4',
            },
          ],
          poster: item.thumbnail,
          description: item.caption,
          title: item.screenType,
        };
      } else {
        return {
          src: item.url,
          alt: item.caption || item.screenType,
          description: item.caption,
          title: item.screenType,
        };
      }
    });
  }, [screens]);

  // Collect original media for thumbnail display
  const allMedia = useMemo(() => {
    return screens.flatMap((screen, screenIndex) =>
      (screen.media || []).map(item => ({
        ...item,
        screenType: screen.type,
        screenIndex
      }))
    );
  }, [screens]);

  // Return null if no media
  if (allMedia.length === 0) {
    return null;
  }

  return (
    <>
      <div className="media-gallery">
        <h4>What Visitors See</h4>
        <p className="media-gallery-subtitle">
          {allMedia.length} {allMedia.length === 1 ? 'item' : 'items'} • Click to view
        </p>

        {/* Thumbnail Bar */}
        <div className="media-thumbnail-bar">
          {allMedia.map((item, index) => (
            <button
              key={index}
              className="media-thumbnail"
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
              title={item.caption || item.screenType}
              aria-label={`View ${item.type} ${index + 1}: ${item.caption || item.screenType}`}
            >
              {item.type === 'video' ? (
                <div className="thumbnail-preview video-preview">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt="" />
                  ) : (
                    <video src={item.url} preload="metadata" />
                  )}
                  <div className="thumbnail-overlay">
                    <HiPlayCircle className="thumbnail-icon" />
                  </div>
                  <div className="thumbnail-badge video-badge">
                    <HiPlayCircle />
                  </div>
                </div>
              ) : (
                <div className="thumbnail-preview image-preview">
                  <img src={item.url} alt="" loading="lazy" />
                  <div className="thumbnail-overlay">
                    <HiPhoto className="thumbnail-icon" />
                  </div>
                  <div className="thumbnail-badge image-badge">
                    <HiPhoto />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Yet Another React Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Fullscreen, Thumbnails, Video, Captions]}
        carousel={{
          padding: '120px 0 190px 0',
          spacing: 0,
          imageFit: 'contain',
        }}
        thumbnails={{
          position: 'bottom',
          width: 90,
          height: 90,
          border: 3,
          borderRadius: 12,
          padding: 0,
          gap: 12,
        }}
        captions={{
          showToggle: false,
          descriptionTextAlign: 'center',
          descriptionMaxLines: 3,
        }}
        video={{
          autoPlay: true,
          controls: true,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        render={{
          iconPrev: () => null,
          iconNext: () => null,
          buttonPrev: slides.length > 1 ? undefined : () => null,
          buttonNext: slides.length > 1 ? undefined : () => null,
        }}
        toolbar={{
          buttons: [
            <div key="counter" className="yarl-counter">
              {currentIndex + 1} / {slides.length}
            </div>,
            'close',
          ],
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
          thumbnailsContainer: {
            background: 'linear-gradient(0deg, rgba(10, 1, 24, 0.98) 0%, rgba(10, 1, 24, 0.85) 100%)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          },
          thumbnail: {
            border: '3px solid rgba(255, 255, 255, 0.2)',
          },
          thumbnailActive: {
            border: `4px solid var(--station-color, #8B5CF6)`,
          },
        }}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
      />
    </>
  );
};

export default MediaGallery;
