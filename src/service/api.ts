const basicFecth = async (endpoint) => {
  const req = await fetch(`${process.env.NEXT_PUBLIC_TMDB_API_BASE}${endpoint}`);
  const json = await req.json();

  return json;
}

export default {
  getHomeList: async () => {
      return [
          {
              slug: 'stocks',
              isFavorite: false,
              items: await basicFecth(`/discover/tv?with_networks=213&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
          },
          {
              slug: 'funds',
              isFavorite: false,
              items: await basicFecth(`/discover/tv?with_networks=213&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
          },
          {
              slug: 'pensions',
              isFavorite: false,
              items: await basicFecth(`/discover/tv?with_networks=213&language=${process.env.NEXT_PUBLIC_TMDB_API_LANGUAGE}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
          },
      ]
  },
}