import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Brands from "./components/Brands/Brands";
import About from "./components/About/About";
import BrandModels from "./components/BrandModels/BrandModels";
import ModelGenerations from "./components/ModelGenerations/ModelGenerations";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Brands/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/:brandName' element={<BrandModels/>}/>
                <Route path='/:brandName/:modelName' element={<ModelGenerations/>}/>
            </Routes>
        </Router>
    );
}

export default App