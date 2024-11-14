const express = require('express');
const router = express.Router();
const {getAllMovies,getMovies} = require('../controller/movies.controller');
router.route('/')
    .get(getAllMovies)

router.route('/:slug')
    .get(getMovies)

module.exports = router;