import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Brands from "./components/Brands/Brands";
import About from "./components/About/About";
import BrandModels from "./components/BrandModels/BrandModels";
import ModelGenerations from "./components/ModelGenerations/ModelGenerations";
import GenerationVariants from "./components/GenerationVariants/GenerationVariants";
import VariantSpecs from "./components/VariantSpecs/VariantSpecs";

const App = () => {
    return (
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Brands/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/:brandName' element={<BrandModels/>}/>
                <Route path='/:brandName/:modelName' element={<ModelGenerations/>}/>
                <Route path='/:brandName/:modelName/:generationName' element={<GenerationVariants/>}/>
                <Route path='/:brandName/:modelName/:generationName/:variantName' element={<VariantSpecs/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App