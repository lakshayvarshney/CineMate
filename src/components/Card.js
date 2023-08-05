import React, { useEffect, useState } from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({movie}) => {

    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/movie/${movie.id}`)
    }

    
  return (
    <>
        {
            
            <div className='cards' onClick={handleClick}>
                <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
                <div className='cards_overlay'>
                    <div className='card_title'>{movie?.original_title}</div>
                    <div className='card_runtime'>{movie?.release_date}
                    <span className='card_rating'>{movie?.vote_average}</span></div>
                    <div className='card_description'>{movie?.overview.slice(0,118)+"..."}</div>
                </div>
            </div>
        }
    </>
  )
}

export default Card
