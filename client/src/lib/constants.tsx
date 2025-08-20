export const PROPERTY_DATA = {
  title: "The Bhowmick's Bungalow Shoroma",
  location: "Room in Tezpur, India",
  details: "1 bed · Private attached bathroom",
  rating: 5.0,
  reviewCount: 4,
  pricePerNight: 2511,
  totalPrice: 5022,
  nights: 2,
  hostName: "Arita",
  hostYearsHosting: 6,
  isSuperhostStatus: true,
  checkInDate: "8/22/2025",
  checkOutDate: "8/24/2025",
  description: `You won't want to leave this charming, one-of-a-kind place. The Bhowmick's Bungalow is a 150-year old bungalow which is located in the heart of the town. The vintage house is beautifully and meticulously designed to give the guest a feel of a comfort living in an bungalow. The property is filled with green foliage and blooms which leaves the guests with a feel of freshness and rejuvenation. Traditional family cuisine meals are served to the guest overseen by the lady of the of the house...`,
  
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Cozy living room with traditional decor",
      isMain: true
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Night exterior view of the bungalow"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Bedroom with photo gallery wall"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Bedroom with green bedding"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Modern kitchen and bathroom"
    },
    // Additional images for full gallery
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1502005229762-cf1b2da02f3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Traditional dining area"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1540518614846-7eded47432f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Garden view"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Bathroom interior"
    }
  ],

  amenities: [
    { name: "Lock on bedroom door", icon: "Lock" },
    { name: "WiFi", icon: "Wifi" },
    { name: "Free parking on premises", icon: "Car" },
    { name: "Air conditioning", icon: "Snowflake" },
    { name: "Carbon monoxide alarm", icon: "Shield" },
    { name: "Smoke alarm", icon: "ShieldAlert" }
  ],

  features: [
    {
      title: "Exceptional check-in experience",
      description: "Recent guests gave the check-in process a 5-star rating.",
      icon: "CheckCircle"
    },
    {
      title: "Room in a bed and breakfast",
      description: "Your own room in a home, plus access to shared spaces.",
      icon: "Home"
    },
    {
      title: "Free cancellation before 12:00 pm on 21 Aug",
      description: "Get a full refund if you change your mind.",
      icon: "Calendar"
    }
  ],

  ratingCategories: [
    { name: "Cleanliness", rating: 4.8, icon: "Sparkles" },
    { name: "Accuracy", rating: 4.8, icon: "CheckCircle" },
    { name: "Check-in", rating: 5.0, icon: "Key" },
    { name: "Communication", rating: 4.5, icon: "MessageCircle" },
    { name: "Location", rating: 4.8, icon: "MapPin" },
    { name: "Value", rating: 5.0, icon: "DollarSign" }
  ]
};

export const CALENDAR_DATA = {
  selectedDates: {
    start: new Date(2025, 7, 22), // August 22, 2025
    end: new Date(2025, 7, 24)    // August 24, 2025
  }
};
