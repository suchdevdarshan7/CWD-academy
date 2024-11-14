import React from "react";
import { Link } from "react-router-dom";

function App(){
    return(
        <div>

            <Link to={'/Movie'}>Movies</Link>
            click to get Movies
        </div>
    )
}
export default App;