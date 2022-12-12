import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./ModelGenerations.module.css";
import ModelGeneration from "./ModelGeneration/ModelGeneration";

const ModelGenerations = () => {
    const {brandName, modelName} = useParams();
    const car = require(`../../data/${brandName}`).default;
    const uniqueGenerations = [];

    return (
        <div className={styles.modelsContainer}>
            {car.map((model) => {
                if (modelName == model[0].model) {
                    if (uniqueGenerations.indexOf(model[0].generation) === -1) {
                        uniqueGenerations.push(model[0].generation);
                        return (
                            <div>
                                <Link className={styles.link} to={`./${model[0].generation}`}><ModelGeneration
                                    model={model}/></Link>
                            </div>
                        )
                    }
                }
            })}
        </div>
    )
}

export default ModelGenerations;