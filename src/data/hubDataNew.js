// Import screen components
import { outsideWallScreen } from './screens/outsideWall.js';
import { entranceHoloboxScreen } from './screens/entranceHolobox.js';
import { sisterScreensScreen } from './screens/sisterScreens.js';
import { smartCityZoneScreen } from './screens/smartCityZone.js';
import { futurePartnersScreenScreen } from './screens/futurePartnersScreen.js';
import { digitalWallScreen } from './screens/digitalWall.js';
import { ariaTechnologyScreen } from './screens/ariaTechnology.js';
import { collaborationRoomScreen } from './screens/collaborationRoom.js';

export const hubData = {
  entrance: {
    quote: "Innovate. Inspire. Impact.",
    welcomeMessages: [
      "Welcome to the Future — Powered by Innovation",
      "Welcome to solutions immersive hub, where innovation meets possibility"
    ],
    ceoMessage: "Innovation is about solving real-world challenges. We're proud to deliver futuristic solutions that make a visible difference, improving how businesses operate, serve their customers, and grow sustainably."
  },

  // Physical screens in the hub
  screens: [
    outsideWallScreen,
    entranceHoloboxScreen,
    sisterScreensScreen,
    smartCityZoneScreen,
    futurePartnersScreenScreen,
    digitalWallScreen,
    ariaTechnologyScreen,
    collaborationRoomScreen
  ]
};

// Helper functions
export const getScreenById = (screenId) => {
  return hubData.screens.find(screen => screen.id === screenId);
};

export const getTopicById = (screenId, topicId) => {
  const screen = getScreenById(screenId);
  return screen?.topics.find(topic => topic.id === topicId);
};

export const getAllTopics = () => {
  const allTopics = [];
  hubData.screens.forEach(screen => {
    screen.topics.forEach(topic => {
      allTopics.push({
        topic: topic,
        screen: screen,
        screenId: screen.id
      });
    });
  });
  return allTopics;
};

export const getAllScreens = () => {
  return hubData.screens;
};
