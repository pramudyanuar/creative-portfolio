export type PortfolioItem = {
  imgSrc: string;
  title: string;
  description: string;
  type: 'Mobile App' | 'Website' | 'UI Design';
  mediaUrl: string;
  mediaType: 'video' | 'image';
  deployUrl?: string;
  techStack?: string[]; // NEW: array teknologi yang digunakan
};

export const portfolioData: PortfolioItem[] = [
  {
    imgSrc: '/assets/porto/colorex.png',
    title: 'Colorex (Closed Beta)',
    description:
      'Colorex is an AI-powered Personal Color Assistant that helps users identify the most suitable color palettes based on their skin tone, clothing, and environment. Perfect for fashion enthusiasts, designers, and makeup artists.',
    type: 'Mobile App',
    mediaUrl: 'https://www.youtube.com/watch?v=your-video-id-1',
    mediaType: 'video',
    deployUrl: 'https://play.google.com/store/apps/details?id=com.colorexid.findyourpersona',
    techStack: ['Flutter', 'TensorFlow Lite', 'Firebase', 'OpenCV']
  },
  {
    imgSrc: '/assets/porto/jobs.png',
    title: 'Jobs',
    description:
      'Jobs is a job search and recruitment platform that connects employers with job seekers through an intuitive interface and smart matching algorithm.',
    type: 'Website',
    mediaUrl: '/assets/porto/jobs-detail.jpg',
    mediaType: 'image',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase']
  },
  {
    imgSrc: '/assets/porto/gerald.png',
    title: 'Gerald',
    description:
      'Surabaya City Flood Prevention App, which has advanced to the finals of GEMASTIK 2024, designed to provide advanced solutions for flood management and early warnings in urban areas.',
    type: 'Mobile App',
    mediaUrl: 'https://www.youtube.com/watch?v=your-video-id-2',
    mediaType: 'video',
    deployUrl: 'https://github.com/pramudyanuar/gerald',
    techStack: ['Flutter', 'IoT', 'Google Maps API', 'Node.js']
  },
  {
    imgSrc: '/assets/porto/setapak.png',
    title: 'Setapak',
    description:
      'Setapak: An AI-Powered E-Commerce Platform with Advanced Image Recognition Technology and Precise Size Measurement Capabilities for Seamless Buying and Selling Experiences.',
    type: 'Website',
    mediaUrl: '/assets/porto/setapak.png',
    mediaType: 'image',
    deployUrl: 'https://setapak.vercel.app/',
    techStack: ['Next.js', 'Tailwind CSS', 'FastAPI', 'YOLOv5']
  },
  {
    imgSrc: '/assets/porto/tkiconnect.png',
    title: 'TKIConnect',
    description:
      'TKIConnect is an app designed to protect and support Indonesian migrant workers abroad. It offers vital resources, including legal assistance, emergency contacts, and access to local embassies.',
    type: 'UI Design',
    mediaUrl: '/assets/porto/tkiconnect.png',
    mediaType: 'image',
    techStack: ['Figma', 'Flutter UI Kit']
  }
];

export const filterOptions = ['All', 'Mobile App', 'Website', 'UI Design'];
