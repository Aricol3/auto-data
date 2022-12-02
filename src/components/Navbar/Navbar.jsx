import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <Link className={styles.brands} to="/">
                Brands
            </Link>
            <Link className={styles.about} to="/about">
                About
            </Link>
        </nav>
    );
};

export default Navbar;