import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/imdb_logo.webp',
    title: 'IMDB Clone',
    description:
      'Created IMDb clone using Next.js v13 and Tailwind CSS for modern web development.',
    technologies: ['Next.js', 'Tailwind', 'CSS', 'TMDB API'],
    links: {
      preview: 'https://imdb-clone-jai007.vercel.app/',
      github: 'https://github.com/jairock007/imdb-clone',
      githubApi: 'https://api.github.com/repos/jairock007/imdb-clone',
    },
  },
  {
    image: '/projects/school-logo.png',
    title: 'My School',
    description: 'My School website, packed with useful features.',
    technologies: [
      'React.js',
      'Tailwind',
      'vercel',
      'Shadcn/ui',
      'Next-auth',
      'react-redux',
    ],
    links: {
      preview: 'https://my-school-eta.vercel.app/',
      github: 'https://github.com/jairock007/MySchool',
      githubApi: 'https://api.github.com/repos/jairock007/MySchool',
    },
  },
  {
    image: '/projects/two-good.jpeg',
    title: 'Two-Good',
    description: 'Developed a responsive and visually appealing web-based website using HTML, CSS and JavaScript',
    technologies: [
      'React',
      'Styled-components',
      'JavaScript',
      'Firebase',
    ],
    links: {
      preview: 'https://jairock007.github.io/two-good/',
      github: 'https://github.com/jairock007/two-good',
      githubApi: 'https://api.github.com/repos/jairock007/two-good',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Internship at WEB-BOX',
    location: 'Tarnobrzeg, NY',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    date: '2023',
  },
  {
    title: 'Internship at Chop-Chop',
    location: 'Remote',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    date: '2024',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    date: '2024 - present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
