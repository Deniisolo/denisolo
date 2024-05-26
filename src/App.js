import { Devviews } from "./views/Devviews";
import { Devmolecules } from "./views/Devmolecules";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/devatoms" element={<Devviews/>} />
        <Route path="/devmolecules" element={<Devmolecules/>} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
