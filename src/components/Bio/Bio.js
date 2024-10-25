import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import './Bio.css'
import { exampleTexts } from "../../placeholder";






const Bio = () => {
    const language = useContext(LanguageContext)
            //conditional title for card
     const title = language == "GER" ? "Bio" : "About"
    const dispatch = useDispatch()
    // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("bio"))
    }, []);
    return (
        <div className="bio">
            <div className="blur">
                <div className="bioContent">
                    <StulzCard theme={"dark"} title={title} src={"./images/bio_small.jpg"} text={exampleTexts[language]} alt={"Bio"}></StulzCard>

                    <div class="elfsight-app-46d1ba37-b9c6-4292-8004-642f1bd8687c" data-elfsight-app-lazy>
                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio