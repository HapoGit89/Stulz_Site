import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import VideoList from "../VideoList/VideoList";
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
                    <div className="bioCard">
                        <div className="text">
                            <h1>Welcome!</h1>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="imageBox">
                            <img className="cardImage" src='/images/bio_card.jpg'></img>
                        </div>
                    </div>
                    <div className="imageCard">
                        <div className="imageBox">
                        <img className="boxImage" src='/images/bio_small.jpg' alt="Tobi Stulz live on stage"></img>
                        </div>
                        <div className="imageBox">
                            <img className= "boxImage" src='/images/bio_small_2.jpg' alt="Live concert stage view with Tobi Stulz"></img>
                        </div>
                
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Bio