import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./BrandModels.module.css";
import ModelGeneration from "./ModelGeneration/ModelGeneration";

const BrandModels = () => {
    const {brandName} = useParams();
    const brandModels = require(`../data/BrandModels/${brandName}`).default;

    return (
        <div className={styles.modelsContainer}>
            {brandModels.map((model) => (
                <div key={model.id}>

                </div>
            ))}
        </div>
    )
}

export default BrandModels;