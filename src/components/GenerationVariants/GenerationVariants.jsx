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
                if (modelName === model[0].model && generationName === model[0].generation) {
                    const renderVariants = [];
                    for (let index = 2; index < model.length; index++) {
                        renderVariants.push(
                            <Link className={styles.link} to={`./${model[index].variant}`}><GenerationVariant
                                model={model} index={index}
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