const Movies = require("../data/Movies.js");

const express = require('express');

function getMovies(req,res,next){
    res.send(Movies);
    
}

function getMoviebyId(req,res,next){
    const {slug} = req.params;

    const id = slug*1;

    if(id>Movies.length){
        res.status(400).json({status:"item not found",message:"I searching element is not existing"});
    }

    const Movie = Movies.at(id-1);

    res.send(Movie);
}

module.exports = {getMovies,getMoviebyId}