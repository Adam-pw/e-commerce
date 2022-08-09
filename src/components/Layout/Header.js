import { Fragment } from "react";

import meal from "../../assets/grocery.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Saif General Store</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={meal} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
