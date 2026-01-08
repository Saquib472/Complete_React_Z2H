import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  if (!trailer) return;
  const trailerId = trailer.key;

  return (
    <div className="relative w-full overflow-hidden h-[50vh] md:h-screen">
  <iframe
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] md:w-[200%] lg:w-full aspect-video"
    src={
      "https://www.youtube.com/embed/" +
      trailerId +
      "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&playlist=" +
      trailerId
    }
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
  
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>
  );
};

export default VideoBackground;
