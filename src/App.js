import { Home } from "./views/Home";
import "./App.css";
import { Maintemplate } from "./components/templates/Maintemplate";
import { Portfolio } from "./views/Portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aboutme } from "./views/Aboutme";
import { Cv } from "./views/Cv";
import { Contactme } from "./views/Contactme";
import { Cardportfolio } from "./views/Cardportfolio";
// import { Devviews } from "./views/Devviews";
// import { Devmolecules } from "./views/Devmolecules";
function App() {
  return (
    <div className="App">
      <Router>
        <Maintemplate
          content={
            <Routes>
              {/* <Route path="/devatoms" element={<Devviews />} />
              <Route path="/devmolecules" element={<Devmolecules />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/cv" element={<Cv />} />
              <Route path="/contactme" element={<Contactme />} />
              <Route path="/cardportfolio" element={<Cardportfolio/>} />
            </Routes>
          }
        ></Maintemplate>
      </Router>
    </div>
  );
}

export default App;
