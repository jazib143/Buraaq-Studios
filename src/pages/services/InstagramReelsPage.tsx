import React from 'react';
import { Instagram } from 'lucide-react';
import ServicePageLayout from '../../components/shared/ServicePageLayout';

const InstagramReelsPage: React.FC = () => {
  const pageData = {
    title: 'Instagram Reels',
    subtitle: 'Viral Short-Form Content That Drives Engagement',
    description: 'Create scroll-stopping Instagram Reels that capture attention and drive massive engagement. Our editors specialize in trending formats, quick cuts, and mobile-optimized content that performs exceptionally well on social media platforms.',
    backgroundImage: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: [
      'Trending Format Integration',
      'Quick Cut Editing',
      'Mobile Optimization',
      'Text Animations',
      'Transition Effects',
      'Music Synchronization',
      'Hashtag Strategy',
      'Multiple Aspect Ratios'
    ],
    benefits: [
      'Increase follower growth exponentially',
      'Boost engagement rates significantly',
      'Stay current with trending formats',
      'Mobile-first optimization',
      'Quick turnaround for trending topics',
      'Cross-platform compatibility'
    ],
    process: [
      { step: 'Trend Analysis', description: 'Research current trends and formats' },
      { step: 'Edit', description: 'Create engaging short-form content' },
      { step: 'Optimize', description: 'Ensure mobile and platform optimization' },
      { step: 'Package', description: 'Deliver with captions and hashtags' }
    ],
    testimonial: {
      name: 'Emily Rodriguez',
      role: 'Social Media Influencer',
      content: 'The Instagram reels created by Buraaq Studios helped us increase our engagement by 300%! Their understanding of trends is unmatched.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    portfolioItems: [
      {
        title: 'Fashion Trends',
        image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Stylish fashion content with trending transitions',
        videoUrl: 'https://youtu.be/682SyDroQAw'
      },
      {
        title: 'Food Content',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Mouth-watering food reels with quick cuts',
        videoUrl: 'https://youtu.be/AFSHb6DChPQ'
      },
      {
        title: 'Lifestyle Vlogs',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Engaging lifestyle content with music sync',
        videoUrl: 'https://youtu.be/uyrN2Gdeero'
      }
    ],
    icon: Instagram,
    color: 'text-pink-400',
    gradient: 'from-pink-500 to-purple-500'
  };

  return <ServicePageLayout {...pageData} />;
};

export default InstagramReelsPage;