import React from "react";
import styles from "./Specifications.module.css"


const Specifications = ({vehicle,variantNumber}) => {
    const specs = vehicle[variantNumber].specs;
    const renderSpecs = [];
    const headings = ["General Information", "Performance specs", "Engine specs", "Electric cars and hybrids specs", "Internal combustion engine specs", "Space, Volume and weights", "Dimensions", "Drivetrain, brakes and suspension specs"]
    for (let i = 0; i < specs.length - 1; i += 2) {
        if (headings.includes(specs[i])) {
            renderSpecs.push(<h4 className={styles.h4}>{specs[i]}</h4>);
            i--;
        } else {
            if (specs[i] === "CO2 emissions") {
                renderSpecs.push(<p className={styles.p}>CO<sub>2</sub> emissions: {specs[i + 1]}</p>);
            } else renderSpecs.push(<p className={styles.p}>{specs[i]}: {specs[i + 1]}</p>);
        }
    }

    return (
        <div>
            <h3 className={styles.h3}>{vehicle[0].brand + " " + vehicle[0].generation + " " + vehicle[variantNumber].variant}</h3>
            {renderSpecs}
        </div>
    )
}

export default Specifications;