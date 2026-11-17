// movies.js - Saari movies ka data sirf yahan rakhein
const moviesData = [
  {
    slug: "oppenheimer",
    title: "Oppenheimer",
    tmdb_id: 872585,
    release_year: 2023,
    rating: "R",
    runtime: "180 min",
    genres: ["Drama", "History"],
    synopsis: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project.",
    streaming_options: [
      { platform: "Prime Video", type: "Rent / Buy", url: "https://www.amazon.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "Christopher Nolan's masterpiece is a tense, intellectually rigorous historical drama."
  },
  {
    slug: "dune-part-two",
    title: "Dune: Part Two",
    tmdb_id: 693134,
    release_year: 2024,
    rating: "PG-13",
    runtime: "166 min",
    genres: ["Sci-Fi", "Adventure"],
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    streaming_options: [
      { platform: "Max", type: "Subscription", url: "https://www.max.com" }
    ],
    editorial_review: "Denis Villeneuve delivers a breathtaking sci-fi spectacle."
  }
  // Baqi saari movies bhi isi tarah yahan add karte jayein...
];
