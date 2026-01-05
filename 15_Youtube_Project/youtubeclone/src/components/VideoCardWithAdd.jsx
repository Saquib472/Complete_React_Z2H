export const VideoCardWithAdd = (VideoCard)=>{
    const VideoCardEX = VideoCard
  return (props) => {
    return (
    <div>
      <VideoCardEX {...props} />
      <p className="px-2 font-bold">Sponsered.</p>
    </div>
    )
  }
}