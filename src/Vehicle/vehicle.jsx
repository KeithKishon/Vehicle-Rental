// Vehicle.jsx
import React from 'react';
import styles from './vehicle.module.css';

function Vehicle({ name, price, image, onSelect }) {
  const handleSelect = () => {
    onSelect({ name, price });
  };

  return (
    <div className={styles.vehicle_container}>
      <div className={styles.text_name}>{name}</div>
      <button className={styles.button} onClick={handleSelect}>SELECT</button>
      <h3 className={styles.text_price}>{price}</h3>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.seperator}>----------------------------------------------------</div>
    </div>
  );
}

export default Vehicle;




