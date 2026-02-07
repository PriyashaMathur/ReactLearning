import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.heading}>Priyasha Mathur</div>
      <div className={styles.content}>
        <ul>Home</ul>
        <ul>Who we are</ul>
        <ul>Services</ul>
        <ul>Our Work</ul>
        <ul>Meet the Duo</ul>
        <ul>Contacts</ul>
      </div>
      <div className={styles.button}>
        <button className={styles.btn}>Let's Talk</button>
      </div>
    </div>
  )
}

export default header