
const YoutubeFrame = ({id, height, width}) => {
   
    return (
        
        <iframe width={width}
                height={height}
                src={`https://www.youtube.com/embed/${id}`} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
);
    
}

export default YoutubeFrame