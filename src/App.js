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

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <MyNavBar></MyNavBar>
      <Routes>
      <Route exact path="/video" element={<VideoFil></VideoFil>}></Route>+
      <Route exact path="/bio" element={<Bio></Bio>}></Route>
      <Route exact path="/live" element={<Live></Live>}></Route>
      <Route exact path="/recording" element={<Recording></Recording>}></Route>
      <Route exact path="/kooperationen" element={<Kooperationen></Kooperationen>}></Route>
      <Route exact path="/kontakt" element={<Kontakt></Kontakt>}></Route>
      </Routes>
    </div>
  );
}


export default App;
