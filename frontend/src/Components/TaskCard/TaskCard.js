import React, { useState } from 'react'
import styles from './taskCard.module.css'
import threeDots from '../../assets/threeDots.svg'
import highPriority from '../../assets/highPriority.svg'
import arrowDown from '../../assets/ArrowDown.svg'
import arrowUp from '../../assets/ArrowUp.svg'
import CheckListBar from '../CheckListBar/ChecklistBar.js'
import TaskStatusCard from '../TaskStatusMiniCard/TaskStatusCard.js'

const TaskCard = ({name}) => {
    const [showDropMenu, setshowDropMenu] = useState(false)
    const [showChecklist, setShowChecklist] = useState(false)
    const handledropMenu = (e) => {
        setshowDropMenu(!showDropMenu)
    }
    const handleShowChecklist = () => {
        setShowChecklist(!showChecklist);
    }
    return (
        <div className={styles.taskCardContainer} onClick={() => setshowDropMenu(false)}>
            <div className={styles.cardNav} onClick={(e) => e.stopPropagation()}>
                <div className={styles.priority}>
                    <img src={highPriority} alt="" />
                    <p>High Priority</p>
                </div>
                <div className={styles.threeDots} onClick={handledropMenu}>
                    <img src={threeDots} alt="" />
                    {
                        showDropMenu &&
                        <div className={styles.dorpMenu} onClick={(e) => e.stopPropagation()}>
                            <span>Edit</span>
                            <span>Share</span>
                            <span className={styles.deleteBtn}>Delete</span>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.taskTittle}>
                <h3>Hero Section</h3>
            </div>
            <div className={styles.checklistContainer}>
                <div className={styles.checklistCount}>
                    <p>checklist (0/3)</p>
                    <img src={showChecklist ? arrowUp : arrowDown} alt="" onClick={handleShowChecklist} />
                </div>
                {
                    showChecklist ? (
                        <>
                            <CheckListBar />
                            <CheckListBar />
                            <CheckListBar />
                        </>

                    ) : null
                }
            </div>
            <div className={styles.statusContainer}>
            {
                name.map((name) => {
                    return(
                        <TaskStatusCard name={name}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default TaskCard
