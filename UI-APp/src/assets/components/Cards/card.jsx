import React from 'react'
import styles from './card.module.css'
const Card = (props) => {
  return (
    <div className={styles.parent} style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <button className={styles.btn}>{props.index+1}</button>
      <p className={styles.para}>{props.content}</p>
      <button className={styles.btn2}>{props.butt}</button>
      </div>
  )
}

export default Card