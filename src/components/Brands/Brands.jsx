import React from "react";

import Brand from "./Brand/Brand";
import "./Brands.css"

const brands = [
    {
        id: 1,
        name: "BMW",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg"
    },
    {
        id: 2,
        name: "Audi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/1200px-Audi-Logo_2016.svg.png"
    },
    {
        id: 3,
        name: "Mercedes-Benz",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1725px-Mercedes-Logo.svg.png"
    },
    {
        id: 4,
        name: "Porsche",
        image: "https://logoeps.com/wp-content/uploads/2014/11/Porsche-logo.png"
    },
    {
        id: 5,
        name: "Lamborghini",
        image: "https://upload.wikimedia.org/wikipedia/ro/thumb/d/df/Lamborghini_Logo.svg/672px-Lamborghini_Logo.svg.png"
    }
]

const Brands = () => {
    return (
        <div className="brands-container">
            {brands.map((brand) => (
                <div item key={brand.id} xs={12} sm={6} md={4} lg={3}>
                    <Brand brand={brand}/>
                </div>
            ))}
        </div>
    );
}

export default Brands;