const VideoTitle = ({title , overview}) => {
  return (
    <div className="absolute  bg-gradient-to-r h-[50vh] md:h-screen from-black z-10 flex flex-col justify-center">
        <div className="md:7/12 lg:w-5/12 px-10 text-white">
            <h1 className="font-bold md:text-3xl pb-6">{title}</h1>
            <p className="hidden md:block">{overview}</p>
            <div className="md:py-4">
                <button className="bg-white text-black py-3 px-10 text-xs rounded-sm mr-2 mb-3 hover:bg-gray-300 md:text-lg">Play</button>
                <button className="bg-gray-300 bg-opacity-55 text-white py-3 px-7 text-xs rounded-sm md:text-lg">More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle