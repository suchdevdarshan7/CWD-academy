const express = require('express')
const router = express.Router();
const movie = require('../db/movies.js')
const { getMovies, getMovieById, AddMovies, DeleteMovie } = require('../controllers/movie.controller.js')

router
    .route('/')
    .get(getMovies)
    .post(AddMovies)

router
    .route('/:slug')
    .get(getMovieById)
    .delete(DeleteMovie)

module.exports = router;