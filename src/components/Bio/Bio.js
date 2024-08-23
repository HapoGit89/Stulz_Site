import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './Bio.css'



const Bio = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("bio"))
      }, []);
    return (
       
        <div className="bio">
        </div>
     
    )
}

export default Bio