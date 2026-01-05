const VideoCard = ({info}) => {
  const {snippet , statistics} = info
  return (
    <div>
      <img className="rounded-lg w-full" src={snippet.thumbnails?.medium?.url} alt="thumbnail" />
      <ul className="px-2 pt-2 pb-0">
        <li className="font-bold pb-1">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard