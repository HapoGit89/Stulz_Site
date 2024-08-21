import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar/MyNavBar'
import VideoFil from './components/VideoFil/VideoFil';
import Bio from './components/Bio/Bio';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyNavBar></MyNavBar>
      <Routes>
      <Route exact path="/video" element={<VideoFil></VideoFil>}></Route>+
      <Route exact path="/bio" element={<Bio></Bio>}></Route>
      </Routes>
    </div>
  );
}


export default App;
