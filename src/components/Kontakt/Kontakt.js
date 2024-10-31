import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import { exampleTexts } from "../../placeholder";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import './Kontakt.css'
import kontakt from "../../images/contact_small.JPG"



const Kontakt = () => {
    const dispatch = useDispatch()
    const language = useContext(LanguageContext)
        //conditional title for card
     const title = language == "GER" ? "Kontakt" : "Contact"
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("kontakt"))
      }, []);
    return (
       
        <div className="kontakt">
            <div className="blur">
            <div className="kontaktcontent">
                <StulzCard theme={"dark"} alt={"Contact"} src={kontakt} text={exampleTexts[language]} title={title}></StulzCard>
            </div>
            </div>
        </div>
     
    )
}

export default Kontakt