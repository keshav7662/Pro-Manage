import React from 'react'
import styles from './checklistBar.module.css'
const CheckListBar = () => {
  return (
    <div className={styles.tasklistsContainer}>
      <input type="checkbox" className={styles.checkbox}/>
      <label htmlFor="radioButton">Task to be done</label>
    </div>
  )
}

export default CheckListBar
