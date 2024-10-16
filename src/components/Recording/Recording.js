import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import { useContext } from "react";
import { exampleTexts } from "../../placeholder";
import StulzCard from "../StulzCard/StulzCard";
import './Recording.css'
import LanguageContext from "../../languageContext";




const Recording = () => {
    const dispatch = useDispatch()
    const language = useContext(LanguageContext)
        // change Redux store after component renders for navbar conditional rendering
                //conditional title for card
     const title = language == "GER" ? "Recording" : "Recording"
    useEffect(() => {
        dispatch(changePage("recording"))
      }, []);
    return (
       
        <div className="recording">
            <div className="blur">
                <div className="recordingcontent">
                <StulzCard theme={"dark"} alt={"Recording"} title={title} src={"./images/recording_small.jpg"} text={exampleTexts[language]}></StulzCard>
                </div>
            </div>
        </div>
     
    )
}

export default Recording