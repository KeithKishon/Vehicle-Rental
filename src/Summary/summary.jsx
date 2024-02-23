// Summary.jsx
import React from 'react';
import styles from './summary.module.css';

function Summary({ selectedVehicle }) {
  console.log("Selected Vehicle:", selectedVehicle); // Add this line to log the selectedVehicle prop
  
  return (
    <div className={styles.summary_container}>
      <h1 className={styles.summary_background}> My summary </h1>
      {selectedVehicle && (
        <div>
          <p className= {styles.vehicle_name}>Name: {selectedVehicle.name}</p>
          <p className= {styles.vehicle_price}>Price: {selectedVehicle.price}</p>
        </div>
      )}
    </div>
  );
}

export default Summary;


