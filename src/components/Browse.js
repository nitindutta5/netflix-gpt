import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

function Browse() {
  useNowPlayingMovies();

  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
  return <div><Header/>
  <MainContainer/>
  </div>;
}

export default Browse;
