import React from "react";
import styles from "./VariantSpecs.module.css";
import {useParams} from "react-router-dom";
import Slideshow from "./Slideshow/Slideshow";
import Specifications from "./Specifications/Specifications";

const VariantSpecs = () => {
    const {brandName, modelName, generationName, variantName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;


    let vehicle = allModels.find(model => {
        return modelName === model[0].model && generationName === model[0].generation
    })

    let vehicleImages = vehicle[1].images;
    let variantNumber;
    for (let index = 2; index < vehicle.length; index++) {
        if (variantName === vehicle[index].variant) {
            variantNumber = index;
        }
    }


    return (
        <div className={styles.container}>
            <Slideshow vehicleImages={vehicleImages}/>

            <hr/>
            <Specifications vehicle={vehicle} variantNumber={variantNumber}/>
        </div>
    )
}

export default VariantSpecs;