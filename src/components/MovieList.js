import React, { useEffect, useState } from 'react'
import Card from './Card'
import './MovieList.css'

const MovieList = () => {

    const [movie,setMovie] = useState([])


    const fetchData = ()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=d851c90c6d62eb4bda3e7e039431ec8b&language=en-US")
        .then(res=>{
            return res.json()
        })
        .then (data=>{
            setMovie(data.results)
            console.log(data);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
        <div className='movie_list'>
      {movie.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
    </>
    
  )
}

export default MovieList
