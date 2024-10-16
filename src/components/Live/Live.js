import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import ConcertList from "../ConcertList/ConcertList";
import './Live.css'


// hard coded data for Concertlist component
function createData(date, location, artist) {
    return { date, location, artist };
}

const rows = [
    createData('08.12.2024', "Krugahalle", "Bülent"),
    createData('09.12.2024', "Jahrhunderthalle", "Bülent"),
    createData('10.12.2024', "Jahrhunderthalle", "Bülent"),
    createData('11.12.2024', "Westfalenhalle", "Bülent"),
];


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
                    <ConcertList rows={rows}></ConcertList>
                </div>

            </div>
        </div>
    )
}

export default Live