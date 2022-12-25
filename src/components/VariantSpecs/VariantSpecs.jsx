import React from "react";
import styles from "./VariantSpecs.module.css";
import {useParams} from "react-router-dom";
import Slideshow from "./Slideshow/Slideshow";
import Specifications from "./Specifications/Specifications";
import useWindowDimensions from "./getWindowDimensions";

const VariantSpecs = () => {
    const { height, width } = useWindowDimensions();
    const {brandName, modelName, generationName, variantName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;


    let vehicle = allModels.find(model => {
        return modelName === model.model && generationName === model.generation
    })

    let vehicleImages = vehicle.images;
    let variantNumber;
    for (let index = 0; index < vehicle.variants.length; index++) {
        if (variantName === vehicle.variants[index].variant) {
            variantNumber = index;
        }
    }

    let slideshow;
    if (width < 816) {
        slideshow = <Slideshow vehicleImages={vehicleImages}/>
    }
    else slideshow = <div className={styles.slideshow}><Slideshow vehicleImages={vehicleImages}/></div>


    return (
        <div className={styles.container}>
            {slideshow}
            <hr/>
            <Specifications vehicle={vehicle} variantNumber={variantNumber}/>
        </div>
    )
}

export default VariantSpecs;