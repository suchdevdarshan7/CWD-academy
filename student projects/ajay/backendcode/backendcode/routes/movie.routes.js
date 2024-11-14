const express=require('express');
const router=express.Router();
const {getAllmovies, getMovie,filterMovies,addMovies,removeMovies}=require('../controller/movie.controller.js');

router
     .route('/')
     .get(getAllmovies)
router.route('/:slug').get(getMovie); 
router.route('/filter').get(filterMovies);  
router.route('/add').post(addMovies);
router.route('/delete').delete(removeMovies);
 module.exports =router;    