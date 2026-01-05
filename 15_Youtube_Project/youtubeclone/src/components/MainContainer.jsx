import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  return (
    <div className={showSideBar ? "col-span-10" : "col-span-12"}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
