/**
 * Original Adda Gourmet Cafe - Core Data & Media Configuration
 * All photos, menu items, reviews, and cafe details are centralized here for easy editing.
 */

export interface CafeDetails {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  googleRating: number;
  totalReviews: number;
  googleMapsUrl: string;
  googleReviewUrl: string;
  openingHoursStr: string;
  openHour: number; // 6 (6:30 AM)
  openMinute: number; // 30
  closeHour: number; // 21 (9:30 PM)
  closeMinute: number; // 30
}

export const CAFE_INFO: CafeDetails = {
  name: "Original Adda Gourmet Cafe",
  tagline: "Every evening is adda.",
  address: "Ward 14, near Kumud Kumari School Gate, Raghunathpur, Jhargram, West Bengal 721507, India",
  phone: "+91 83920 63748",
  whatsappNumber: "918392063748",
  whatsappLink: "https://wa.me/918392063748",
  googleRating: 4.4,
  totalReviews: 237,
  googleMapsUrl: "https://maps.google.com/?cid=14372494159254962919",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJTRXmOuh7HToR58LEAkpbdcc",
  openingHoursStr: "Every day, 6:30 AM – 9:30 PM",
  openHour: 6,
  openMinute: 30,
  closeHour: 21,
  closeMinute: 30,
};

/**
 * ==========================================
 * PHOTOS CONFIGURATION
 * Replace any placeholder URL below with your cafe's real photo files.
 * ==========================================
 */
export const PHOTOS = {
  // Hero section main backdrop
  hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=85",
  
  // Experience cards
  friends: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  date: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
  family: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
  match: "https://images.unsplash.com/photo-1574966739985-79a0b12bc55d?auto=format&fit=crop&w=1200&q=80",
  
  // Special offers cards
  offer1: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
  offer2: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
  
  // Exterior and Ambience
  nightExterior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  cozyInterior: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
  
  // Full gallery items (displayed in Masonry + Lightbox)
  gallery: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      title: "Cozy Wooden Ambience",
      caption: "Warm golden pendant lights and intimate seating for relaxed conversation.",
      category: "Ambiance"
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      title: "Loaded Cheese Chicken BBQ Pizza",
      caption: "Handmade crust topped with smoked chicken, barbecue glaze and mozzarella.",
      category: "Pizzas"
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
      title: "Jhargram's Only Authentic Tacos",
      caption: "Crispy taco shells loaded with spicy seasoned fillings, sour cream and salsa.",
      category: "Tacos"
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      title: "Hand-Crafted Virgin Mojitos",
      caption: "Chilled sparkling refreshment muddled with farm-fresh garden mint and zesty lime.",
      category: "Drinks"
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
      title: "Cold Coffee with Ice Cream",
      caption: "Velvety espresso blended with creamy milk and topped with rich French vanilla.",
      category: "Drinks"
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1527477378408-1bc09424e6ff?auto=format&fit=crop&w=1200&q=80",
      title: "Crispy Peri-Peri Chicken Wings",
      caption: "Golden fried wings tossed in our signature house-made fiery spice blend.",
      category: "Snacks"
    },
    {
      id: "gal-7",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      title: "Night Exterior at Kumud Kumari Gate",
      caption: "A welcoming beacon in Jhargram, glowing warmly into the evening hours.",
      category: "Ambiance"
    },
    {
      id: "gal-8",
      url: "https://images.unsplash.com/photo-1574966739985-79a0b12bc55d?auto=format&fit=crop&w=1200&q=80",
      title: "Giant Screen Match Screenings",
      caption: "Cheer for every boundary and goal surrounded by fellow sports lovers.",
      category: "Experience"
    }
  ]
};

/**
 * ==========================================
 * MENU ITEMS DATA
 * Tabs: Pizzas, Burgers & Tacos, Snacks, Drinks
 * Easy to update or expand.
 * ==========================================
 */
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  tag?: string; // e.g. "Signature", "Guest Favourite", "Exclusive in Jhargram"
  priceNote: string; // "Ask at counter" as requested
  category: "pizzas" | "burgers_tacos" | "snacks" | "drinks";
}

export const MENU_DATA: MenuItem[] = [
  // PIZZAS
  {
    id: "p-1",
    name: "Cheese Chicken BBQ Pizza",
    description: "Tender BBQ-glazed chicken chunks, smoky onions, and generous melted mozzarella.",
    tag: "Bestseller",
    priceNote: "Ask at counter",
    category: "pizzas"
  },
  {
    id: "p-2",
    name: "Chicken Supreme Pizza",
    description: "Loaded with seasoned diced chicken, grilled bell peppers, olives, and golden corn.",
    tag: "Chef's Special",
    priceNote: "Ask at counter",
    category: "pizzas"
  },
  {
    id: "p-3",
    name: "Chicken Salami Feast",
    description: "Thinly sliced artisanal chicken salami layered over herb-infused Italian tomato sauce.",
    priceNote: "Ask at counter",
    category: "pizzas"
  },
  {
    id: "p-4",
    name: "Spicy Chicken Overload",
    description: "Fiery marinated chicken with hot bird's eye chillies and melted cheddar cheese.",
    tag: "Spicy",
    priceNote: "Ask at counter",
    category: "pizzas"
  },
  {
    id: "p-5",
    name: "Peri-Peri Chicken Pizza",
    description: "Bold African bird's eye chili blend infused into roasted chicken and stringy mozzarella.",
    priceNote: "Ask at counter",
    category: "pizzas"
  },
  {
    id: "p-6",
    name: "Gourmet Margherita Supreme",
    description: "Classic sun-ripened tomatoes, sweet aromatic basil, and double layer buffalo cheese.",
    priceNote: "Ask at counter",
    category: "pizzas"
  },

  // BURGERS & TACOS
  {
    id: "bt-1",
    name: "Crispy Chicken Tacos (Only in Jhargram)",
    description: "Hard-shell taco loaded with seasoned chicken, shredded iceberg, house salsa and tangy crema.",
    tag: "Jhargram Exclusive",
    priceNote: "Ask at counter",
    category: "burgers_tacos"
  },
  {
    id: "bt-2",
    name: "Cheesy Mexican Salsa Tacos",
    description: "Crunchy golden shells filled with zesty beans, diced peppers, melted cheese sauce, and pico de gallo.",
    tag: "Vegetarian",
    priceNote: "Ask at counter",
    category: "burgers_tacos"
  },
  {
    id: "bt-3",
    name: "Paneer Tikka Fusion Tacos",
    description: "Charcoal-spiced cottage cheese cubes in warm taco wraps with mint mayo and pickled onion ribbons.",
    priceNote: "Ask at counter",
    category: "burgers_tacos"
  },
  {
    id: "bt-4",
    name: "Original Adda Monster Burger",
    description: "Double crispy seasoned chicken patty, cheddar slice, caramelised onions, and secret adda dressing.",
    tag: "Heavyweight",
    priceNote: "Ask at counter",
    category: "burgers_tacos"
  },
  {
    id: "bt-5",
    name: "Smoky BBQ Gourmet Burger",
    description: "Grilled juicy patty brushed with sweet hickory barbecue sauce, crisp lettuce, and gherkins.",
    priceNote: "Ask at counter",
    category: "burgers_tacos"
  },
  {
    id: "bt-6",
    name: "Crispy Golden Veggie Burger",
    description: "Spiced herb-potato and vegetable crunch patty layered with cheese and fresh tomatoes.",
    priceNote: "Ask at counter",
    category: "burgers_tacos"
  },

  // SNACKS
  {
    id: "s-1",
    name: "Crispy Chicken Wings (Hot & Spicy)",
    description: "Juicy on the inside, crunchy on the outside, tossed with hot pepper glaze.",
    tag: "Guest Favourite",
    priceNote: "Ask at counter",
    category: "snacks"
  },
  {
    id: "s-2",
    name: "Smoky Honey BBQ Wings",
    description: "Slow-glazed chicken wings infused with natural honey and rich smoked paprika.",
    priceNote: "Ask at counter",
    category: "snacks"
  },
  {
    id: "s-3",
    name: "Loaded Cheesy Adda Fries",
    description: "Golden salted french fries smothered in warm molten cheddar and jalapeño bits.",
    priceNote: "Ask at counter",
    category: "snacks"
  },
  {
    id: "s-4",
    name: "Golden Chicken Strips with Dip",
    description: "Crispy battered tender chicken breast strips served with house garlic mayonnaise.",
    priceNote: "Ask at counter",
    category: "snacks"
  },
  {
    id: "s-5",
    name: "Crunchy Nachos Supreme",
    description: "Stone-ground corn chips baked with diced peppers, black olives, salsa, and sour cream.",
    priceNote: "Ask at counter",
    category: "snacks"
  },

  // DRINKS
  {
    id: "d-1",
    name: "Signature Cold Coffee with Ice Cream",
    description: "Hand-blended rich cold brew espresso topped with a generous scoop of artisanal vanilla ice cream.",
    tag: "Must Try",
    priceNote: "Ask at counter",
    category: "drinks"
  },
  {
    id: "d-2",
    name: "Classic Fresh Mint Mojito",
    description: "Crisp crushed mint leaves, lime wedges, and sparkling soda over crystal crushed ice.",
    tag: "Refreshing",
    priceNote: "Ask at counter",
    category: "drinks"
  },
  {
    id: "d-3",
    name: "Green Apple Mint Fizz",
    description: "Tart green apple syrup blended with garden mint and fizzy soda for a zesty kick.",
    priceNote: "Ask at counter",
    category: "drinks"
  },
  {
    id: "d-4",
    name: "Blue Ocean Lagoon Mocktail",
    description: "Curacao citrus extract, lemon juice, and fizzy soda served with an orange slice.",
    priceNote: "Ask at counter",
    category: "drinks"
  },
  {
    id: "d-5",
    name: "Hazelnut Choco Frappe",
    description: "Velvety coffee shake blended with roasted hazelnut syrup and Belgian chocolate drizzle.",
    priceNote: "Ask at counter",
    category: "drinks"
  },
  {
    id: "d-6",
    name: "Fresh Masala Chai & Hot Coffee",
    description: "Freshly brewed morning and evening hot beverages made to order.",
    priceNote: "Ask at counter",
    category: "drinks"
  }
];

/**
 * ==========================================
 * GUEST REVIEWS DATA
 * Pre-filled with real verified guest reviews.
 * Users can also submit their own review which is stored in localStorage.
 * ==========================================
 */
export interface ReviewItem {
  id: string;
  name: string;
  rating: number; // 1 to 5
  text: string;
  date: string;
  source: string; // "Google review" or "On-site guest"
  photoUrl?: string;
  isNew?: boolean;
}

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Subham Banerjee",
    rating: 5,
    text: "The pizza was spicy with a nice base and the chicken wings were crispy and juicy.",
    date: "2 weeks ago",
    source: "Google review"
  },
  {
    id: "rev-2",
    name: "Poulomi Dutta",
    rating: 5,
    text: "A cosy cafe with good ambience, perfect to spend time with loved ones and click aesthetic photos.",
    date: "1 month ago",
    source: "Google review"
  },
  {
    id: "rev-3",
    name: "Rohan Mukherjee",
    rating: 5,
    text: "Quick service, a huge menu and a giant TV to enjoy matches while you eat.",
    date: "2 months ago",
    source: "Google review"
  },
  {
    id: "rev-4",
    name: "Ananya Sen",
    rating: 5,
    text: "The only cafe in Jhargram where you can find tacos. Really loved the crispy texture and flavors!",
    date: "3 months ago",
    source: "Google review"
  }
];

/**
 * Weekly Hours Table
 */
export const WEEKLY_HOURS = [
  { day: "Monday", hours: "6:30 AM – 9:30 PM", dayIndex: 1 },
  { day: "Tuesday", hours: "6:30 AM – 9:30 PM", dayIndex: 2 },
  { day: "Wednesday", hours: "6:30 AM – 9:30 PM", dayIndex: 3 },
  { day: "Thursday", hours: "6:30 AM – 9:30 PM", dayIndex: 4 },
  { day: "Friday", hours: "6:30 AM – 9:30 PM", dayIndex: 5 },
  { day: "Saturday", hours: "6:30 AM – 9:30 PM", dayIndex: 6 },
  { day: "Sunday", hours: "6:30 AM – 9:30 PM", dayIndex: 0 },
];
