import React from 'react'
import styles from '../Footer/Footer.module.css';

const Input = (props) => {
  return (
    <span className={styles.inputBorder}>

        <label for={props.for}>{props.label}</label>

        <input type={props.type} className={styles.input} />

    </span>
  )
}

export default Input