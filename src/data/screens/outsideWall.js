import images from '../../assets/images';

export const outsideWallScreen = {
  id: 'outside-wall',
  name: 'Outside Wall Screen',
  description: 'External welcome display - 55" Full HD',
  color: '#5B21B6',
  technicalSpecs: {
    screenSize: '55" Full HD',
    quantity: '1 screen'
  },
  image: images.outsideScreen,
  topics: [
    {
      id: 'welcome-message',
      name: 'Welcome Message',
      type: 'content',
      content: {
        title: 'Welcome Display',
        description: 'External welcome screen for visitors',
        mediaType: 'video-display',
        explanation: 'The outside wall screen provides the first impression for visitors, displaying welcome messages and hub visualization.',
        screenContent: {
          description: 'Single slide looping continuously on the outdoor screen',
          duration: '30 seconds (continuous loop)',
          layout: 'text-over-visualization',
          topText: ['Innovate.', 'Inspire.', 'Impact.'],
          visualization: 'Hub 3D visualization/walkthrough'
        }
      }
    }
  ]
};
