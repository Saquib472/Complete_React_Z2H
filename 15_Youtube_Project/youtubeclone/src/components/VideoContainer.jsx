import { useEffect, useEffectEvent, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";
import { VideoCardWithAdd } from "./VideoCardWithAdd";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const PromotedVideoCard = VideoCardWithAdd(VideoCard)
  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  const newWay = useEffectEvent(() => {
    getYoutubeVideos();
  });
  useEffect(() => {
    newWay();
  }, []);
  return !videos ? null : (
    <div className="mt-10 flex flex-wrap gap-4">
      {videos.map((video,index) => (
        <Link
          key={video.id}
          className="rounded-lg basis-72 grow shadow-sm cursor-pointer transition-all hover:bg-gray-50 hover:scale-105"
          to={`/watch?v=${video.id}`}
        >
          {index == 0 ? <PromotedVideoCard info={video} /> : <VideoCard info={video} />}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
