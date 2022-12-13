import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./ModelGenerations.module.css";
import ModelGeneration from "./ModelGeneration/ModelGeneration";

const ModelGenerations = () => {
    const {brandName, modelName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;
    const uniqueGenerations = [];

    return (
        <div className={styles.modelsContainer}>
            {/* eslint-disable-next-line array-callback-return */}
            {allModels.map((model) => {
                if (modelName === model.model) {
                    if (uniqueGenerations.indexOf(model.generation) === -1) {
                        uniqueGenerations.push(model.generation);
                        return (
                            <div>
                                <Link className={styles.link} to={`./${model.generation}`}><ModelGeneration
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