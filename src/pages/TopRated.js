import React,{useState,useEffect} from 'react'
import Card from '../components/Card'
const TopRated = () => {
  const [movie,setMovie] = useState([])


    const fetchData = ()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d851c90c6d62eb4bda3e7e039431ec8b&language=en-US")
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
    <div><h1 style={{textAlign:'center',fontSize:"40px",fontWeight:"bold",color:"white"}}>TopRated</h1></div>
    <div className='movie_list'>
      {movie.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
    </>
    
  )
}

export default TopRated
