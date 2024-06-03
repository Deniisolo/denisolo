import { Home } from "./views/Home";
import "./App.css";
import { Maintemplate } from "./components/templates/Maintemplate";
import { Portfolio } from "./views/Portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            </Routes>
          }
        ></Maintemplate>
      </Router>
    </div>
  );
}

export default App;
