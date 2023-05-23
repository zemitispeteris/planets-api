const express = require('express');
const router = express.Router();

const planetsRoutes = require('./planets/planets.routes');

router.use('/planets', planetsRoutes);

module.exports = router;
