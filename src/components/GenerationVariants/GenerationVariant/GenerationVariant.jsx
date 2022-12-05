import React from "react";

import styles from "./GenerationVariant.module.css";


const GenerationVariant = ({model}) => {
    return (
        <div className={styles.model}>
            {model.variant}
        </div>
    );
}

export default GenerationVariant;