import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  return (
    <div className={showSideBar ? "col-span-10 fixed -z-10 lg:z-0 lg:static" : "col-span-12"}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
