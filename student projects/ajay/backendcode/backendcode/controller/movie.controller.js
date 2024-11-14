const movies = require('../data/data.js');

function getAllmovies(req, res, next) {
    res.status(200).json({status:"success" ,movies });
}
function getMovie(req,res,next){
    const {slug}=req.params;
    const id=slug*1;
    const movie=movies.at(id-1);
    res.status(200).json({status:"successfully found",movie});
}
function filterMovies(req, res, next) {
    const heroName = req.query.Hero;
    console.log("Requested Hero:", heroName); // Debug line

    if (!heroName) {
        return res.status(400).json({ status: "error", message: "Hero name is required" });
    }

    const filteredMovies = movies.filter(movie => {
        console.log("Movie Hero:", movie.Hero); // Debug line
        return movie.Hero.toLowerCase().trim() === heroName.toLowerCase().trim();
    });

    if (filteredMovies.length === 0) {
        return res.status(404).json({ status: "not found", message: "No movies found for the specified hero" });
    }

    res.status(200).json({ status: "sorted based on user request", filteredMovies });
}

function addMovies(req,res,next){
    const {name,Hero,Heroine,description,image}=req.body;
    const newMovie={
        id:movies.length+1,
        name,
        Hero,
        Heroine,
        description,
        image
    }
    
    movies.push(newMovie);
    res.status(200).json({status:"successfully added",newMovie});
    
}
function removeMovies(req,res,next){
    const id=parseInt(req.query.id);
    if(id>movies.length|| id<1){
        return res.status(400).json({status:"not possible",message:"ID not found"});
    }
    const deletedmovies=movies.splice(id-1,1);
    res.status(200).json({status:"successfully deleted",deletedmovies});
}

module.exports = { getAllmovies,getMovie,filterMovies,addMovies,removeMovies};
