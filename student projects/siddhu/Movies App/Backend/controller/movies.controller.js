const movies = require('../db/movies');

function getAllMovies(req,res){
    res.status(200).json({movies})
}
function getMovies(req,res){
    const {slug} = req.params;
    const id = slug*1;
    const movie = movies[id-1];

    res.json(movie)
}
module.exports = {getAllMovies,getMovies};