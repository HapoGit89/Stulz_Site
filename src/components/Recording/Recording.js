import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './Recording.css'



const Recording = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("recording"))
      }, []);
    return (
       
        <div className="recording">
        </div>
     
    )
}

export default Recording