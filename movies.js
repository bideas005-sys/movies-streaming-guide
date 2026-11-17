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
    editorial_review: "Christopher Nolan's masterpiece is a tense, intellectually rigorous historical drama anchored by Cillian Murphy's powerhouse performance."
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
      { platform: "Max", type: "Subscription", url: "https://www.max.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "Denis Villeneuve delivers a breathtaking sci-fi spectacle that surpasses the original in scale, emotion, and world-building."
  },
  {
    slug: "inception",
    title: "Inception",
    tmdb_id: 27205,
    release_year: 2010,
    rating: "PG-13",
    runtime: "148 min",
    genres: ["Action", "Sci-Fi", "Thriller"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    streaming_options: [
      { platform: "Netflix", type: "Subscription", url: "https://www.netflix.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "A mind-bending cinematic puzzle that rewards multiple viewings with its brilliant concept and execution."
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    tmdb_id: 157336,
    release_year: 2014,
    rating: "PG-13",
    runtime: "169 min",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new planet.",
    streaming_options: [
      { platform: "Paramount+", type: "Subscription", url: "https://www.paramountplus.com" },
      { platform: "Prime Video", type: "Rent / Buy", url: "https://www.amazon.com" }
    ],
    editorial_review: "An emotionally resonant cosmic journey featuring Hans Zimmer's iconic organ score and stunning visuals."
  },
  {
    slug: "the-dark-knight",
    title: "The Dark Knight",
    tmdb_id: 155,
    release_year: 2008,
    rating: "PG-13",
    runtime: "152 min",
    genres: ["Action", "Crime", "Drama"],
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman faces his greatest psychological test.",
    streaming_options: [
      { platform: "Max", type: "Subscription", url: "https://www.max.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "Widely regarded as one of the greatest superhero films ever made, driven by Heath Ledger’s legendary performance."
  },
  {
    slug: "gladiator-ii",
    title: "Gladiator II",
    tmdb_id: 558449,
    release_year: 2024,
    rating: "R",
    runtime: "148 min",
    genres: ["Action", "Adventure", "Drama"],
    synopsis: "Years after witnessing the death of Maximus, Lucius must enter the Colosseum after Roman conquerors take his home.",
    streaming_options: [
      { platform: "Paramount+", type: "Subscription", url: "https://www.paramountplus.com" }
    ],
    editorial_review: "Ridley Scott returns to the Colosseum with massive scale, intense arena battles, and a compelling narrative."
  },
  {
    slug: "deadpool-and-wolverine",
    title: "Deadpool & Wolverine",
    tmdb_id: 533535,
    release_year: 2024,
    rating: "R",
    runtime: "128 min",
    genres: ["Action", "Comedy", "Sci-Fi"],
    synopsis: "Deadpool's peaceful existence crashes down when the TVA recruits him for a mission alongside a reluctant Wolverine.",
    streaming_options: [
      { platform: "Disney+", type: "Subscription", url: "https://www.disneyplus.com" }
    ],
    editorial_review: "A hilarious, action-packed meta-ride delivering explosive chemistry between Ryan Reynolds and Hugh Jackman."
  },
  {
    slug: "inside-out-2",
    title: "Inside Out 2",
    tmdb_id: 1022789,
    release_year: 2024,
    rating: "PG",
    runtime: "96 min",
    genres: ["Animation", "Family", "Comedy", "Adventure"],
    synopsis: "New emotions like Anxiety and Envy arrive at teenager Riley's mind headquarters to shake things up.",
    streaming_options: [
      { platform: "Disney+", type: "Subscription", url: "https://www.disneyplus.com" }
    ],
    editorial_review: "A brilliant, deeply relatable animated sequel that expands on Pixar's emotional universe with wit and heart."
  },
  {
    slug: "john-wick-chapter-4",
    title: "John Wick: Chapter 4",
    tmdb_id: 603692,
    release_year: 2023,
    rating: "R",
    runtime: "169 min",
    genres: ["Action", "Crime", "Thriller"],
    synopsis: "John Wick uncovers a path to defeating The High Table while facing off against global enemies.",
    streaming_options: [
      { platform: "Starz", type: "Subscription", url: "https://www.starz.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "A stunning visual spectacle featuring some of the best choreographed action sequences in modern cinema."
  },
  {
    slug: "the-batman",
    title: "The Batman",
    tmdb_id: 414906,
    release_year: 2022,
    rating: "PG-13",
    runtime: "176 min",
    genres: ["Action", "Crime", "Drama"],
    synopsis: "When a sadistic serial killer targets political figures, Batman investigates Gotham's hidden corruption.",
    streaming_options: [
      { platform: "Max", type: "Subscription", url: "https://www.max.com" }
    ],
    editorial_review: "A gritty, noir-infused detective story bringing Gotham's underworld to life with phenomenal atmosphere."
  },
  {
    slug: "avatar-the-way-of-water",
    title: "Avatar: The Way of Water",
    tmdb_id: 76600,
    release_year: 2022,
    rating: "PG-13",
    runtime: "192 min",
    genres: ["Sci-Fi", "Adventure", "Action"],
    synopsis: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns, Jake must work with Neytiri.",
    streaming_options: [
      { platform: "Disney+", type: "Subscription", url: "https://www.disneyplus.com" },
      { platform: "Max", type: "Subscription", url: "https://www.max.com" }
    ],
    editorial_review: "James Cameron pushes visual effects boundaries to absolute perfection in this breathtaking underwater sci-fi epic."
  },
  {
    slug: "spider-man-across-the-spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    tmdb_id: 569094,
    release_year: 2023,
    rating: "PG",
    runtime: "140 min",
    genres: ["Animation", "Action", "Adventure", "Sci-Fi"],
    synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    streaming_options: [
      { platform: "Netflix", type: "Subscription", url: "https://www.netflix.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "A visual masterpiece that redefines animation with stunning artistic style, emotional depth, and relentless action."
  },
  {
    slug: "top-gun-maverick",
    title: "Top Gun: Maverick",
    tmdb_id: 361743,
    release_year: 2022,
    rating: "PG-13",
    runtime: "130 min",
    genres: ["Action", "Drama"],
    synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, confronting ghosts of his past.",
    streaming_options: [
      { platform: "Paramount+", type: "Subscription", url: "https://www.paramountplus.com" },
      { platform: "Prime Video", type: "Rent / Buy", url: "https://www.amazon.com" }
    ],
    editorial_review: "A rare sequel that surpasses the original, delivering heart-pounding aerial stunts and a genuinely moving story."
  },
  {
    slug: "barbie",
    title: "Barbie",
    tmdb_id: 346698,
    release_year: 2023,
    rating: "PG-13",
    runtime: "114 min",
    genres: ["Comedy", "Adventure", "Fantasy"],
    synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, they get a chance to go to the real world.",
    streaming_options: [
      { platform: "Max", type: "Subscription", url: "https://www.max.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "Greta Gerwig delivers a dazzling, witty, and surprisingly profound cultural phenomenon packed with sharp social commentary."
  },
  {
    slug: "everything-everywhere-all-at-once",
    title: "Everything Everywhere All at Once",
    tmdb_id: 545611,
    release_year: 2022,
    rating: "R",
    runtime: "139 min",
    genres: ["Action", "Sci-Fi", "Adventure", "Comedy"],
    synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes.",
    streaming_options: [
      { platform: "Showtime", type: "Subscription", url: "https://www.sho.com" },
      { platform: "Apple TV", type: "Rent / Buy", url: "https://tv.apple.com" }
    ],
    editorial_review: "An wildly imaginative, hilarious, and deeply emotional multiverse adventure that deservedly swept the Oscars."
  },
  {
    slug: "avatar",
    title: "Avatar",
    tmdb_id: 19995,
    release_year: 2009,
    rating: "PG-13",
    runtime: "162 min",
    genres: ["Action", "Adventure", "Sci-Fi", "Fantasy"],
    synopsis: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    streaming_options: [
      { platform: "Disney+", type: "Subscription", url: "https://www.disneyplus.com" }
    ],
    editorial_review: "The groundbreaking sci-fi epic that revolutionized 3D technology and immersed audiences in the vibrant world of Pandora."
  },
  {
    slug: "the-avengers",
    title: "The Avengers",
    tmdb_id: 24428,
    release_year: 2012,
    rating: "PG-13",
    runtime: "143 min",
    genres: ["Action", "Sci-Fi", "Adventure"],
    synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    streaming_options: [
      { platform: "Disney+", type: "Subscription", url: "https://www.disneyplus.com" }
    ],
    editorial_review: "The milestone superhero team-up that changed modern cinema blockbusters forever with perfect chemistry and thrilling action."
  },
  {
    slug: "interstellar-re-release",
    title: "Avengers: Endgame",
    tmdb_id: 299534,
    release_year: 2019,
    rating: "PG-13",
    runtime: "181 min",
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    streaming_options: [
      { platform: "Disney+", type: "Subscription", url: "https://www.disneyplus.com" }
    ],
    editorial_review: "An epic, emotionally satisfying conclusion to a decade-long cinematic journey that delivered unforgettable moments."
  },
  {
    slug: "parasite",
    title: "Parasite",
    tmdb_id: 496243,
    release_year: 2019,
    rating: "R",
    runtime: "132 min",
    genres: ["Comedy", "Thriller", "Drama"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    streaming_options: [
      { platform: "Hulu", type: "Subscription", url: "https://www.hulu.com" }
    ],
    editorial_review: "Bong Joon Ho's razor-sharp social thriller is a masterclass in tension, dark humor, and unpredictable storytelling."
  },
  {
    slug: "knives-out",
    title: "Knives Out",
    tmdb_id: 546554,
    release_year: 2019,
    rating: "PG-13",
    runtime: "130 min",
    genres: ["Comedy", "Crime", "Mystery", "Thriller"],
    synopsis: "A detective investigates the death of a patriarch of an eccentric, combative family, where everyone is a suspect.",
    streaming_options: [
      { platform: "Prime Video", type: "Rent / Buy", url: "https://www.amazon.com" }
    ],
    editorial_review: "A witty, stylish modern whodunnit featuring an all-star ensemble cast and clever narrative twists."
  }
];
