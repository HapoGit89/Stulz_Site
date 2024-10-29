import React from "react"
import "./InstaFeed.css"




const InstaFeed = ({ data }) => {
    // array to be used to map divs
    const srcs = []

    // click handler function
    const onClick = (link) => {
        window.open(link)
    }

    // push urls dependend on media type into srcs array
    data.forEach((e) => {
        if (e.media_type !== "VIDEO") {
            srcs.push({ url: e.media_url, link: e.permalink })
        }
        else {
            srcs.push({ url: e.thumbnail_url, link: e.permalink })
        }
    })

    return (
        <div>
            <h1>Impressions</h1>
        <div className="InstaFeed">
            {srcs.slice(0,12).map((el) =>
                <div key={el.url} className="Kachel" onClick={() => onClick(el.link)}><img className="Thumb" key={el.url} src={el.url}></img></div>)}
        </div>
        </div>
    )
}

export default InstaFeed