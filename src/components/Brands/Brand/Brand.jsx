import React from "react";

import "./Brand.css"

const Brand = ({brand}) => {
    return (
        <a href="" className="card">
            <img src={brand.image} className="brand-logo" alt="brand logo"/>
            <div className="brand-overlay">
                <h3 className="brand-name">{brand.name}</h3>
            </div>
        </a>
    );
}

export default Brand;