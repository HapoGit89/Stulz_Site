import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import ConcertList from "../ConcertList/ConcertList";
import './Live.css'



const Live = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("live"))
      }, []);
    return (
       
    
        <div className="live">
        <div className="blur">
            <div className="livecontent">
                <div className="title">Live</div>

          <ConcertList></ConcertList>
            </div>
           
        </div>
    </div>
    )
}

export default Live