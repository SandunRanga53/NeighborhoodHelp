export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'yard-work', label: 'Yard Work' },
  { id: 'pet-care', label: 'Pet Care' },
  { id: 'groceries', label: 'Groceries' },
  { id: 'moving-help', label: 'Moving Help' },
  { id: 'pets', label: 'Pets' },
];

export const HELP_REQUESTS = [
  {
    id: '1',
    category: 'Moving Help',
    categoryId: 'moving-help',
    title: 'Need help moving a couch',
    description: 'Heavy sofa, need an extra pair of hands. Can offer coffee and thanks!',
    location: '0.2 mi • 3rd Street',
    timeAgo: '2h ago',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=240&fit=crop',
  },
  {
    id: '2',
    category: 'Pets',
    categoryId: 'pets',
    title: 'Lost Cat - Fluffy',
    description: 'Orange tabby, friendly. Last seen near the park. Please message if you spot her.',
    location: '0.8 mi • Park Ave',
    timeAgo: '15m ago',
    status: 'urgent',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=240&fit=crop',
  },
  {
    id: '3',
    category: 'Yard Work',
    categoryId: 'yard-work',
    title: 'Overgrown Lawn Help',
    description: 'Lawnmower broke. Will trade help for fresh baked cookies!',
    location: '1.2 mi • Elm St',
    timeAgo: '5h ago',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=240&fit=crop',
  },
  {
    id: '4',
    category: 'Groceries',
    categoryId: 'groceries',
    title: 'Quick grocery run?',
    description: 'Sick at home. Need milk, bread, soup. Will reimburse + tip!',
    location: '0.5 mi • Oak Dr',
    timeAgo: '1d ago',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=240&fit=crop',
  },
];

export const DEFAULT_DISTRICT = 'Maplewood District';
