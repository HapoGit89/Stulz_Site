import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './Live.css'



const Live = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("live"))
      }, []);
    return (
       
        <div className="live">
        </div>
     
    )
}

export default Live