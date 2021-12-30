import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import UnderConstruction from "./components/UnderConstruction";
import Home from "./Pages/Home.js";
import ATMF from "./Pages/ATMF";
import SitePage from "./Pages/SitePage";
import PlayATMF from "./Pages/PlayATMF";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/test" element={<ATMF />} />
          <Route exact path="/projects/site" element ={<SitePage />} />
          <Route exact path="/projects/atmf" element={<ATMF />} />
          <Route exact path="/projects/atmf/play" element={<PlayATMF />} />
          <Route exact path="/projects/instaslot" element={<UnderConstruction />} />
          <Route exact path="/projects/instaslot/play" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
