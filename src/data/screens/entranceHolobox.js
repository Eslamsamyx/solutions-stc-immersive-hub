import images from '../../assets/images';

export const entranceHoloboxScreen = {
  id: 'entrance-holobox',
  name: 'Entrance Holobox',
  description: '86" holographic display with Surface Pro tablet',
  color: '#5B21B6',
  technicalSpecs: {
    holographicDisplay: '86" Holographic Display',
    resolution: '3840 x 2160 (4K UHD)',
    tablet: 'Surface Pro',
    quantity: '1 holobox + 1 screen'
  },
  image: images.E1,
  topics: [
    {
      id: 'holographic-experience',
      name: 'Holographic Welcome',
      type: 'activation',
      content: {
        title: 'Interactive Holobox Experience',
        description: 'Holographic display with tablet interface',
        mediaType: 'holographic-display',
        explanation: 'The entrance zone features an innovative Holobox that creates stunning holographic displays, accompanied by a Surface Pro tablet displaying welcome messages.',
        screenContent: {
          description: 'Content displayed on the Surface Pro tablet (looping)',
          layout: 'text-slides',
          tabletDuration: '20 seconds (one slide)',
          holoboxDuration: '15 seconds (continuous loop)',
          items: [
            'Welcome to the Future — Powered by Innovation',
            'Welcome to solutions immersive hub, where innovation meets possibility'
          ],
          holoboxContent: '3D holographic display object (To be added later: e.g., showing 3D of solutions logo moving)'
        }
      }
    }
  ]
};
