import images from '../../assets/images';

export const collaborationRoomScreen = {
  id: 'collaboration-room',
  name: 'Collaboration Room',
  description: 'Premium collaboration space with 6x9 LED wall',
  color: '#EC4899',
  technicalSpecs: {
    screenSize: '6 rows x 9 columns',
    physicalDimensions: '5400 x 2025 mm (W x H)',
    resolution: '4320 x 1620',
    quantity: '1 screen'
  },
  image: images.E7,
  topics: [
    {
      id: 'collaboration-experience',
      name: 'Interactive Meeting Space',
      type: 'activation',
      content: {
        title: 'Collaboration Room - Interactive Meeting Space',
        description: 'State-of-the-art collaboration space',
        mediaType: 'collaboration-space',
        explanation: 'Idle screen showing animated background and Solutions by stc logo',
        image: images.E7
      }
    }
  ]
};
