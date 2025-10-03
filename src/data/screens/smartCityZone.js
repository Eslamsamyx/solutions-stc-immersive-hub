import images from '../../assets/images';

export const smartCityZoneScreen = {
  id: 'smart-city-zone',
  name: 'Smart City Interactive Zone',
  description: 'Multiple screens showcasing smart city solutions',
  color: '#059669',
  technicalSpecs: {
    'Table Under 3D Models': '5x5 P1.25 (Resolution: 2400x1350)',
    'Wall Screen': '4x5 (4 rows, 5 columns) (Resolution: 2400x1080)',
    'Interactive Screen': '27"',
    'Side Screens': '55" Full HD (left and right of wall screen)',
    'Quantity': '5 screens total (3 on wall, 1 on table, 1 interactive)'
  },
  image: images.E2,
  isTabbedView: true,
  topics: [
    {
      id: 'smart-city-proposition',
      name: 'Smart City Key Proposition',
      type: 'content',
      content: {
        title: 'Smart City Key Proposition',
        description: 'Quality of Life, Sustainability, and Intelligence',
        mediaType: 'video-display',
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Quality of "Life"</h4>
<p style="margin-bottom: 1rem;">Smart cities are about people and how they live everyday life in a "better, safe and secure environment"</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Cost efficient & "Sustainable"</h4>
<p style="margin-bottom: 1rem;">Efficient use of resources that results in cost and energy savings for highly sustainable society</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Smart & "Intelligent"</h4>
<p style="margin-bottom: 1rem;">Employing latest and greatest technologies to make smart and intelligent decisions.</p>
</div>`,
        image: images.E2
      }
    },
    {
      id: 'smart-parking',
      name: 'Smart Parking Solution',
      type: 'activation',
      content: {
        title: 'Smart Parking - Traffic Optimization',
        description: 'IoT + AI for intelligent parking management',
        mediaType: 'interactive-city-model',
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Smart Parking Solution</h4>
<p style="margin-bottom: 1rem;">Smart Parking Solution Intelligently detects availability of vacant parking slots, saving valuable time of employees and visitors as well as optimizing traffic flow and management for administration.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Key features</h4>
<ul style="margin-bottom: 1rem;">
<li>Detect occupancy in real-time and notify empty parking slots</li>
<li>Provide navigation to empty parking slots with access control and option to reserve</li>
<li>Optimize traffic flow and reduce congestion</li>
<li>Reduce emission of CO2 and other pollutants</li>
<li>Enable Intelligent analytics and Historical Reports</li>
</ul>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">How it Works</h4>
<p style="margin-bottom: 1rem;">Parking Sensors → Gateway Nodes → Cloud GW → Smart application → Digital & Interactive Services</p>
</div>`,
        image: images.E2
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
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Smart Lighting & Energy Solutions</h4>
<p style="margin-bottom: 1rem;">Smart Energy Solutions are designed to optimize the usage of electrical supply with proactive reporting, actionable controlling of devices through centralized control center (Application).</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Product Features</h4>
<ul style="margin-bottom: 1rem;">
<li>Enable Intelligent control where and when needed (with autonomous on/off)</li>
<li>Monitor and Control energy consumption and reduce energy loss</li>
<li>Transform legacy infrastructure to Intelligent digital Infrastructure</li>
<li>Integration with end-user applications</li>
<li>Detailed reporting and Dashboards</li>
</ul>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">How it Works</h4>
<p style="margin-bottom: 1rem;">LED/UNIT → Controller Nodes → Gateway → Cloud Application → Digital & Interactive Services</p>

<p style="margin-bottom: 1rem;"><strong>Energy savings:</strong> Up to 50-90% reduction in energy consumption across different zones.</p>
</div>`,
        image: images.E2
      }
    },
    {
      id: 'surveillance',
      name: 'Digital Surveillance',
      type: 'content',
      content: {
        title: 'AI-Powered Digital Surveillance',
        description: 'Comprehensive video management for safe cities',
        mediaType: 'command-center-demo',
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Digital Surveillance Solutions</h4>
<p style="margin-bottom: 1rem;">Comprehensive video management system that enables cities to Monitor, Track, Store, Protect, Analyze and Decide for Safe City, Campus Security, Building Security, and Traffic Security applications.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Solution Features</h4>
<ul style="margin-bottom: 1rem;">
<li>Broad range of megapixel cameras deliver high quality imaging with maximum coverage</li>
<li>Maximum clarity and minimum bandwidth preserves video image integrity while intelligently managing bandwidth</li>
<li>Find scene changes, missing objects and events - full control over video playback, evidence can be retrieved quickly</li>
<li>Integration with access control, intercom, external alarms, POS systems and any 3rd party solutions</li>
<li>Leads to a safer environment and provides an immediate alert</li>
</ul>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Architecture</h4>
<p style="margin-bottom: 1rem;">Security Cameras → Solutions by stc Cloud (Video Recorder, VMS Software, Video Intelligence Apps, Cloud Storage) → Field Sensors → Video Management System</p>
</div>`,
        image: images.E2
      }
    },
    {
      id: 'crowd-management',
      name: 'AI Crowd Intelligence',
      type: 'activation',
      content: {
        title: 'AI-Powered Dynamic Crowd Intelligence',
        description: 'Real-time crowd management using NVIDIA Metropolis',
        mediaType: 'live-analytics-demo',
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">AI-Powered Dynamic Crowd Intelligence for Public Spaces</h4>
<p style="margin-bottom: 1rem;">Transform public spaces into responsive, safe, and enjoyable environments by predicting, visualizing, and mitigating crowd congestion in real time — enhancing citizen experience while optimizing municipal resource allocation.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Deployed Pilots</h4>
<p style="margin-bottom: 1rem;"><strong>Public area crowd management - Deployed use cases:</strong></p>
<ul style="margin-bottom: 1rem;">
<li>Riyadh boulevard</li>
<li>Combat city</li>
<li>Riyadh sports boulevard</li>
</ul>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Suggested Execution Details</h4>
<p style="margin-bottom: 1rem;">Deploy NVIDIA Metropolis-powered edge-to-cloud AI cameras across high-footfall zones to continuously analyze crowd density, movement patterns, dwell times, and flow bottlenecks. Integrate with city apps and digital signage to provide real-time crowd heatmaps and personalized "congestion avoidance" routing to citizens. Enable city operators to dynamically adjust event layouts, security deployment, and public transport schedules based on predictive analytics.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Value Proposition</h4>
<ul style="margin-bottom: 1rem;">
<li>30–50% reduction in crowd-related incidents and emergency response times</li>
<li>Enhanced citizen safety and satisfaction through proactive crowd guidance</li>
<li>Data-driven urban event planning and infrastructure optimization</li>
<li>Real-time KPI dashboard for city managers: peak/off-peak analytics, zone utilization, anomaly alerts</li>
</ul>
</div>`,
        image: images.E2
      }
    },
    {
      id: 'traffic-management',
      name: 'Cognitive Traffic Management',
      type: 'activation',
      content: {
        title: 'AI-Driven Traffic Flow Optimization',
        description: 'Smart traffic management with real-time optimization',
        mediaType: 'traffic-control-system',
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Cognitive Traffic Orchestration System</h4>
<p style="margin-bottom: 1rem;">Create a self-optimizing, AI-driven traffic nervous system that reduces congestion, enforces compliance, and ensures seamless mobility across urban and border environments — turning traffic data into actionable intelligence.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Deployed Pilots</h4>
<p style="margin-bottom: 1rem;"><strong>Traffic management system using AI deep learning to control the traffic flow and congestion - Deployed use cases:</strong></p>
<ul style="margin-bottom: 1rem;">
<li>Smart Misk city</li>
<li>Modon industrial cities</li>
<li>Zatca (Saudi Arabia borders)</li>
</ul>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Suggested Execution Details</h4>
<p style="margin-bottom: 1rem;">By deploying smart AI-ANPR/driver cameras having high IR technology to control traffic management (congestions, incidents, blacklist/whitelist vehicles, face recognition, driver identity) to ensure smooth traffic controlling by having statistics and detailed analysis report on unified digital dashboard.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Value Proposition</h4>
<ul style="margin-bottom: 1rem;">
<li>20–40% improvement in average traffic flow velocity during peak hours</li>
<li>99%+ accuracy in vehicle/driver identification for security and compliance (ZATCA use case)</li>
<li>30% reduction in incident response time via automated anomaly detection</li>
<li>Predictive analytics for infrastructure planning: congestion forecasting, lane optimization, tolling strategy</li>
</ul>
</div>`,
        image: images.E2
      }
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Platform',
      type: 'activation',
      content: {
        title: '3D Digital Twin City Platform',
        description: 'Virtual replica of the city for planning and simulation',
        mediaType: '3d-city-model',
        explanation: `<div style="max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Immersive Digital Twin for Urban Resilience & Sustainable Planning</h4>
<p style="margin-bottom: 1rem;">Build a physics-accurate, AI-simulated digital replica of city districts or critical infrastructure to test scenarios, optimize layouts, predict failures, and reduce environmental impact — before breaking ground in the real world.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Strategic Alignment</h4>
<ul style="margin-bottom: 1rem;">
<li>Germany DSD Intralogistics Benchmark (10% downtime reduction → $1.7B/year savings)</li>
<li>Saudi Vision 2030 Sustainability & Smart Infrastructure Goals</li>
</ul>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Suggested Execution Details</h4>
<p style="margin-bottom: 1rem;">Leverage NVIDIA Metropolis microservices to create photorealistic, sensor-accurate digital twins of urban zones (e.g., MODON industrial parks, Riyadh new districts, King Salman Park). Simulate traffic flows, pedestrian movement, energy consumption, and climate impact under various conditions. Train and validate Metropolis AI models using synthetic data before real-world deployment. Enable "what-if" planning for facility placement, emergency evacuation, or carbon footprint reduction.</p>

<h4 style="color: #059669; font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">Value Proposition</h4>
<ul style="margin-bottom: 1rem;">
<li>10–15% reduction in planned downtime → Millions saved in operational continuity (aligned with German DSD case)</li>
<li>Up to 20% carbon footprint reduction via optimized logistics and energy routing simulations</li>
<li>Risk-free testing of urban policies, camera placements, and emergency protocols</li>
<li>Accelerated training for city operators using immersive simulation environments</li>
</ul>
</div>`,
        image: images.E2
      }
    }
  ]
};
