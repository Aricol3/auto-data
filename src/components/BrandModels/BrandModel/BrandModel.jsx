import React from "react";
import styles from "./BrandModel.module.css";


const BrandModel = ({modelName, previewImage}) => {
    return (
        <div className={styles.modelCard}>
            <img className={styles.modelPreview} src={previewImage} alt="brand logo"/>
            <div className={styles.modelOverlay}>
                <h3 className={styles.modelName}>{modelName}</h3>
            </div>
        </div>
    );
}

export default BrandModel;