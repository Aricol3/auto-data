import React from "react";
import {useParams} from "react-router-dom"
import brandsData from "../data/Brands";

const BrandModels = () => {
    const {brandName} = useParams();
    const thisBrand = brandsData.find(brand => brand.name === brandName);

    return (
        <div>
            {String(brandName)}
        </div>
    )
}

export default BrandModels;