import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './Kontakt.css'



const Kontakt = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("kontakt"))
      }, []);
    return (
       
        <div className="kontakt">
        </div>
     
    )
}

export default Kontakt