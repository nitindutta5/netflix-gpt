import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  const {original_title, overview} = mainMovie
  return (
    <>
      <VideoBackground />
      <VideoTitle title={original_title} overview={overview}/>
    </>
  );
}

export default MainContainer;
