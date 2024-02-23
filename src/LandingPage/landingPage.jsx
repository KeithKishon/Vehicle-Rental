import React, { useState, useEffect } from "react";
import styles from "./landingPage.module.css";
import backgroundImageB from "../assets/images/bg.jpg"; 
import backgroundImageL from "../assets/images/bg-light.jpg"; 

function LandingPage() {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageB);

  useEffect(() => {
    // Change background image every 2 seconds
    const intervalId = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === backgroundImageB ? backgroundImageL : backgroundImageB
      );
    }, 2000);

    // Clean up function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className={styles.landingPage_container}>
      <img src={backgroundImage} className={styles.backgroundImage_styles} alt="Background" />
      <div className= {styles.text_container}>
        <h1 className={styles.text}> RENTALS FOR</h1>
        <h1 className={styles.text_luxury}> LUXURIOUS </h1>
        <h1 className={styles.text}> AND </h1>
        <h1 className={styles.text_sporty}> SPORTY </h1>
        <h1 className={styles.text}> VEHICLES </h1>
      </ div>
    </div>
  );
}

export default LandingPage;