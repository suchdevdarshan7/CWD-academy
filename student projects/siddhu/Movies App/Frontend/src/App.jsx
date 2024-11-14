async function fetchMovies(){
  const response = await fetch('http://localhost:3000/movies');
  const data = await response.json();
  console.log(data);
}
fetchMovies();