
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import './Movie.css'
import useFetch from '../hook/useFetch';


const Movie = () => {
    const {slug} =useParams();

    const {data:Movies} = useFetch(`http://localhost:5000/product/${slug}`);
  return (
    <div className='SepMovie'>
      <Link to="/Movies">Movies</Link>
       <h1>{Movies?.title}</h1>
       <h2>{Movies?.releasedata}</h2>
       <h2>{Movies?.rating}</h2>
       <img src={Movies?.img} alt="movie" />
       <h3>{Movies?.language}</h3>
       <li>{Movies?.actors}</li>
    </div>
  )
}

export default Movie
