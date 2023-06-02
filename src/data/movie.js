const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 60
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Kill Bill',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
    {
      id: '11',
      title: 'Fast & Furious',
      category: 'Action',
      likes: 220,
      dislikes: 120
    },
    {
      id: '12',
      title: 'The Mummy',
      category: 'Thriller',
      likes: 400,
      dislikes: 2200
    },
    {
      id: '13',
      title: 'Interstellar',
      category: 'Science fiction',
      likes: 2000,
      dislikes: 1100
    },
    {
      id: '14',
      title: 'Panic Room',
      category: 'Thriller',
      likes: 2500,
      dislikes: 1200
    },
    {
      id: '15',
      title: 'The Godfather',
      category: 'Drame',
      likes: 220,
      dislikes: 1120
    },
    {
      id: '16',
      title: 'Ninja Turtles',
      category: 'Action',
      likes: 200,
      dislikes: 900
    },
    {
      id: '17',
      title: 'Titanic',
      category: 'Drame',
      likes: 5003,
      dislikes: 450
    },
    {
      id: '18',
      title: 'Avatar',
      category: 'Science fiction',
      likes: 250,
      dislikes: 800
    },
    {
      id: '19',
      title: 'The Hangover',
      category: 'Comedy',
      likes: 2200,
      dislikes: 1200
    },
    {
      id: '20',
      title: 'Spiderman',
      category: 'Animation',
      likes: 602,
      dislikes: 472
    },
  ]
  
  export const moviesData = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))