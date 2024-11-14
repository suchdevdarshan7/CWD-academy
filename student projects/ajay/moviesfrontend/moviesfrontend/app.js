const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');
const filterHero = document.getElementById('filterHero');
const addMovieForm = document.getElementById('addMovieForm');

// Fetch and display movies
async function fetchMovies() {
    try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();
        renderMovies(data.movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Render movies to the grid
function renderMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach((movie) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-card');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <p><strong>Hero:</strong> ${movie.Hero}</p>
            <p><strong>Heroine:</strong> ${movie.Heroine}</p>
            <p>${movie.description}</p>
            <button onclick="deleteMovie(${movie.id})">Delete</button>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

// Search Movies
async function searchMovies() {
    const query = searchInput.value;
    const response = await fetch(`http://localhost:3000/movies?search=${query}`);
    const data = await response.json();
    renderMovies(data.movies);
}

// Filter Movies by Hero
async function filterMovies() {
    const heroName = filterHero.value;
    const response = await fetch(`http://localhost:3000/movies/filter?Hero=${heroName}`);
    const data = await response.json();
    renderMovies(data.filteredMovies);
}

// Add Movie
addMovieForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const hero = document.getElementById('hero').value;
    const heroine = document.getElementById('heroine').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    const newMovie = { name, Hero: hero, Heroine: heroine, description, image };
    const response = await fetch('http://localhost:3000/movies/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    });

    const data = await response.json();
    if (data.status === 'successfully added') {
        alert('Movie added successfully!');
        fetchMovies(); // Refresh movie list
    }
});

// Delete Movie
async function deleteMovie(id) {
    const response = await fetch(`http://localhost:3000/movies/delete?id=${id}`, {
        method: 'DELETE',
    });

    const data = await response.json();
    if (data.status === 'successfully deleted') {
        alert('Movie deleted successfully!');
        fetchMovies(); // Refresh movie list
    }
}

// Initial load of movies
fetchMovies();



