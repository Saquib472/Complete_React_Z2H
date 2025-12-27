const VideoTitle = ({title , overview}) => {
  return (
    <div className="aspect-video absolute bg-gradient-to-r from-black z-10 flex flex-col justify-center">
        <div className="w-5/12 px-10 text-white">
            <h1 className="font-bold text-3xl pb-6">{title}</h1>
            <p>{overview}</p>
            <div className="py-4">
                <button className="bg-white text-black py-3 px-10 text-lg rounded-sm mr-2 mb-3 hover:bg-gray-300">Play</button>
                <button className="bg-gray-300 bg-opacity-55 text-white py-3 px-7 text-lg rounded-sm">More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle