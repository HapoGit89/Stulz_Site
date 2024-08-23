import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './Kooperationen.css'



const Kooperationen = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("kooperationen"))
      }, []);
    return (
       
        <div className="kooperationen">
        </div>
     
    )
}

export default Kooperationen