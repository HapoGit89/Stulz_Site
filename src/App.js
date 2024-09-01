import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar'
import VideoFil from './components/VideoFil/VideoFil';
import Bio from './components/Bio/Bio';
import Live from './components/Live/Live';
import Recording from './components/Recording/Recording';
import Kooperationen from './components/Kooperationen/Kooperationen';
import Kontakt from './components/Kontakt/Kontakt';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import LanguageContext from './languageContext';
import { useState, useEffect } from 'react';

function App() {
  const [lang, setLang] = useState("ENG")  // state holds language choice

  useEffect(function getLang(){
    // if language info is in localStorage, get it and update state
        if (localStorage.getItem("lang")){
            setLang(localStorage.getItem("lang"))
        }
  },[])

    // language change function gets triggered by LanguageChanger component
    const changeLang = (l) => {
      localStorage.setItem("lang", l)
       setLang(l)
     }
  return (
    <div className="App">
      <CssBaseline/>
      <LanguageContext.Provider value={lang}>
      <MyNavBar changeLang = {changeLang} ></MyNavBar>
      <Routes>
      <Route exact path="/video" element={<VideoFil></VideoFil>}></Route>+
      <Route exact path="/bio" element={<Bio></Bio>}></Route>
      <Route exact path="/live" element={<Live></Live>}></Route>
      <Route exact path="/recording" element={<Recording></Recording>}></Route>
      <Route exact path="/kooperationen" element={<Kooperationen></Kooperationen>}></Route>
      <Route exact path="/kontakt" element={<Kontakt></Kontakt>}></Route>
      </Routes>
      </LanguageContext.Provider>
    </div>
  );
}


export default App;
