import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./GenerationVariants.module.css";
import GenerationVariant from "./GenerationVariant/GenerationVariant";
import Slideshow from "../VariantSpecs/Slideshow/Slideshow";

const GenerationVariants = () => {
    const {brandName, modelName, generationName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;
    const renderVariants = []
    let vehicleImages;
    allModels.forEach((model) => {
        if (modelName === model.model && generationName === model.generation) {
            vehicleImages = model.images;
            for (let variantNumber = 0; variantNumber < model.variants.length; variantNumber++) {
                renderVariants.push(
                    <Link className={styles.link} to={`./${model.variants[variantNumber].variant}`}><GenerationVariant
                        model={model} variantNumber={variantNumber}
                    /></Link>
                )
            }
        }
    })

    return (
        <div className={styles.generationsContainer}>
            <Slideshow vehicleImages={vehicleImages}/>
            {renderVariants}
        </div>
    )
}

export default GenerationVariants;