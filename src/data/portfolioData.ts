export type PortfolioItem = {
  imgSrc: string;
  title: string;
  description: string;
  type: 'Mobile App' | 'Website' | 'UI Design';
  mediaUrl: string;
  mediaType: 'video' | 'image';
  deployUrl?: string;
  sourceUrl?: string; // ✅ TAMBAHKAN INI
  techStack?: string[];
};


export const portfolioData: PortfolioItem[] = [
  {
    imgSrc: '/assets/porto/gerald.png',
    title: 'Gerald',
    description: 'Surabaya City Flood Prevention App...',
    type: 'Mobile App',
    mediaUrl: 'https://www.youtube.com/watch?v=your-video-id-2',
    mediaType: 'video',
    deployUrl: 'https://github.com/pramudyanuar/gerald',
    sourceUrl: 'https://github.com/pramudyanuar/gerald', // ✅ TAMBAHKAN INI
    techStack: ['Flutter', 'IoT', 'Google Maps API', 'Node.js']
  },
  {
    imgSrc: '/assets/porto/jobs.png',
    title: 'Jobs',
    description: 'Jobs is a job search and recruitment platform...',
    type: 'Website',
    mediaUrl: '/assets/porto/jobs-detail.jpg',
    mediaType: 'image',
    sourceUrl: 'https://github.com/yourusername/jobs', // ✅ TAMBAHKAN INI
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase']
  }

];

export const filterOptions = ['All', 'Mobile App', 'Website', 'UI Design'];
