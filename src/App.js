import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar'
import VideoFil from './components/VideoFil/VideoFil';
import Bio from './components/Bio/Bio';
import Live from './components/Live/Live';
import Recording from './components/Recording/Recording';
import Kooperationen from './components/Kooperationen/Kooperationen';
import Kontakt from './components/Kontakt/Kontakt';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import LanguageContext from './languageContext';
import { useState, useEffect } from 'react';
import BrandonGrotesque from "./fonts/BrandonGrotesque/Brandon-Grotesque-Web-Regular.woff"


// Global MUI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#8f3422",
      light: "#8f342290"
    },
    secondary: {
      main: "#141414",
      light: "#14141490"
    },
    info: {
      main: "#f9f9f9",
      light: "#f9f9f990"
    }
  },
  typography: {
    fontFamily: 
      'BrandonGrotesque',
      fontSize:16
},
components: {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'BrandonGrotesque';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src:  url(${BrandonGrotesque}) format('woff');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
  },
},
});


function App() {
  const [lang, setLang] = useState("ENG")  // state holds language choice

  useEffect(function getLang() {
    // if language info is in localStorage, get it and update state
    if (localStorage.getItem("lang")) {
      setLang(localStorage.getItem("lang"))
    }
  }, [])

  // language change function gets triggered by LanguageChanger component
  const changeLang = (l) => {
    localStorage.setItem("lang", l)
    setLang(l)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageContext.Provider value={lang}>
          <MyNavBar changeLang={changeLang} ></MyNavBar>
          <Routes>
            <Route exact path="/video" element={<VideoFil></VideoFil>}></Route>
            <Route exact path="/bio" element={<Bio></Bio>}></Route>
            <Route exact path="/" element={<Bio></Bio>}></Route>
            <Route exact path="/about" element={<Bio></Bio>}></Route>
            <Route exact path="/live" element={<Live></Live>}></Route>
            <Route exact path="/recording" element={<Recording></Recording>}></Route>
            <Route exact path="/kooperationen" element={<Kooperationen></Kooperationen>}></Route>
            <Route exact path="/endorsements" element={<Kooperationen></Kooperationen>}></Route>
            <Route exact path="/kontakt" element={<Kontakt></Kontakt>}></Route>
            <Route exact path="/contact" element={<Kontakt></Kontakt>}></Route>
          </Routes>
        </LanguageContext.Provider>
      </ThemeProvider>
    </div>
  );
}


export default App;
