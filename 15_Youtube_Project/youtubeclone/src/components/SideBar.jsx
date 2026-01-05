import { useSelector } from "react-redux";

const SideBar = () => {
  const showSideBar = useSelector((store) => store.app?.showSideBar);
  if (!showSideBar) return null;
  return (
    <div className="col-span-2 mr-6 max-h-[600px] overflow-y-scroll sticky top-24 left-0">
      <div className="border-b border-gray-300 pb-2">
        <h1 className="p-2 rounded-lg font-bold bg-gray-200">Home</h1>
        <h1 className="p-2">Shorts</h1>
      </div>
      <div className="border-b border-gray-300 py-2">
        <h1 className="font-bold p-2">Subscriptions 🙌</h1>
        <ul className="px-2">
          <li className="py-1">Emiway Bantai</li>
          <li className="py-1">Talwinder</li>
          <li className="py-1">Namaste React</li>
          <li className="py-1">Namaste JS</li>
          <li className="py-1">Akshay Saini</li>
          <li className="py-1">Anurag Singh Procddr</li>
          <li className="py-1">The Deshbakth</li>
        </ul>
      </div>
      <div className="border-b border-gray-300 py-2">
        <h1 className="font-bold p-2">You 😁</h1>
        <ul className="px-2">
          <li className="py-1">History</li>
          <li className="py-1">Playlists</li>
          <li className="py-1">Watch later</li>
          <li className="py-1">Liked Videos</li>
          <li className="py-1">Your Videos</li>
          <li className="py-1">Downloads</li>
        </ul>
      </div>
      <div className="py-2">
        <h1 className="font-bold p-2">Explore 😉</h1>
        <ul className="px-2">
          <li className="py-1">Shopping</li>
          <li className="py-1">Movies</li>
          <li className="py-1">Music</li>
          <li className="py-1">Live</li>
          <li className="py-1">Gaming</li>
          <li className="py-1">Sports</li>
          <li className="py-1">News</li>
          <li className="py-1">Courses</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
