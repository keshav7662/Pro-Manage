import React from 'react'
import styles from './taskStatusCard.module.css'
const TaskStatusCard = ({name}) => {
  return (
    <div className={styles.miniChip}>
      <p>{name}</p>
    </div>
  )
}

export default TaskStatusCard
