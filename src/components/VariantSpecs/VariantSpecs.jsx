import React from "react";
import styles from "./VariantSpecs.module.css";
import {useParams} from "react-router-dom";
import Slideshow from "./Slideshow/Slideshow";
import Specifications from "./Specifications/Specifications";

const VariantSpecs = () => {
    const {brandName, modelName, generationName, variantName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;

    let vehicle = allModels.find(model => {
        return modelName === model.model && generationName === model.generation && variantName === model.variant
    })


    return (
        <div className={styles.container}>
            <div className={styles.slideshow}><Slideshow vehicle={vehicle}/></div>

            <hr/>
            <Specifications vehicle={vehicle}/>
        </div>
    )
}

export default VariantSpecs;