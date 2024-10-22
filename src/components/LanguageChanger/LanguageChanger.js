import { Button } from "reactstrap"
import "./LanguageChanger.css"
import { useContext } from "react"
import LanguageContext from "../../languageContext"
import { useSelector } from "react-redux"


const LanguageChanger = ({changeLang, page}) => {
    const lang = useContext(LanguageContext)
     
    
    // function used in onClick triggering the changeLang func in App.js
    const setL = (lang)=> {
        changeLang(lang)
        }


    if (lang == "ENG"){
        return (
            
            <div className="LanguageChanger">
                <Button className onClick={()=>setL("GER")}>
                    🇩🇪
                </Button>
                <Button className="act" onClick={()=>setL("ENG")}>
                   🇬🇧
                </Button>
            </div>
        )
    }
    else {
        return (
            <div className="LanguageChanger">
                <Button className="act" onClick={()=>setL("GER")}>
                    🇩🇪
                </Button>
                <Button onClick={()=>setL("ENG")}>
                   🇬🇧
                </Button>
            </div>
        )
    }
}

export default LanguageChanger