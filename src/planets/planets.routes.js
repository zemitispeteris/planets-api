const router = require('express').Router();
const { getPlanets, getPlanet } = require('./planets.controller');

router.get('/', getPlanets);

router.get('/:name', getPlanet);

module.exports = router;
