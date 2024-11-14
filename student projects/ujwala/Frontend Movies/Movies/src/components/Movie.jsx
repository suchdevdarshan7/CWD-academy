
import { useParams } from "react-router";
import React,{useState,useEffect} from "react";
const Movie = ()=>{
    const {slug} =useParams();
    const [movie,setMovie]=useState([]);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchMovie = async () => {
            try {
                const resp = await fetch(`http://localhost:3000/Movie/${slug}`);
                const inf = await resp.json();
                setMovie(movie=>inf);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
            }
        };

        // Call the async function
        fetchMovie();
    }, []);
    return(
        <div>
           
            <h1>{movie.title}</h1>
            <img src={movie.img} alt={movie.title} style={{height:'300px',width:'300px'}}/>
            <h2>{movie.rating}</h2>
            <h2>{movie.releseDate}</h2>
            <h3>{movie.actors}</h3>
            <h3>{movie.languages}</h3>
        </div>
    )



}
export default Movie;