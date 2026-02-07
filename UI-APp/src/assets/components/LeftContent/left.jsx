import React from 'react'
import styles from './left.module.css'
const Left = () => {
  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Prospective <br />Customer <br />Segmentation</h1>
      <p className={styles.para}>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
    </div>
  )
}

export default Left