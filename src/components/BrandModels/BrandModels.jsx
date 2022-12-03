import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./BrandModels.module.css";
import BrandModel from "./BrandModel/BrandModel";

const BrandModels = () => {
    const {brandName} = useParams();
    const brandModels = require(`../data/BrandModels/${brandName}`).default;

    return (
        <div className={styles.modelsContainer}>
            {brandModels.map((model) => (
                <div key={model.id}>
                    <Link className={styles.link} to={`/${model.name}`}><BrandModel model={model}/></Link>
                </div>
            ))}
        </div>
    )
}

export default BrandModels;