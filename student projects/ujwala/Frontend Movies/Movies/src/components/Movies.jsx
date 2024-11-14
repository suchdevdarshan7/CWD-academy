
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Movies.css'



const Movies = () => {

  const navigate= useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://localhost:3000/Movie');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
            }
        };

        // Call the async function
        fetchMovies();
    }, []);

    return (
        <div className='Movieslist'>
            {movies?.map((el) => (
                <div className='Movie' onClick={()=>navigate(`/Movie/${el.id}`)}>
                    <img src={el.img} alt={el.title} style={{ height: '300px', width: '300px' }} />
                    <h2>{el.title}</h2>
                    <p>{el.rating}</p>
                   </div>
            ))}
        </div>
    );
};

export default Movies;
