import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './VideoFil.css'


const VideoFil = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("video"))
      }, []);
    return (
        <>
        <div className="video">
        </div>
        </>
    )
}

export default VideoFil