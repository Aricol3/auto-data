import React from "react";

import styles from "./GenerationVariant.module.css";


const GenerationVariant = ({model,variantNumber}) => {
    return (
        <div className={styles.model}>
            {model.variants[variantNumber].variant}
        </div>
    );
}

export default GenerationVariant;