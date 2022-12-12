import React from "react";

import styles from "./GenerationVariant.module.css";


const GenerationVariant = ({model,index}) => {
    return (
        <div className={styles.model}>
            {model[index].variant}
        </div>
    );
}

export default GenerationVariant;