import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import './Kontakt.css'



const Kontakt = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("kontakt"))
      }, []);
    return (
       
        <div className="kontakt">
            <div className="blur">
            <div className="contactcontent">
                <StulzCard theme={"dark"} alt={"Recording"} src={"./images/contact_small.JPG"} text={"ContactContactContactContactContactContactContactContactContactContactContactContact"} title={"Contact"}></StulzCard>
            </div>
            </div>
        </div>
     
    )
}

export default Kontakt