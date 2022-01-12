import logo from "./logo.svg";
import ScrollToTop from "./helpers/ScrollToTop";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import UnderConstruction from "./components/UnderConstruction";
import HomePage from "./Pages/HomePage.js";
import ATMF from "./Pages/ATMF";
import SitePage from "./Pages/SitePage";
import PlayATMF from "./Pages/PlayATMF";
import "./App.css";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={HomePage} />
          <Route exact path="/test" element={<ATMF />} />
          <Route exact path="/projects" element ={<NotFound />} />
          <Route exact path="/projects/site" element ={<SitePage />} />
          <Route exact path="/projects/atmf" element={<ATMF />} />
          <Route exact path="/projects/atmf/play" element={<PlayATMF />} />
          <Route exact path="/projects/instaslot" element={<UnderConstruction />} />
          <Route exact path="/projects/instaslot/play" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
