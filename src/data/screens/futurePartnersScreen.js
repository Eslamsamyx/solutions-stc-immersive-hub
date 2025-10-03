import images from '../../assets/images';

export const futurePartnersScreenScreen = {
  id: 'future-partners-screen',
  name: 'Future Tech Partners Screen',
  description: 'Partnership showcase displays',
  color: '#F59E0B',
  technicalSpecs: {
    displays: 'Multiple interactive displays',
    location: 'Future Partners zone'
  },
  image: images.E3,
  topics: [
    {
      id: 'huawei-partnership',
      name: 'Huawei Partnership',
      type: 'content',
      content: {
        title: 'Huawei & Solutions by STC',
        description: 'Pioneering smart cities together',
        mediaType: 'partnership-showcase',
        explanation: 'Strategic partnership combining Huawei\'s global smart city leadership with STC\'s local expertise.',
        technicalSpecs: {
          agreement: 'MoU signed 2022',
          deployment: 'Eastern Province'
        },
        image: images.E3
      }
    }
  ]
};
