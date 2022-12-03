import React from "react";

import styles from "./BrandModel.module.css";


const BrandModel = ({model}) => {
    return (
        <div className={styles.model}>
            {model.name}
        </div>
    );
}

export default BrandModel;