
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from "./Pages/Home/Index";
import ChicCircle from "./Pages/ChicCircle/Chic";
import StepWise from "./Pages/StepWise/StepWise";
import CareWise from "./Pages/CareWise/CareWise";
import RobotWise from './Pages/RobotWise/RobotWise';
import PortfolioLayout from './Pages/Animation/PortfolioLayout';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PortfolioLayout />}> 
          <Route path="/" element={<Home />} />
            <Route path="/chic-circle/:id" element={<ChicCircle />} />
            <Route path="/StepWise/:id" element={<StepWise />} />
            <Route path="/CareWise/:id" element={<CareWise />} />
            <Route path="/RobotWise/:id" element={<RobotWise />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

