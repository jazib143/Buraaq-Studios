import React from 'react';
import { Zap } from 'lucide-react';
import ServicePageLayout from '../../components/shared/ServicePageLayout';

const MotionGraphicsPage: React.FC = () => {
  const pageData = {
    title: 'Motion Graphics',
    subtitle: 'Eye-Catching Animated Graphics & Visual Effects',
    description: 'Bring your brand to life with stunning motion graphics and animated visual effects. Our creative team designs custom animations, logo reveals, and dynamic graphics that enhance your video content and strengthen your brand identity.',
    backgroundImage: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: [
      'Logo Animations',
      'Text Effects',
      'Infographic Animation',
      '2D Character Animation',
      'Kinetic Typography',
      'Icon Animations',
      'Transition Effects',
      'Brand Integration'
    ],
    benefits: [
      'Enhanced brand recognition',
      'Increased viewer engagement',
      'Professional visual appeal',
      'Memorable brand experiences',
      'Versatile content applications',
      'Modern, cutting-edge design'
    ],
    process: [
      { step: 'Concept', description: 'Develop creative concept and style' },
      { step: 'Design', description: 'Create custom graphics and elements' },
      { step: 'Animate', description: 'Bring designs to life with motion' },
      { step: 'Integrate', description: 'Seamlessly blend with your content' }
    ],
    testimonial: {
      name: 'Maria Garcia',
      role: 'Marketing Director',
      content: 'The motion graphics completely transformed our brand presentation. The animations are smooth, professional, and perfectly capture our brand essence.',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    portfolioItems: [
      {
        title: 'Brand Logo Animation',
        image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Dynamic logo reveal with particle effects',
        videoUrl: 'https://youtu.be/wtkgSjNnm_E'
      },
      {
        title: 'Infographic Animation',
        image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Engaging data visualization animation',
        videoUrl: 'https://youtu.be/682SyDroQAw'
      },
      {
        title: 'Kinetic Typography',
        image: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Dynamic text animation with effects',
        videoUrl: 'https://youtu.be/uyrN2Gdeero'
      }
    ],
    icon: Zap,
    color: 'text-yellow-400',
    gradient: 'from-yellow-500 to-orange-500'
  };

  return <ServicePageLayout {...pageData} />;
};

export default MotionGraphicsPage;