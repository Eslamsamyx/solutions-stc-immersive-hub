import images from '../assets/images';
import {
  HiSparkles,
  HiCursorArrowRays,
  HiAcademicCap,
  HiRocketLaunch,
  HiGlobeAlt,
  HiUserGroup,
  HiCog6Tooth,
  HiBriefcase
} from 'react-icons/hi2';

export const journeyStations = [
  {
    id: 'outside-wall',
    order: 1,
    phase: 'attract',
    title: 'Outside Wall',
    subtitle: 'First Impressions',
    emotionalGoal: 'Spark curiosity and create anticipation',
    visitorState: 'Approaching the hub, seeing the vision',
    location: 'External Entrance',
    screens: [
      {
        type: '55" Full HD',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/mockups/Holobox/02/outer-screen-1.png',
            caption: 'Innovate. Inspire. Impact.'
          }
        ]
      }
    ],
    keyFeatures: [
      'Innovate. Inspire. Impact.',
      '3D hub visualization',
      'Continuous welcome loop',
      'Setting the tone for innovation'
    ],
    duration: '30 seconds',
    color: '#5B21B6',
    gradient: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)',
    image: images.outsideScreen,
    icon: HiSparkles,
    description: 'Your journey begins here. A striking visual welcome that showcases our commitment to innovation and digital transformation.'
  },
  {
    id: 'entrance-holobox',
    order: 2,
    phase: 'engage',
    title: 'Entrance Holobox',
    subtitle: 'Immersive Welcome',
    emotionalGoal: 'Wow factor through cutting-edge technology',
    visitorState: 'Just entered, receptive and impressed',
    location: 'Main Entrance Lobby',
    screens: [
      {
        type: '86" Holographic Display',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/mockups/Holobox/02/welcome-screen-1.png',
            caption: 'Welcome idle screen - displays when not in use'
          },
          {
            type: 'video',
            url: '/mockups/Holobox/01/1 - Holobox 3D Cube.mp4',
            caption: '3D object rotating and floating in holographic display - Option 1'
          },
          {
            type: 'video',
            url: '/mockups/Holobox/02/1 - Holobox 3D Cube 1.mp4',
            caption: '3D object rotating and floating in holographic display - Option 2'
          }
          // NOTE: This holobox will also feature:
          // - Feedback application (to be implemented)
          // - Welcome idle screen (as shown above)
          // - Interactive 3D objects that rotate and float in the holographic space
        ]
      },
      {
        type: 'Surface Pro Tablet',
        quantity: 1,
        media: []
        // NOTE: Control interface for the holographic display
      }
    ],
    keyFeatures: [
      '86" holographic 3D display',
      'Interactive Surface Pro interface',
      'Welcome to the future messaging',
      '4K UHD holographic experience'
    ],
    duration: '20-30 seconds',
    color: '#5B21B6',
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
    image: images.E1,
    icon: HiCursorArrowRays,
    description: 'Step into the future with our stunning holographic display. Experience welcome messages that literally leap off the screen.'
  },
  {
    id: 'sister-screens',
    order: 3,
    phase: 'establish',
    title: 'Sister Companies',
    subtitle: 'Our Global Ecosystem',
    emotionalGoal: 'Establish credibility through our powerful ecosystem',
    visitorState: 'Recognizing our comprehensive capabilities',
    location: 'Ecosystem Showcase',
    screens: [
      {
        type: '55" Full HD Display',
        quantity: 2,
        media: [
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-1.png', caption: 'Still Frame 1 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-2.png', caption: 'Still Frame 2 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-3.png', caption: 'Still Frame 3 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-4.png', caption: 'Still Frame 4 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-5.png', caption: 'Still Frame 5 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-6.png', caption: 'Still Frame 6 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-7.png', caption: 'Still Frame 7 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-8.png', caption: 'Still Frame 8 - STC Sister Companies Joint Offering' },
          { type: 'image', url: '/mockups/SisterScreens/sisters-company-joint-offering-9.png', caption: 'Still Frame 9 - STC Sister Companies Joint Offering' }
        ]
      }
    ],
    keyFeatures: [
      'Giza Systems - MEA\'s leading integrator (3000+ professionals)',
      'Nile - Campus NaaS with Zero Trust (LEAP 2025)',
      'AvidBeam - AI video analytics at scale',
      'ARIA Technologies - Industrial robotics & automation',
      'Devoteam ME - AI-driven consulting (#1 in KSA)',
      'Upsource - Premier BPO (9000+ employees)',
      'LABS - SAP Gold Partner across ME'
    ],
    duration: '5-8 minutes',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
    image: images.E3,
    icon: HiGlobeAlt,
    description: 'Meet our family of specialized companies. Seven world-class partners bringing end-to-end digital transformation capabilities.'
  },
  {
    id: 'future-partners',
    order: 4,
    phase: 'trust',
    title: 'Strategic Partnerships',
    subtitle: 'Global Innovation Leaders',
    emotionalGoal: 'Build confidence through world-class alliances',
    visitorState: 'Understanding our global credibility and connections',
    location: 'Partnership Gallery',
    screens: [
      {
        type: 'Multiple Interactive Displays',
        media: []
      }
    ],
    keyFeatures: [
      'Huawei - Pioneering smart cities together',
      'Microsoft, VMware, Dell - Cloud & infrastructure',
      'NVIDIA - AI and Metropolis platform',
      'Cognex - Machine vision & automation',
      '170+ global and local technology partners'
    ],
    duration: '3-5 minutes',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    image: images.E5,
    icon: HiUserGroup,
    description: 'See our strategic alliances with global tech giants. Together, we bring world-class innovation to Saudi Arabia.'
  },
  {
    id: 'smart-city',
    order: 5,
    phase: 'experience',
    title: 'Smart City Zone',
    subtitle: 'See Innovation in Action',
    emotionalGoal: 'Hands-on engagement with live, interactive demonstrations',
    visitorState: 'Active exploration - touching, testing, experiencing',
    location: 'Interactive Demo Area',
    screens: [
      {
        type: 'Table Display (5x5 P1.25)',
        resolution: '2400x1350',
        media: [
          { type: 'video', url: '/mockups/SmartCity/4 - Smart City.mp4', caption: 'Smart City Interactive Demo' },
          { type: 'image', url: '/mockups/SmartCity/smart-city-screen-01.png', caption: 'Still Frame 1 - Smart City Solutions' },
          { type: 'image', url: '/mockups/SmartCity/smart-city-screen-02.png', caption: 'Still Frame 2 - Smart City Solutions' },
          { type: 'image', url: '/mockups/SmartCity/smart-city-screen-03.png', caption: 'Still Frame 3 - Smart City Solutions' },
          { type: 'image', url: '/mockups/SmartCity/smart-city-screen-04.png', caption: 'Still Frame 4 - Smart City Solutions' },
          { type: 'image', url: '/mockups/SmartCity/smart-city-screen-05.png', caption: 'Still Frame 5 - Smart City Solutions' }
        ]
      },
      {
        type: 'Wall Screen (4x5 LED)',
        resolution: '2400x1080',
        media: []
      },
      {
        type: 'Interactive Touchscreen',
        size: '27"',
        media: []
      },
      {
        type: 'Side Displays',
        size: '2x 55" Full HD',
        media: []
      }
    ],
    keyFeatures: [
      'Smart Parking with AI (18,000+ cameras in Riyadh)',
      'Smart Lighting & Energy (50-90% energy savings)',
      'AI-Powered Surveillance & Safety',
      'Crowd Intelligence with NVIDIA Metropolis',
      'Traffic Management using deep learning',
      '3D Digital Twin platform for urban planning'
    ],
    duration: '10-15 minutes',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    image: images.E2,
    icon: HiRocketLaunch,
    description: 'Experience smart city solutions that are already transforming Saudi Arabia. Touch, interact, and see real deployments in action.'
  },
  {
    id: 'aria-tech',
    order: 6,
    phase: 'specialize',
    title: 'ARIA Technologies',
    subtitle: 'Industry 4.0 Innovation',
    emotionalGoal: 'Showcase specialized expertise in manufacturing',
    visitorState: 'Experiencing industry-specific innovation',
    location: 'Robotics & Automation Showcase',
    screens: [
      {
        type: '27" Display',
        quantity: 1,
        media: [
          { type: 'image', url: '/mockups/ARIA/ARIA_screen 1.png', caption: 'Slide 1 - ARIA Technologies' },
          { type: 'image', url: '/mockups/ARIA/ARIA_screen 2.png', caption: 'Slide 2 - ARIA Technologies' },
          { type: 'image', url: '/mockups/ARIA/ARIA_screen 3.png', caption: 'Slide 3 - ARIA Technologies' },
          { type: 'image', url: '/mockups/ARIA/ARIA_screen 4.png', caption: 'Slide 4 - ARIA Technologies' },
          { type: 'image', url: '/mockups/ARIA/ARIA_screen 5.png', caption: 'Slide 5 - ARIA Technologies' },
          { type: 'image', url: '/mockups/ARIA/ARIA_screen 6.png', caption: 'Slide 6 - ARIA Technologies' }
        ]
      }
    ],
    keyFeatures: [
      'Industrial robotics (Cartesian & P60 arms)',
      'Machine vision with Cognex integration',
      'Smart factory automation',
      'Energy optimization solutions',
      'Connected manufacturing with 5G edge computing'
    ],
    duration: '5-7 minutes',
    color: '#0891B2',
    gradient: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    image: images.ariaTechnology,
    icon: HiCog6Tooth,
    description: 'Witness the future of manufacturing. From robotics to AI-powered quality control, see Industry 4.0 in action.'
  },
  {
    id: 'digital-wall',
    order: 7,
    phase: 'educate',
    title: 'Solutions Wall',
    subtitle: 'Our Story & Expertise',
    emotionalGoal: 'Build trust and demonstrate 30 years of proven excellence',
    visitorState: 'Learning mode - understanding our capabilities',
    location: 'Main Exhibition Hall',
    screens: [
      {
        type: '6x6 LED Wall (P0.9)',
        resolution: '3840x2160',
        size: '3600x1687.5mm',
        media: [
          { type: 'video', url: '/mockups/SolutionsWall/7 - Digital wall.mp4', caption: 'Digital Wall Demo - Part 1' },
          { type: 'video', url: '/mockups/SolutionsWall/7 - Digital wall - 2.mp4', caption: 'Digital Wall Demo - Part 2' },
          { type: 'video', url: '/mockups/SolutionsWall/7 - Digital wall - 3.mp4', caption: 'Digital Wall Demo - Part 3' },
          { type: 'image', url: '/mockups/SolutionsWall/Solution-Wall-Controller.png', caption: 'Solutions Wall Controller Interface' }
        ]
      },
      {
        type: '30" OLED Control Panel',
        resolution: '1366x768',
        media: []
      }
    ],
    keyFeatures: [
      'Who we are - Saudi Arabia\'s #1 Digital Enabler',
      '30-year timeline from 1995 to 2024',
      'Success stories across industries',
      'Value chain: Inspire → Engineer → Connect → Scale → Disrupt → Sustain',
      '170+ global partnerships',
      'Sister companies ecosystem'
    ],
    duration: '5-10 minutes',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
    image: images.E4,
    icon: HiAcademicCap,
    description: 'Discover our journey, our achievements, and the comprehensive solutions that power Vision 2030. From infrastructure to AI, we cover it all.'
  },
  {
    id: 'collaboration-room',
    order: 8,
    phase: 'collaborate',
    title: 'Collaboration Room',
    subtitle: 'Let\'s Build Together',
    emotionalGoal: 'Transition from visitor to partner - ready for business',
    visitorState: 'Engaged, ready to discuss opportunities',
    location: 'Premium Meeting Space',
    screens: [
      {
        type: '6x9 LED Wall',
        resolution: '4320x1620',
        size: '5400x2025mm',
        media: [
          { type: 'video', url: '/mockups/CollaborationRoom/8 - Collaboration room.mp4', caption: 'Collaboration Room Experience' }
        ]
      }
    ],
    keyFeatures: [
      'Premium 6x9 LED wall for presentations',
      'State-of-the-art collaboration technology',
      'Perfect for client workshops and co-creation',
      'Ready for your digital transformation journey'
    ],
    duration: '30-60 minutes',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
    image: images.E7,
    icon: HiBriefcase,
    description: 'Your journey culminates here. A premium space where ideas become reality and partnerships are forged.'
  }
];

export const journeyStats = {
  totalScreens: 18,
  totalZones: 8,
  averageTime: '45-60 minutes',
  interactiveExperiences: 6,
  yearsFounded: 1995,
  globalPartners: 170,
  sisterCompanies: 7
};

export const journeyPhases = [
  { id: 'attract', name: 'Attract', color: '#5B21B6', description: 'Capture attention and spark curiosity' },
  { id: 'engage', name: 'Engage', color: '#6D28D9', description: 'Create wow moments with technology' },
  { id: 'establish', name: 'Establish', color: '#7C3AED', description: 'Demonstrate comprehensive capabilities' },
  { id: 'trust', name: 'Trust', color: '#F59E0B', description: 'Build confidence through partnerships' },
  { id: 'experience', name: 'Experience', color: '#059669', description: 'Hands-on interaction with solutions' },
  { id: 'specialize', name: 'Specialize', color: '#0891B2', description: 'Show deep industry expertise' },
  { id: 'educate', name: 'Educate', color: '#8B5CF6', description: 'Share our story and values' },
  { id: 'collaborate', name: 'Collaborate', color: '#EC4899', description: 'Work together and build the future' }
];
