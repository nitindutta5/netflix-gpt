import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies =()=> {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() => {
      try{
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
      const res = await data.json();
      console.log(res,"NOW PLAYING")
      dispatch(addNowPlayingMovies(res.results));
      }
      catch(e){
        console.error(e,"Something went wrong!")
      }
    }
    useEffect(() =>{
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;