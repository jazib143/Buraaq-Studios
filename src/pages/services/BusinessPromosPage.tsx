import React from 'react';
import { Briefcase } from 'lucide-react';
import ServicePageLayout from '../../components/shared/ServicePageLayout';

const BusinessPromosPage: React.FC = () => {
  const pageData = {
    title: 'Business Promos',
    subtitle: 'Professional Corporate Videos That Drive Results',
    description: 'Elevate your brand with professional promotional videos that effectively communicate your message and drive business growth. Our corporate video editing services help establish credibility, increase conversions, and build lasting customer relationships.',
    backgroundImage: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: [
      'Brand Integration',
      'Professional Voice-over',
      'Corporate Graphics',
      'Call-to-Action Optimization',
      'Multi-platform Formatting',
      'Logo Animations',
      'Product Showcases',
      'Testimonial Integration'
    ],
    benefits: [
      'Increase brand credibility and trust',
      'Boost conversion rates significantly',
      'Professional brand representation',
      'Multi-platform compatibility',
      'Clear call-to-action integration',
      'Measurable ROI improvement'
    ],
    process: [
      { step: 'Strategy', description: 'Understand your business goals and audience' },
      { step: 'Create', description: 'Develop professional promotional content' },
      { step: 'Brand', description: 'Integrate your brand elements seamlessly' },
      { step: 'Optimize', description: 'Ensure maximum impact and conversions' }
    ],
    testimonial: {
      name: 'Lisa Thompson',
      role: 'Business Owner',
      content: 'Our promotional video helped increase foot traffic by 60% within the first month. Highly recommend their services.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    portfolioItems: [
      {
        title: 'Tech Startup Promo',
        image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Modern tech company promotional video',
        videoUrl: 'https://youtu.be/wtkgSjNnm_E'
      },
      {
        title: 'Restaurant Marketing',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Appetizing restaurant promotional content',
        videoUrl: 'https://youtu.be/eysfsdIxGrQ'
      },
      {
        title: 'Real Estate Showcase',
        image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Professional property showcase video',
        videoUrl: 'https://youtu.be/uyrN2Gdeero'
      }
    ],
    icon: Briefcase,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-blue-600'
  };

  return <ServicePageLayout {...pageData} />;
};

export default BusinessPromosPage;