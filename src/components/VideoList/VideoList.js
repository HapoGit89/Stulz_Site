import YoutubeFrame from "../YoutubeFrame/YoutubeFrame"
import './VideoList.css'


const VideoList = ({videos}) => {
    console.log(videos)
    return (
        <>
        <div className="videoList">
         {videos.map((el) => <YoutubeFrame id={el} width="560" height="315"></YoutubeFrame>)}
        </div>
        </>
    )
}

export default VideoList