const movies = require('../db/movies.js')

function getMovies(req, res) {
    res.send(movies);
}

function getMovieById(req, res) {
    const id = req.params.slug * 1;
    if (id > movies.length) {
        return res.status(404).json({ status: 'failed', message: 'NO id exists' })
    }
    const movie = movies[id - 1];
    console.log(id, movie)
    res.send(movie)
}

function AddMovies(req, res) {
    const userResponse = req.body;

    const checkForMovie = Object.hasOwn(userResponse, 'movie');

    console.log(req.body)

    const newMovie = { ...userResponse, id: movies.length + 1 };
    if (!checkForMovie) {
        return res.status(500).json({ status: 'failed', message: 'Movie name is required' })
    }

    movies.push(newMovie)
    return res.status(201).json({ status: 'success', message: 'Movie Added Successfully!', data: newMovie })
}

function UpdateMovie() {
    //&  Code should be written by students
}


function DeleteMovie(req, res) {

    const id = req.params.slug * 1;

    if (id > movies.length) {
        return res.status(404).json({ status: 'failed', message: 'No id exists' })
    }

    movies.splice(id - 1, id);
    return res.status(204).json({ status: 'success', message: 'movie deleted Succesfully' })

}




module.exports = { getMovies, getMovieById, AddMovies, DeleteMovie };
