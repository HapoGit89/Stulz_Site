import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import './VideoFil.css'


const VideoFil = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("video"))
      }, []);
    return (
        <>
        <div className="video">
            <div className="blur">
                <div className="videocontent">
                    <StulzCard theme={"light"} alt={"Video"} title={"Video"} text={"Video Video Video VideoVideoVideoVideoVideoVideoVideoVideoVideo"} src={"./images/video_small.jpg"}></StulzCard>

                </div>
            </div>
        </div>
        </>
    )
}

export default VideoFil