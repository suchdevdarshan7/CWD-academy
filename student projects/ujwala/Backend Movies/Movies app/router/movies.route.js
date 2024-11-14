const express = require('express');

const router = express.Router();

const {getMovies,getMoviebyId} = require("../controller/movies.controller.js");

router.route('/').get(getMovies)

router.route('/:slug').get(getMoviebyId)

module.exports = router