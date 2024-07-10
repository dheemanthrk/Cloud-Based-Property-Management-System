// export const API_URL = process.env.API_URL;
export const STAGE = "prod";
export const APIGATEWAY_URL = 'https://l36y96jys7.execute-api.us-east-1.amazonaws.com'
export const API_URL = `${APIGATEWAY_URL}/${STAGE}`;

export const options = [
  { id: 1, question: "What was the name of your first pet?" },
  { id: 2, question: "What is the name of the town where you were born?" },
  { id: 3, question: "What was your childhood nickname?" },
  { id: 4, question: "What is your mother's maiden name?" },
  { id: 5, question: "What was the name of your elementary school?" },
  { id: 6, question: "What is the name of your favorite teacher?" },
];

export const words = [
  "apple", "banana", "grape", "orange", "strawberry", "blueberry", "pineapple", "watermelon", "kiwi", "mango",
  "lemon", "lime", "cherry", "peach", "plum", "pear", "apricot", "blackberry", "raspberry", "cantaloupe",
  "honeydew", "fig", "pomegranate", "coconut", "guava", "papaya", "passionfruit", "persimmon", "quince", "tangerine",
  "nectarine", "cranberry", "mulberry", "boysenberry", "lychee", "dragonfruit", "durian", "jackfruit", "starfruit", "kumquat",
  "carrot", "potato", "tomato", "onion", "garlic", "broccoli", "cauliflower", "spinach", "lettuce", "cabbage",
  "kale", "zucchini", "cucumber", "peas", "chili", "pepper", "radish", "turnip", "beet", "eggplant",
  "pumpkin", "squash", "yam", "sweet potato", "corn", "pea", "bean", "lentil", "chickpea", "soybean",
  "rice", "wheat", "barley", "oat", "rye", "quinoa", "millet", "buckwheat", "amaranth", "sorghum",
  "chicken", "beef", "pork", "lamb", "fish", "shrimp", "crab", "lobster", "clam", "mussel",
  "oyster", "scallop", "squid", "octopus", "salmon", "tuna", "trout", "cod", "herring", "sardine"
];

export const rooms = [
  {
    id: 1,
    name: 'JW Marriott Inn',
    href: '#',
    price: '$50',
    availability: '',
    imageSrc: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
    imageAlt: 'Black and white photo of hotel room',
  },
  {
    id: 2,
    name: 'Hilton Garden Inn',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
    imageAlt: 'Black and white photo of hotel room',
  },
  {
    id: 3,
    name: 'Noop Inn',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt:
      'Room with black walls and white bed',
  },
]

export const agentRooms = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    bedroomCount: 2,
    bathroomCount: 1,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat Screen TV",
      "Mini Bar",
      "Room Service"
    ],
    description: "A cozy room with two bedrooms and modern amenities. Perfect for families or small groups.",
    pricePerNight: 120,
    available: true,
    location: "Downtown",
    rating: 4.5
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    bedroomCount: 1,
    bathroomCount: 1,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat Screen TV",
      "Room Service",
      "Balcony"
    ],
    description: "A luxurious room with a beautiful view and modern amenities. Ideal for couples.",
    pricePerNight: 150,
    available: true,
    location: "Beachfront",
    rating: 4.8
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroomCount: 3,
    bathroomCount: 2,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat Screen TV",
      "Mini Bar",
      "Room Service",
      "Kitchenette"
    ],
    description: "A spacious room with three bedrooms and a kitchenette. Perfect for large groups or families.",
    pricePerNight: 200,
    available: false,
    location: "Suburbs",
    rating: 4.2
  },
  {
    id: 4,
    image: "https://as1.ftcdn.net/v2/jpg/02/71/08/28/1000_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg",
    bedroomCount: 1,
    bathroomCount: 1,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Flat Screen TV",
      "Room Service",
      "Garden View"
    ],
    description: "A charming room with a garden view and all the modern comforts. Ideal for solo travelers or couples.",
    pricePerNight: 100,
    available: true,
    location: "Countryside",
    rating: 4.7
  }
];
