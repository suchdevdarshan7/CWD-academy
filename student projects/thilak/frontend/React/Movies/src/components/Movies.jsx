import React from 'react'

import "./Movies.css"
import { useNavigate } from 'react-router';
import useFetch from '../hook/useFetch';

const Movies = () => {
  
    const navigate = useNavigate();

   const {data} = useFetch('http://localhost:5000/product');
    return(
      <div className="container">
       
        {data?.map((el) => (
         <div className="Moviediv" onClick={()=>navigate(`/Movies/${el.id}`)}>
           <img src={el.img} alt="Movie poster" ></img>
           <h4>Name:{el.title}</h4>
           <li>Rating:{el.rating}</li>
           <h4>Language:{el.language}</h4>
           
           {/* <button onClick={<Clicked/>} >MoreDetails</button> */}
          
           </div>
         ))}
      </div> 
   );
  }
 


  
      

export default Movies;
