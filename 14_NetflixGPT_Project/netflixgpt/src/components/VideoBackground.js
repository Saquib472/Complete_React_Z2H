import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  if (!trailer) return;
  const trailerId = trailer.key;

  return (
    <div className="overflow-hidden w-max-[100%]">
      <div className="relative pb-[56.25%] w-[300%] left-[-100%]">
        <iframe
          className="absolute top-0 left-0 w-[100%] h-[100%]"
          src={
            "https://www.youtube.com/embed/" +
            trailerId +
            "?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=" +
            trailerId
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
