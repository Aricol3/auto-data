import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./BrandModels.module.css";
import BrandModel from "./BrandModel/BrandModel";

const BrandModels = () => {
    const {brandName} = useParams();
    const car = require(`../../data/${brandName}`).default;
    const uniqueModels = [];

    return (
        <div className={styles.modelsContainer}>
            {car.map((model) => {
                if (uniqueModels.indexOf(model[0].model) === -1) {
                    uniqueModels.push(model[0].model);
                    return (
                        <div>
                            <Link className={styles.link} to={`./${model[0].model}`}><BrandModel model={model}/></Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default BrandModels;