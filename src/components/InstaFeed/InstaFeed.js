
import { InstagramEmbed } from "react-social-media-embed"
import "./InstaFeed.css"






const InstaFeed =  ({url}) => {
  // Reusable Insta Feed Display for given Insta URL
   
   
    return (
     <div className="InstaFeed">
        <InstagramEmbed url={url} width="800"></InstagramEmbed>
     </div>
    )


  }


export default InstaFeed