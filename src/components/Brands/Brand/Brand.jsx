import React from "react";

import styles from "./Brand.module.css";


const Brand = ({brand}) => {
    return (
        <div className={styles.card}>
            <img className={styles.brandLogo} src={brand.image} alt="brand logo"/>
            <div className={styles.brandOverlay}>
                <h3 className={styles.brandName}>{brand.name}</h3>
            </div>
        </div>
    );
}

export default Brand;