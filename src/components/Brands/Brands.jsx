import React from "react";
import {Link} from "react-router-dom";
import Brand from "./Brand/Brand";
import styles from "./Brands.module.css";
import brands from "../data/Brands";

const Brands = () => {
    return (
        <div className={styles.brandsContainer}>
            {brands.map((brand) => (
                <div key={brand.id}>
                    <Link to={`/${brand.name}`}><Brand brand={brand}/></Link>
                </div>
            ))}
        </div>
    );
}

export default Brands;