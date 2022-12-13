import React from "react";
import {Link, useParams} from "react-router-dom";
import styles from "./BrandModels.module.css";
import BrandModel from "./BrandModel/BrandModel";

const BrandModels = () => {
    const {brandName} = useParams();
    const allModels = require(`../../data/${brandName}`).default;
    const uniqueModels = [];
    const renderModels = [];
    allModels.map((model) => {
        if (uniqueModels.indexOf(model.model) === -1) {
            uniqueModels.push(model.model);
        }
    });
    uniqueModels.sort((a, b) => a.localeCompare(b));
    uniqueModels.map((modelName) => {
        let previewImage;
        let newestModelYear = -1;
        allModels.map((model) => {
            if (modelName === model.model && newestModelYear < Number(model.variants[0].specs[11].replace(/\D/g, ''))) {
                newestModelYear = model.variants[0].specs[11];
                previewImage = model.images[0];
            }
        })
        renderModels.push(<Link className={styles.link} to={`./${modelName}`}><BrandModel modelName={modelName} previewImage={previewImage}/></Link>)
    });


    return (
        <div className={styles.modelsContainer}>
            {renderModels}
        </div>
    )
}

export default BrandModels;