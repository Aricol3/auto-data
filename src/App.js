import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Brands from "./components/Brands/Brands";
import About from "./components/About/About";
import BrandModels from "./components/BrandModels/BrandModels";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Brands/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/:brandName' element={<BrandModels/>}/>
            </Routes>
        </Router>
    );
}

export default App