import React from "react";

import styles from "./ModelGeneration.module.css";


const ModelGeneration = ({model}) => {
    let minYear = 10000;
    let maxYear = null;
    let minPower = 10000;
    let maxPower = null;
    model.variants.forEach((variant) => {
        variant.specs.forEach((spec, index) => {
            if (spec.includes("year") && variant.specs[index - 1] === "Start of production") {
                let yearNumber = Number(spec.replace(/\D/g, ''));
                if (yearNumber < minYear) minYear = yearNumber;
            }
            if (spec.includes("year") && variant.specs[index - 1] === "End of production") {
                let yearNumber = Number(spec.replace(/\D/g, ''));
                if (yearNumber > maxYear) maxYear = yearNumber;
            }
        })
        let engineChars = variant.variant.split('');
        let start = false;
        let power = "";
        for (let i = 0; i < engineChars.length; i++) {
            if (start === true) {
                if (engineChars[i] === " ") break;
                power=power.concat(engineChars[i]);
            }
            if (engineChars[i] === "(") start = true;
        }
        if (power < minPower) minPower = power;
        if (power > maxPower) maxPower = power;
    });

    return (
        <div className={styles.generationCard}>
            <div className={styles.imageContainer}>
                <img src={model.images[0]}/>
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.generationName}>{model.brand} {model.generation}</h3>
                <p className={styles.years}>Production: {minYear} - {maxYear}</p>
                <p className={styles.power}>Power: {minPower} to {maxPower} Hp</p>
            </div>

        </div>
    );
}

export default ModelGeneration;