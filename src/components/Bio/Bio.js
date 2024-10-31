import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import StulzCard from "../StulzCard/StulzCard";
import { useContext, useState } from "react";
import LanguageContext from "../../languageContext";
import './Bio.css'
import InstaFeed from "../InstaFeed/InstaFeed";
import { exampleTexts } from "../../placeholder";
import { InstaApi } from "../../api";
import bio_small from "../../images/bio_small.jpg"


// get API Key from ENV
const API_KEY = process.env.REACT_APP_API_KEY



const Bio = () => {
    // state for holding data from Insta Api
    const [posts, setPosts] = useState([])

    const language = useContext(LanguageContext)
            //conditional title for card
     const title = language == "GER" ? "Bio" : "About"
    const dispatch = useDispatch()
    // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("bio"))
        const getInsta = async () => {
            const response = await InstaApi.GetPosts()
            // format media and thumbnail links to be signed
            if(response.data){const data = response.data.map((e)=>e.media_url.replace("\\",''))
            data.forEach((e)=>{if(e.media_type == "VIDEO"){e.thumbnail_url.replace("\\", '')}})
            // setState
            console.log(response.data)
            setPosts(response.data)}
        }
        getInsta()
    }, []);
    return (
        <div className="bio">
            <div className="blur">
                <div className="bioContent">
                    <div className="bioCard">
                    <StulzCard theme={"dark"} title={title} src={bio_small} text={exampleTexts[language]} alt={"Bio"}></StulzCard>
                    </div>
                    <div className="bioFeed">
                        <InstaFeed data={posts}></InstaFeed>
                    </div>
                    </div>
                </div>
            </div>
    
    )
}

export default Bio