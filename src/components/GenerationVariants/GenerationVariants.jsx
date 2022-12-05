import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./GenerationVariants.module.css";
import GenerationVariant from "./GenerationVariant/GenerationVariant";

const GenerationVariants = () => {
    const {brandName, modelName, generationName} = useParams();
    const car = require(`../../data/${brandName}`).default;

    return (
        <div className={styles.generationsContainer}>
            {/* eslint-disable-next-line array-callback-return */}
            {car.map((model) => {
                if (modelName === model.model && generationName === model.generation) {
                    return (
                        <div key={model.id}>
                            <Link className={styles.link} to={`./${model.variant}`}><GenerationVariant
                                model={model}/></Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default GenerationVariants;