import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./GenerationVariants.module.css";
import GenerationVariant from "./GenerationVariant/GenerationVariant";

const GenerationVariants = () => {
    const {brandName, modelName, generationName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;

    return (
        <div className={styles.generationsContainer}>
            {/* eslint-disable-next-line array-callback-return */}
            {allModels.map((model) => {
                if (modelName === model.model && generationName === model.generation) {
                    const renderVariants = [];
                    for (let variantNumber = 0; variantNumber < model.variants.length; variantNumber++) {
                        renderVariants.push(
                            <Link className={styles.link} to={`./${model.variants[variantNumber].variant}`}><GenerationVariant
                                model={model} variantNumber={variantNumber}
                            /></Link>
                        )
                    }
                    return (
                        <div>
                            {renderVariants}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default GenerationVariants;