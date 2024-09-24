import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import './Bio.css'
import { Divider, Stack, Typography, Box, Chip, Card } from "@mui/material";
import { exampleTexts } from "../../placeholder";




const Bio = () => {
    const language = useContext(LanguageContext)
    const dispatch = useDispatch()
    // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("bio"))
    }, []);
    return (
        <div className="bio">
            <div className="blur">
                <div className="bioContent">
                    <StulzCard theme={"dark"} title={"Bio"} src={"./images/bio_small.jpg"} text={exampleTexts[language]} alt={"Bio"}></StulzCard>
                </div>
               
            </div>
        </div>
    )
}

export default Bio