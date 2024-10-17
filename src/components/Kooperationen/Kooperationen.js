import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import CompanyList from "../CompanyList/CompanyList";
import './Kooperationen.css'

// hard coded company List for now

const companies = [{text: "Very Good company, I like I like!", src: "./images/Neural.png", title: "Neural"},
                    {text: "Very Good company, I like I like!", src: "./images/Mayones.png", title: "Mayones"},
                    {text: "Very Good company, I like I like!", src: "./images/rockboard.png", title: "Rockboard"},
                    {text: "Very Good company, I like I like!", src: "./images/Daddario.jpg", title: "Daddario"},
                    {text: "Very Good company, I like I like!", src: "./images/Daddario.jpg", title: "Daddario"},
                    {text: "Very Good company, I like I like!", src: "./images/Daddario.jpg", title: "Daddario"}]

const Kooperationen = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("kooperationen"))
      }, []);
    return (
       
        <div className="kooperationen">
        <div className="blur">
        <div className="kooperationencontent">
          <CompanyList companies={companies}></CompanyList>
        </div>
        </div>
    </div>
    )
}

export default Kooperationen