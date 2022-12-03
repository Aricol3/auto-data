import React from "react";

import styles from "./Brand.module.css";


const Brand = ({brand}) => {
    return (
        <a href="" className={styles.card}>
            <img src={brand.image} className={styles.brandLogo} alt="brand logo"/>
            <div className={styles.brandOverlay}>
                <h3 className={styles.brandName}>{brand.name}</h3>
            </div>
        </a>
    );
}

export default Brand;