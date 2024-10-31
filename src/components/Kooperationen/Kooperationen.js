import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import CompanyList from "../CompanyList/CompanyList";
import './Kooperationen.css'
import neural from "../../images/Neural_Transparent.svg"

// hard coded company List for now

const companies = [{text: "Very Good company, I like I like!", src: neural, title: "Neural", url:"https://neuraldsp.com/"},
                    {text: "Very Good company, I like I like!", src: neural, title: "Mayones", url:"https://mayones.com/"},
                    {text: "Very Good company, I like I like!", src: neural, title: "Rockboard", url:"https://www.rockboard.de/de/"},
                    {text: "Very Good company, I like I like!", src: neural, title: "Daddario", url:"https://www.daddario.com/"},
                    {text: "Very Good company, I like I like!", src: neural, title: "Daddario", url:"https://www.daddario.com/"},
                    {text: "Very Good company, I like I like!", src: neural, title: "Daddario", url:"https://www.daddario.com/"}]

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