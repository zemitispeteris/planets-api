let planetsData = require('./planets');

const getPlanet = (name) =>
  planetsData.find(
    (planet) => planet.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  );

const getPlanets = () => {
  return planetsData;
};

module.exports = {
  getPlanets,
  getPlanet,
};
