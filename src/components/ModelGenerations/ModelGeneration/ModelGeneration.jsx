import React from "react";

import styles from "./ModelGeneration.module.css";


const ModelGeneration = ({model}) => {
    return (
        <div className={styles.model}>
            {model[0].generation}
        </div>
    );
}

export default ModelGeneration;