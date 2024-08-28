import { Button } from "reactstrap"
import "./LanguageChanger.css"
import { useContext } from "react"
import LanguageContext from "../../context/languageContext"


const LanguageChanger = ({changeLang}) => {
    const lang = useContext(LanguageContext)
    
    // function used in onClick triggering the changeLang func in App.js
    const setL = (lang)=> {
        changeLang(lang)
        }


    if (lang == "ENG"){
        console.log("changed")
        return (
            
            <div className="LanguageChanger">
                <Button onClick={()=>setL("GER")}>
                    GER
                </Button>
                <Button className="act" onClick={()=>setL("ENG")}>
                   ENG
                </Button>
            </div>
        )
    }
    else {
        return (
            <div className="LanguageChanger">
                <Button className="act" onClick={()=>setL("GER")}>
                    GER
                </Button>
                <Button onClick={()=>setL("ENG")}>
                   ENG
                </Button>
            </div>
        )
    }
}

export default LanguageChanger