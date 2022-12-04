import React from "react";
import styles from "./VariantSpecs.module.css";
import {useParams} from "react-router-dom";

const VariantSpecs = () => {
    const {brandName, modelName, generationName, variantName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;

    let car = allModels.find(model => {
        return modelName === model.model && generationName === model.generation && variantName === model.variant
    })


    return (
        <div className={styles.model}>
            {car.acceleration0to100}
            {car.variant}
            {car.co2Emissions}
            {car.weight}
        </div>
    )
}

export default VariantSpecs;