import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";


const VideoFil = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("video"))
      }, []);
    return (
        <>
        <div className="Main">
        <h1>This is Video</h1>
        <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
        </>
    )
}

export default VideoFil