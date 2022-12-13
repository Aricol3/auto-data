import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./ModelGenerations.module.css";
import ModelGeneration from "./ModelGeneration/ModelGeneration";

const ModelGenerations = () => {
    const {brandName, modelName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;
    const allModelGenerations = [];
    const renderGenerations = [];
    allModels.map((model) => {
        if (modelName === model.model) {
            allModelGenerations.push(model);
        }
    })
    // eslint-disable-next-line array-callback-return
    allModelGenerations.map((model) => {
        renderGenerations.push(<Link className={styles.link} to={`./${model.generation}`}><ModelGeneration model={model}/></Link>);
    })

    return (
        <div className={styles.generationsContainer}>
            {renderGenerations}
        </div>
    )
}

export default ModelGenerations;