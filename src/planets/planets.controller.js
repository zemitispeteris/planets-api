const PlanetsService = require('./planets.service');

const getPlanets = (req, res) => {
  const data = PlanetsService.getPlanets();
  return res.json(data);
};

const getPlanet = (req, res) => {
  const { name } = req.params;
  const data = PlanetsService.getPlanet(name);
  return res.json(data);
};

module.exports = {
  getPlanets,
  getPlanet,
};
