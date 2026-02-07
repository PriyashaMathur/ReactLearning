import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.parent}>
      <button className={styles.btn}>TARGET AUDIENCE</button>
      <button className={styles.btn2}>DIGITAL BANKING PLATFORM</button>
    </div>
  )
}

export default Header