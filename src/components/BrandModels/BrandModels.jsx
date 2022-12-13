import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./BrandModels.module.css";
import BrandModel from "./BrandModel/BrandModel";

const BrandModels = () => {
    const {brandName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;
    const uniqueModels = [];

    return (
        <div className={styles.modelsContainer}>
            {allModels.map((model) => {
                if (uniqueModels.indexOf(model.model) === -1) {
                    uniqueModels.push(model.model);
                    return (
                        <div>
                            <Link className={styles.link} to={`./${model.model}`}><BrandModel model={model}/></Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default BrandModels;