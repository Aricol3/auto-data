import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./ModelGenerations.module.css";
import ModelGeneration from "./ModelGeneration/ModelGeneration";

const ModelGenerations = () => {
    const {brandName, modelName} = useParams();
    const car = require(`../../data/${brandName}`).default;

    return (
        <div className={styles.modelsContainer}>
            {car.map((model) => {
                if (modelName == model.model) {
                    return (
                        <div key={model.id}>
                            <Link className={styles.link} to={`./${model.generation}`}><ModelGeneration
                                model={model}/></Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ModelGenerations;