export interface Club {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  events: {
    name: string;
    date: string;
  }[];
}

export const clubsData: Club[] = [
  {
    id: 1,
    name: 'Tech Innovators Club',
    description: 'A place for students passionate about technology, coding, and building the future.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070',
    events: [
      { name: 'Hackathon Kick-off', date: '2025-09-05' },
      { name: 'Guest Speaker: AI Ethics', date: '2025-10-12' },
    ],
  },
  {
    id: 2,
    name: 'Debate Society',
    description: 'Hone your public speaking and argumentation skills in a competitive and friendly environment.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
    events: [
      { name: 'Fall Semester Tournament', date: '2025-09-20' },
      { name: 'Public Speaking Workshop', date: '2025-11-01' },
    ],
  },
  {
    id: 3,
    name: 'Art & Photography Club',
    description: 'Explore your creativity through various mediums, from painting to digital photography.',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1345&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    events: [
      { name: 'Campus Photo Walk', date: '2025-09-15' },
    ],
  },
  {
    id: 4,
    name: 'Entrepreneurship Hub',
    description: 'Connect with like-minded individuals to brainstorm and launch your own business ventures.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232',
    events: [
      { name: 'Startup Pitch Night', date: '2025-10-18' },
      { name: 'Networking Mixer', date: '2025-11-22' },
    ],
  },
  {
    id: 5,
    name: 'Mountain Hiking Group',
    description: 'For adventure seekers who love exploring nature and conquering new heights together.',
    imageUrl: 'https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    events: [
      { name: 'Mount Gede Day Trip', date: '2025-09-28' },
    ],
  },
];