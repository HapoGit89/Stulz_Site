import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import './Recording.css'




const Recording = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("recording"))
      }, []);
    return (
       
        <div className="recording">
            <div className="blur">
                <div className="recordingcontent">
                <StulzCard theme={"dark"} alt={"Recording"} title={"Recording"} src={"./images/recording_small.jpg"} text={"Recording Recording Recording Recording Recording Recording Recording Recording"}></StulzCard>
                </div>
            </div>
        </div>
     
    )
}

export default Recording