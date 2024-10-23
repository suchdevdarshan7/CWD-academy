const express = require('express')
const router = express.Router();
const movie = require('../db/movies.js')
const { getMovies, getMovieById, AddMovies } = require('../controllers/movie.controller.js')

router
    .route('/')
    .get(getMovies)
    .post(AddMovies)

router
    .route('/:slug')
    .get(getMovieById)

module.exports = router;