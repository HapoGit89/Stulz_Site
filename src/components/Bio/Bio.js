import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import { useContext } from "react";
import LanguageContext from "../../languageContext";
import './Bio.css'
import { Divider, Stack, Typography, Box, Chip, Card } from "@mui/material";

const exampleTexts = {ENG: "Hello, this is my Bio, it will tell you loads of stuff. For example, I am playing guitar live and in the studio and do video and film stuff on the side",
     GER: "Hallo, das ist meine Bio und sie wird dir allerhand über mich verraten. Zum Beispiel bin ich Gitarrist live und im Studio und auch schon seit Jahren als Videograph unterwegs."}


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