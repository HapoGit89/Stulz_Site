import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import LanguageContext from "../../languageContext";
import { exampleTexts } from "../../placeholder";
import { useContext } from "react";
import './VideoFil.css'
import video from "../../images/video_small.JPG"


const VideoFil = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
        const language = useContext(LanguageContext)
        const title = language == "GER" ? "Video und Film" : "Video and Film"
    useEffect(() => {
        dispatch(changePage("video"))
      }, []);
    return (
        <>
        <div className="video">
            <div className="blur">
                <div className="videocontent">
                    <StulzCard theme={"light"} alt={"Video"} title={title} text={exampleTexts[language]} src={video}></StulzCard>

                </div>
            </div>
        </div>
        </>
    )
}

export default VideoFil