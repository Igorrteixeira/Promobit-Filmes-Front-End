import axios from "axios"
import { useEffect, useState } from "react"

export const GetMovies = (url) =>{
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        axios.get(url)
        .then((res) =>setMovie(res.data.results))
        .catch((error)=>console.log(error.response))
    },[url])
    return movie
}