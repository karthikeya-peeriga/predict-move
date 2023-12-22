import React from "react";
import styles from "./div4.module.css"; // Import the CSS module with styles object

const Div4 = () => {
  return (
    <div className={styles.dark}> {/* Use the styles object for class names */}
      <div className={styles.imgContainer}> {/* Update the class name */}
        <div className={styles.text}>
          <p className={styles.title}>Real Time Trade Setups</p>
          <p className={styles.content}>
            Champion members are provided with an in-depth analysis on the
            Bitcoin market prior to the week ahead. Sit down with our Lead
            Analyst as they talk you through your chart highlighting;
          </p>
          <br/>
          <p> </p>
          <p className={styles.content}>
            current market structure, key price levels and alert
            recommendations, while identifying the most probably trade setups on
            the Bitcoin chart.
          </p>
        </div>
        <img
          className={styles.asset}
          src={require("../../assets/landingimage4.png")}
          alt="profit"
        />
      </div>
    </div>
  );
};

export default Div4;
