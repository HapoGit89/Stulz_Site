import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import './Bio.css'
import { Divider, Stack, Typography, Box, Chip, Card } from "@mui/material";




const Bio = () => {
    const dispatch = useDispatch()
    // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("bio"))
    }, []);
    return (
        <div className="bio">
            <div className="blur">
                <div className="bioContent">
                    <StulzCard theme={"dark"} title={"Bio"} src={"./images/bio_small.jpg"} text={"Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio"} alt={"Bio"}></StulzCard>
                </div>
               
            </div>
        </div>
    )
}

export default Bio