import React from "react";

import styles from "./BrandModel.module.css";


const BrandModel = ({model}) => {
    return (
        <div className={styles.model}>
            {model.model}
        </div>
    );
}

export default BrandModel;