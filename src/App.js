import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Brands from "./components/Brands/Brands";
import About from "./components/About/About";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Brands/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </Router>
    );
}

export default App