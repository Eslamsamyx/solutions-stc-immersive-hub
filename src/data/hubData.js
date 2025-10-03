export const hubData = {
  entrance: {
    quote: "Innovate. Inspire. Impact.",
    welcomeMessages: [
      "Welcome to the Future — Powered by Innovation",
      "Welcome to solutions immersive hub, where innovation meets possibility"
    ],
    ceoMessage: "Innovation is about solving real-world challenges. We're proud to deliver futuristic solutions that make a visible difference, improving how businesses operate, serve their customers, and grow sustainably."
  },

  zones: [
    {
      id: 'entrance',
      name: 'Entrance & Welcome',
      description: 'Begin your journey through innovation',
      color: '#5B21B6',
      icon: '🚪',
      screens: [
        {
          id: 'outside-wall',
          name: 'Outside Wall Screen',
          type: 'screen',
          content: {
            title: 'Welcome Display',
            description: 'External welcome screen for visitors',
            mediaType: 'video-display',
            explanation: 'The outside wall screen provides the first impression for visitors, displaying welcome messages and hub highlights.',
            features: [
              'High-definition video playback',
              'Automated content scheduling',
              'Brand messaging display',
              'Visitor engagement content'
            ],
            technicalSpecs: {
              screenSize: '55"',
              resolution: 'Full HD (1920x1080)',
              display: '55" TV screen',
              location: 'Outside wall'
            },
            image: '/src/assets/images/E1.jpeg'
          }
        },
        {
          id: 'entrance-holobox',
          name: 'Entrance Holobox',
          type: 'activation',
          content: {
            title: 'Interactive Holobox Experience',
            description: 'Holographic display with tablet interface',
            mediaType: 'holographic-display',
            explanation: 'The entrance zone features an innovative Holobox that creates stunning holographic displays, controlled via an integrated Surface Pro tablet. This creates an immersive welcome experience showcasing STC\'s commitment to cutting-edge technology.',
            features: [
              'Holographic 3D projections',
              'Surface Pro tablet control interface',
              'Interactive content selection',
              'Brand storytelling through holograms',
              'Visitor engagement tracking'
            ],
            technicalSpecs: {
              display: 'Holobox holographic display',
              controller: 'Surface Pro tablet',
              holoboxSize: 'TBD (size not confirmed yet)',
              technology: 'Holographic projection',
              location: 'Entrance zone'
            },
            image: '/src/assets/images/E1.jpeg'
          }
        },
        {
          id: 'reuse-screens',
          name: 'Reuse of Existing Screens',
          type: 'screen',
          content: {
            title: 'Legacy Content Displays',
            description: 'Repurposed displays for continuous content',
            mediaType: 'dual-screen-display',
            explanation: 'Two existing 55" Full HD screens repurposed to display ongoing content, messaging, and information throughout the visitor journey.',
            features: [
              'Dual synchronized displays',
              'Content management system',
              'Scheduled content rotation',
              'Brand consistency across screens'
            ],
            technicalSpecs: {
              screenSize: '55" x 2',
              resolution: 'Full HD (1920x1080) per screen',
              quantity: '2 screens',
              display: '55" Full HD displays',
              location: 'Multiple zones'
            },
            image: '/src/assets/images/E5.jpeg'
          }
        }
      ]
    },

    {
      id: 'sister-companies',
      name: 'Sister Companies',
      description: 'Discover our network of innovation partners powering end-to-end solutions',
      color: '#DC2626',
      icon: '🤝',
      screens: [
        {
          id: 'giza-systems',
          name: 'Giza Systems',
          type: 'screen',
          content: {
            title: 'Giza Systems - Industry Systems Integrator',
            description: 'MEA\'s leading systems integrator for asset-intensive industries',
            mediaType: 'interactive-presentation',
            explanation: 'Giza Systems bridges OT + IT across utilities, oil & gas, telecoms, urban communities and smart mobility. With presence in 25+ countries and 3000+ professionals, they deliver industrial & utility automation, telecom platforms, and managed services.',
            features: [
              'SCADA/PLC and DCS/ESD systems',
              'Smart city and mobility platforms',
              'OSS/BSS telecom enablement',
              'Energy management and analytics'
            ],
            technicalSpecs: {
              coverage: '25+ countries across MENA & Africa',
              workforce: '3000+ specialized professionals',
              industries: 'Utilities, Oil & Gas, Telecom, Manufacturing',
              ownership: '88.19% owned by solutions by stc'
            },
            successStories: [
              'Smart grid implementations across utilities',
              'Telecom OSS/BSS overhauls',
              'Smart building management in Africa',
              'Intelligent transportation systems'
            ]
          }
        },
        {
          id: 'nile-secure',
          name: 'Nile (Nile Secure)',
          type: 'screen',
          content: {
            title: 'Nile - Campus Network-as-a-Service',
            description: 'AI-driven, zero-trust campus networking delivered as subscription',
            mediaType: 'live-demo',
            explanation: 'Nile provides autonomous campus networking with continuous monitoring, analytics, and closed-loop automation. Built-in zero trust security with verifiable performance guarantees transforms how enterprises manage connectivity.',
            features: [
              'Autonomous network management',
              'Built-in Zero Trust security',
              'Digital-twin modeling',
              'AI assurance and SLAs'
            ],
            technicalSpecs: {
              deployment: 'NaaS subscription model',
              security: 'Identity-based access, MTAC, WIDS/WIPS',
              coverage: 'Universities, campuses, healthcare, manufacturing',
              milestone: 'LEAP 2025 Riyadh - world\'s largest campus NaaS'
            },
            successStories: [
              'LEAP 2025 Riyadh deployment',
              'Turnkey campus connectivity for giga-projects',
              'Zero-trust networks for universities and hospitals'
            ]
          }
        },
        {
          id: 'avidbeam',
          name: 'AvidBeam',
          type: 'screen',
          content: {
            title: 'AvidBeam - AI Video Analytics',
            description: 'Computer vision + deep learning for smart cities, mobility, security, and retail',
            mediaType: 'video-analytics-demo',
            explanation: 'AvidBeam transforms video feeds into actionable intelligence using advanced AI. From smart parking to security compliance, their solutions enable cities and businesses to make data-driven decisions in real-time.',
            features: [
              'AvidParking™ - Smart parking & violations',
              'AvidAuto - LPR/vehicle analytics',
              'AvidRetail™ - People counting & heatmaps',
              'Safety and compliance analytics'
            ],
            technicalSpecs: {
              technology: 'Computer vision + deep learning',
              deployment: 'Cloud-hosted on STC infrastructure',
              industries: 'Municipal, transport, retail, critical facilities',
              integration: 'Giza Systems field engineering/IoT'
            },
            successStories: [
              'Riyadh Smart Parking - 18,000 AI cameras citywide',
              'KAPSARC security systems',
              'New Alamein City monitoring',
              'Madinaty LPR and anomaly detection'
            ]
          }
        },
        {
          id: 'aria',
          name: 'ARIA Technologies',
          type: 'activation',
          content: {
            title: 'ARIA - Industrial Automation & Robotics',
            description: 'Smart manufacturing, machine vision, and energy optimization',
            mediaType: 'robotics-demo',
            explanation: 'ARIA delivers turnkey automation solutions including robotic arms, machine vision, and Industrial IoT. As a Giza subsidiary, ARIA positions solutions by stc as the group\'s robotics and industrial automation spearhead.',
            features: [
              'Cartesian & P60 robotic arms',
              'Machine vision & barcode systems',
              'Industrial Cloud Platform',
              'Energy optimization solutions'
            ],
            technicalSpecs: {
              screenSize: '27"',
              display: '27" screen',
              partnerships: 'Yaskawa, Cognex, Beckhoff certified',
              industries: 'Home appliances, FMCG, automotive, pharma, defense',
              offering: 'End-of-line packaging, automation control',
              integration: 'stc private 5G + edge computing'
            },
            successStories: [
              'High-speed QR/barcode scanning (Cognex collaboration)',
              'Robotic welding automation systems',
              'Connected factories with OEE dashboards',
              'IMCE 2024 product launches'
            ]
          }
        },
        {
          id: 'devoteam',
          name: 'Devoteam Middle East',
          type: 'screen',
          content: {
            title: 'Devoteam - Digital Transformation Consulting',
            description: 'AI-driven tech consulting across Cloud, Cybersecurity, Data & AI',
            mediaType: 'consultation-showcase',
            explanation: 'Devoteam brings award-winning expertise in cloud transformation, GenAI adoption, zero-trust security, and ServiceNow digital workflows. Their 750+ consultants are repeatedly ranked #1 IT consulting in KSA.',
            features: [
              'Cloud transformation & managed services',
              'Data analytics/ML & GenAI',
              'Cloud security programs',
              'ServiceNow digital workflows'
            ],
            technicalSpecs: {
              workforce: '~750 Middle East staff',
              expertise: 'AWS/GCP/Azure, Cybersecurity, AI',
              recognition: '#1 IT consulting in KSA (IDC)',
              ownership: '40% acquired by solutions by stc (Feb 2024)'
            },
            successStories: [
              'Cloud landing zones on STC/hyperscaler clouds',
              'GenAI adoption programs',
              'Zero-trust security implementations',
              'Enterprise digital transformation roadmaps'
            ]
          }
        },
        {
          id: 'upsource',
          name: 'Upsource by Solutions',
          type: 'screen',
          content: {
            title: 'Upsource - Premier BPO & Customer Experience',
            description: 'Saudi Arabia\'s leading BPO with 9,000+ employees and COPC certification',
            mediaType: 'operations-center-viz',
            explanation: 'Upsource delivers world-class contact center operations, back-office processing, and technical support. Their GenAI-powered partnership with Cognizant brings cutting-edge automation to customer experience.',
            features: [
              'Contact center operations (voice/email/chat)',
              'Back-office finance & HR services',
              'Technical helpdesk support',
              'GenAI-powered workflows (Cognizant alliance)'
            ],
            technicalSpecs: {
              workforce: '9,000+ employees',
              centers: 'Riyadh, Jeddah, Qassim, Madinah',
              certification: 'COPC 7.0 (first in KSA)',
              clients: '100+ across telecom, banking, government'
            },
            successStories: [
              'National Water Company customer services',
              'Major telecom operator call centers',
              'Banking sector support operations',
              'Government services helpdesks'
            ]
          }
        },
        {
          id: 'labs',
          name: 'LABS - SAP Gold Partner',
          type: 'screen',
          content: {
            title: 'LABS - SAP Solutions Specialist',
            description: 'Leading SAP Gold Partner for enterprise software across Middle East',
            mediaType: 'erp-demonstration',
            explanation: 'LABS specializes in SAP S/4HANA, SuccessFactors, BTP, and industry-specific solutions. As a certified SAP PCoE with 100+ consultants, they enable 360° digital transformation from ERP to analytics.',
            features: [
              'SAP S/4HANA implementation',
              'SuccessFactors HR solutions',
              'Supply Chain & E-Invoicing',
              'SAP Analytics Cloud'
            ],
            technicalSpecs: {
              consultants: '100+ SAP specialists',
              coverage: 'KSA, UAE, Bahrain, Egypt',
              certification: 'SAP Gold Partner, PCoE',
              industries: 'Government, energy, manufacturing, retail'
            },
            successStories: [
              'Government SAP S/4HANA implementations',
              'E-invoicing platform integrations',
              'Retail ERP transformations',
              'Multiple SAP quality awards'
            ]
          }
        }
      ]
    },

    {
      id: 'smart-city',
      name: 'Smart City Showcase',
      description: 'AI-powered solutions transforming urban living and public spaces',
      color: '#059669',
      icon: '🏙️',
      image: '/src/assets/images/E2.jpeg',
      screens: [
        {
          id: 'smart-parking',
          name: 'Smart Parking Solution',
          type: 'activation',
          content: {
            title: 'Smart Parking - Traffic Optimization',
            description: 'IoT + AI for intelligent parking management and traffic flow',
            mediaType: 'interactive-city-model',
            explanation: 'Real-time parking occupancy detection with navigation to empty slots, reducing congestion and emissions while optimizing traffic management through intelligent analytics. Features a 3D city model display on an interactive table and surrounding screens.',
            features: [
              'Real-time occupancy detection',
              'Navigation to empty parking slots',
              'Access control and reservation',
              'Traffic flow optimization',
              'CO2 emission reduction',
              'Historical analytics and reporting'
            ],
            technicalSpecs: {
              tableScreen: '5x5 LED panel (P1.25 pixel pitch)',
              tableResolution: '2400 x 1350',
              wallScreen: '4x5 LED wall (4 rows, 5 columns)',
              wallResolution: '2400 x 1080',
              interactiveScreen: '27" touchscreen',
              sideScreens: '55" Full HD x 2',
              sensors: 'Parking sensors with LoRaWAN connectivity',
              gateway: 'Edge computing gateways',
              cloud: 'STC Cloud backend',
              application: 'Mobile app + digital signage'
            },
            successStories: [
              'Riyadh Smart Parking (partnership with Remat)',
              'Multiple zone deployments across Riyadh',
              'Significant reduction in traffic congestion'
            ],
            image: '/src/assets/images/E2.jpeg'
          }
        },
        {
          id: 'smart-lighting',
          name: 'Smart Lighting & Energy',
          type: 'activation',
          content: {
            title: 'Smart Lighting & Energy Solutions',
            description: 'Intelligent control for optimized energy consumption',
            mediaType: 'energy-dashboard',
            explanation: 'Smart energy solutions optimize electrical supply with proactive reporting and centralized control, transforming legacy infrastructure into intelligent digital systems.',
            features: [
              'Intelligent autonomous control',
              'Energy consumption monitoring',
              'Remote device control',
              'Legacy infrastructure transformation',
              'Detailed reporting and dashboards',
              'Up to 90% energy savings potential'
            ],
            technicalSpecs: {
              controllers: 'LED/UNIT Controllers',
              connectivity: 'IoT gateway nodes',
              platform: 'Cloud application management',
              integration: 'End-user app integration'
            }
          }
        },
        {
          id: 'surveillance',
          name: 'Digital Surveillance Solutions',
          type: 'screen',
          content: {
            title: 'AI-Powered Digital Surveillance',
            description: 'Comprehensive video management for safe cities and secure campuses',
            mediaType: 'command-center-demo',
            explanation: 'Advanced video surveillance with AI analytics providing monitoring, tracking, storage, protection, analysis, and decision support for safe cities, campuses, buildings, and traffic management.',
            features: [
              'Megapixel cameras with maximum coverage',
              'Intelligent bandwidth management',
              'Scene change and event detection',
              '3rd party system integration',
              'Real-time alert systems',
              'Cloud storage on STC infrastructure'
            ],
            technicalSpecs: {
              deployment: 'Safe City, Campus, Building, Traffic',
              storage: 'Video recorders + cloud storage',
              intelligence: 'Video analytics apps',
              management: 'Centralized VMS software'
            }
          }
        },
        {
          id: 'crowd-management',
          name: 'AI Crowd Intelligence',
          type: 'activation',
          content: {
            title: 'AI-Powered Dynamic Crowd Intelligence',
            description: 'Real-time crowd management for public spaces using NVIDIA Metropolis',
            mediaType: 'live-analytics-demo',
            explanation: 'Transform public spaces into responsive, safe environments by predicting, visualizing, and mitigating crowd congestion in real-time using edge-to-cloud AI cameras.',
            features: [
              'Crowd density analysis',
              'Movement pattern tracking',
              'Dwell time monitoring',
              'Real-time congestion alerts',
              'Digital signage integration',
              'Predictive analytics'
            ],
            technicalSpecs: {
              technology: 'NVIDIA Metropolis AI cameras',
              deployment: 'Edge-to-cloud architecture',
              coverage: 'High-footfall public zones',
              integration: 'City apps + digital signage'
            },
            successStories: [
              'Riyadh Boulevard deployment',
              'Combat City implementation',
              'Riyadh Sports Boulevard',
              '30-50% reduction in crowd incidents'
            ]
          }
        },
        {
          id: 'traffic-orchestration',
          name: 'Cognitive Traffic System',
          type: 'activation',
          content: {
            title: 'Cognitive Traffic Orchestration',
            description: 'AI deep learning for traffic flow and congestion control',
            mediaType: 'traffic-dashboard',
            explanation: 'Self-optimizing AI-driven traffic system using smart ANPR/driver cameras to control traffic management, reduce congestion, enforce compliance, and ensure seamless mobility.',
            features: [
              'AI-ANPR vehicle recognition',
              'Driver identity verification',
              'Traffic flow optimization',
              'Incident detection',
              'Blacklist/whitelist management',
              'Detailed analytics reporting'
            ],
            technicalSpecs: {
              cameras: 'High IR AI-ANPR cameras',
              accuracy: '99%+ vehicle/driver identification',
              platform: 'Unified digital dashboard',
              deployment: 'Urban and border environments'
            },
            successStories: [
              'Smart Misk City deployment',
              'MODON Industrial Cities',
              'ZATCA Saudi Arabia borders',
              '20-40% improvement in traffic flow'
            ]
          }
        },
        {
          id: 'digital-twin',
          name: 'Digital Twin for Urban Planning',
          type: 'screen',
          content: {
            title: 'Immersive Digital Twin',
            description: 'Physics-accurate city simulation for sustainable planning',
            mediaType: '3d-simulation',
            explanation: 'Build AI-simulated digital replicas of city districts using NVIDIA Metropolis to test scenarios, optimize layouts, predict failures, and reduce environmental impact before real-world implementation.',
            features: [
              'Photorealistic city modeling',
              'Traffic and pedestrian simulation',
              'Energy consumption analysis',
              'Climate impact assessment',
              'What-if scenario planning',
              'Emergency evacuation testing'
            ],
            technicalSpecs: {
              technology: 'NVIDIA Metropolis microservices',
              coverage: 'MODON parks, Riyadh districts, King Salman Park',
              simulation: 'Physics-accurate + sensor-accurate',
              training: 'Synthetic data for AI models'
            },
            valueProposition: [
              '10-15% reduction in planned downtime',
              '20% carbon footprint reduction potential',
              'Risk-free policy testing',
              'Accelerated operator training'
            ]
          }
        }
      ]
    },

    {
      id: 'future-partners',
      name: 'Future Tech Partners',
      description: 'Strategic partnerships driving innovation',
      color: '#F59E0B',
      icon: '🌐',
      image: '/src/assets/images/E3.jpeg',
      screens: [
        {
          id: 'huawei-partnership',
          name: 'Huawei Partnership',
          type: 'screen',
          content: {
            title: 'Huawei & Solutions by STC',
            description: 'Pioneering smart cities together with global ICT leadership',
            mediaType: 'partnership-showcase',
            explanation: 'Strategic partnership combining Huawei\'s global smart city and ICT solutions leadership with STC\'s local integration expertise to deliver world-class smart city experiences in Saudi Arabia.',
            features: [
              'Smart city co-development',
              'Smart parking and lighting',
              'AI surveillance systems',
              'Huawei Cloud integration',
              'SD-WAN and SASE offerings',
              '5G private networks'
            ],
            technicalSpecs: {
              agreement: 'MoU signed 2022 for Smart City solutions',
              deployment: 'Eastern Province (Dammam/Khobar/Dhahran)',
              cloudProvider: 'Authorized Huawei Cloud Service Provider',
              coverage: 'Government and enterprise markets KSA'
            },
            successStories: [
              'Smart city framework implementation',
              'IoT sensor deployments',
              '3D city digital platform integration',
              'Enterprise SD-WAN and SASE solutions'
            ],
            image: '/src/assets/images/E3.jpeg'
          }
        }
      ]
    },

    {
      id: 'solutions-overview',
      name: 'Solutions by STC',
      description: 'Saudi Arabia\'s #1 Digital Transformation Enabler',
      color: '#8B5CF6',
      icon: '💎',
      image: '/src/assets/images/E4.jpeg',
      screens: [
        {
          id: 'digital-wall',
          name: 'Digital Wall Experience',
          type: 'activation',
          content: {
            title: 'Digital Wall - Immersive Brand Experience',
            description: 'Massive LED wall showcasing Solutions by STC capabilities',
            mediaType: 'ultra-hd-video-wall',
            explanation: 'An impressive 6x6 LED display wall with ultra-high resolution provides an immersive brand experience. Visitors interact with a small touchscreen to control the content displayed on the massive wall, creating an engaging and memorable experience.',
            features: [
              'Ultra-high resolution LED wall',
              'Interactive touchscreen control',
              'Dynamic content display',
              'Brand storytelling at scale',
              'Real-time content switching',
              'Immersive visual experience'
            ],
            technicalSpecs: {
              wallSize: '6x6 LED panels (P0.9 pixel pitch)',
              wallResolution: '3840 x 2160 (4K UHD)',
              physicalDimensions: '3600 x 1687.5 mm (W x H)',
              controlScreen: 'Small touchscreen (size TBD)',
              technology: 'P0.9 fine pixel pitch LED',
              brightness: 'High brightness for indoor use'
            },
            image: '/src/assets/images/E4.jpeg'
          }
        },
        {
          id: 'collaboration-room',
          name: 'Collaboration Room',
          type: 'activation',
          content: {
            title: 'Collaboration Room - Interactive Meeting Space',
            description: 'State-of-the-art collaboration space with massive display wall',
            mediaType: 'collaboration-space',
            explanation: 'A premium collaboration room featuring a massive 6x9 LED display wall for presentations, video conferences, and collaborative work sessions. The room demonstrates Solutions by STC\'s capabilities in creating modern, technology-enabled workspaces.',
            features: [
              'Massive 6x9 LED video wall',
              'Ultra-wide format presentations',
              'Video conferencing capabilities',
              'Collaborative workspace design',
              'High-resolution content display',
              'Professional meeting environment'
            ],
            technicalSpecs: {
              wallSize: '6 rows x 9 columns LED wall',
              wallResolution: '4320 x 1620',
              physicalDimensions: '5400 x 2025 mm (W x H)',
              aspectRatio: 'Ultra-wide format',
              technology: 'Fine pixel pitch LED panels',
              audioVisual: 'Integrated AV system'
            },
            image: '/src/assets/images/E7.jpeg'
          }
        },
        {
          id: 'who-we-are',
          name: 'Who We Are',
          type: 'screen',
          content: {
            title: 'Solutions by STC - Digital Transformation Enabler',
            description: 'Powering Vision 2030 with end-to-end ICT, Cloud, AI, Cybersecurity, and Smart City solutions',
            mediaType: 'company-overview',
            explanation: 'With 25+ years of ICT excellence, 170+ global partners, and hundreds of enterprises served, Solutions by STC is Saudi Arabia\'s premier digital transformation partner.',
            features: [
              '25+ years driving ICT excellence',
              '170+ global & local partners',
              'Hundreds of enterprises served',
              '5+ international awards (2023)',
              'Enable-Manage-Scale value chain',
              'System Integration to Application delivery'
            ],
            valueChain: {
              enable: 'System Integration, Connectivity, Cloud Infrastructure',
              manage: 'Outsourcing, Managed Services, Cybersecurity',
              scale: 'IoT Platforms, AI Solutions, Industry Applications'
            }
          }
        },
        {
          id: 'timeline',
          name: 'Solutions Timeline',
          type: 'screen',
          content: {
            title: 'Delivering Since Day One',
            description: 'Journey from ISP to digital transformation leader',
            mediaType: 'interactive-timeline',
            milestones: [
              { year: 1995, event: 'AwalNet receives ISP license' },
              { year: 2002, event: 'Naseej, AwalNet, Alamiah.net merge - largest ISP consortium' },
              { year: 2007, event: 'stc acquires AwalNet' },
              { year: 2009, event: 'Building capabilities for System Integration' },
              { year: 2011, event: 'Investing in cloud platforms' },
              { year: 2015, event: 'Offering cloud technologies' },
              { year: 2017, event: 'Satellite communications & cybersecurity launch' },
              { year: 2018, event: 'Digital applications & data analytics capabilities' },
              { year: 2019, event: 'solutions by stc new brand identity' },
              { year: 2021, event: 'Listed on Saudi stock market' },
              { year: 2022, event: 'Acquires Giza Systems (88.19%)' },
              { year: 2023, event: 'Acquires CCC, invests in Nile, partnership with SingleStore' },
              { year: 2024, event: 'Acquires 40% of Devoteam Middle East' }
            ]
          }
        },
        {
          id: 'success-stories',
          name: 'Success Stories',
          type: 'screen',
          content: {
            title: 'Award-Winning Project Excellence',
            description: 'Delivering transformative projects across Saudi Arabia',
            mediaType: 'case-studies',
            stories: [
              {
                name: 'Smart City - Misk Foundation',
                description: 'ICT infrastructure & command centers for world\'s first non-profit city'
              },
              {
                name: 'Smart Parking - Riyadh',
                description: 'IoT + real-time data to optimize parking and reduce congestion'
              },
              {
                name: 'E-Billing Platform',
                description: 'Saudi\'s first national e-invoicing system'
              },
              {
                name: 'Smart Medical City',
                description: 'Award-winning fully digital hospital ecosystem'
              },
              {
                name: 'Amanah Tech JV',
                description: 'PPP with Jeddah for digital municipal solutions'
              },
              {
                name: 'Sports Boulevard',
                description: 'PPP for enabling technology adoption'
              }
            ]
          }
        }
      ]
    }
  ]
};

// Helper functions
export const getZoneById = (zoneId) => {
  return hubData.zones.find(zone => zone.id === zoneId);
};

export const getScreenById = (zoneId, screenId) => {
  const zone = getZoneById(zoneId);
  return zone?.screens.find(screen => screen.id === screenId);
};

export const getAllScreensAndActivations = () => {
  const allItems = [];
  hubData.zones.forEach(zone => {
    zone.screens.forEach(screen => {
      allItems.push({
        screen: screen,
        zone: zone,
        zoneId: zone.id
      });
    });
  });
  return allItems;
};
