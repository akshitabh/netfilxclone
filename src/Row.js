import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from './axios';

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const[ movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original";

    useEffect(()=>{
 async function fetchdatas (){
    const request= await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
 }
 fetchdatas();
 },[fetchUrl]);

 console.log(movies)

  return (
    <div className='row'>
    <h3>{title}</h3> 
    <div className='row_posters'>
    {movies.map((movies)=>
    ((isLargeRow && movies.poster_path)||
    (!isLargeRow && movies.backdrop_path ))
    &&((<img className={` row_poster ${isLargeRow && "row_posterLarge"}`} key={movies.id} src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`} alt={movies.name}/>
    )))
    
    } 
    </div>
    </div>
  )
}

export default Row
