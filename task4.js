const getPokemons = async () => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const data = await fetch(BASE_URL).then((response) => {
    return response.json();
  });
  const promises = data.results.map(({ url }) => {
    return fetch(url).then((response) => {
      return response.json();
    });
  });
  const pokemons = await Promise.all(promises);

  const stats = pokemons.map(({ stats, ...otherFields }) => {
    const newStats = stats.reduce((acc, { base_stat, stat }) => {
      acc[stat.name] = base_stat;
      return acc;
    }, {});
    return { newStats, ...otherFields };
  });
  return stats;
};
