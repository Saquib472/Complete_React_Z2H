import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeMenu } from "../utils/store/appSlice";
import { comments } from "../utils/mockComments";
import CommentList from "./CommentList";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col col-span-8">
      <div>
        <iframe
          className="h-[500px] w-full rounded-xl"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1&color=white&modestbranding=1&rel=0&enablejsapi=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-2xl">Comments:</h1>
        <CommentList comments={comments}/>
      </div>
    </div>
  );
};

export default WatchPage;
