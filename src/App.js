import { Home } from "./views/Home";
import "./App.css";
import { Maintemplate } from "./components/templates/Maintemplate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Devviews } from "./views/Devviews";
// import { Devmolecules } from "./views/Devmolecules";
function App() {
  return (
    <div className="App">
     <Maintemplate
        content={
          <Router>
            <Routes>
              {/* <Route path="/devatoms" element={<Devviews />} />
              <Route path="/devmolecules" element={<Devmolecules />} /> */}
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        }
      ></Maintemplate>
    </div>
  );
}

export default App;
