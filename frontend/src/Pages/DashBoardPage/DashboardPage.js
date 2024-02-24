import React, { useState } from 'react'
import styles from './dashboardPage.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import TaskCard from '../../Components/TaskCard/TaskCard';
import collapse from '../../assets/collapse.svg'
import AddSvg from '../../assets/AddSvg.svg'

const DashboardPage = () => {
  const timeOptions = ["This Week", "This Month", "Today"];
  const [selectedTimeOption, setSelectedTimeOption] = useState("This Week");
  const [heroLabel, setHeroLabel] = useState('Board')
  const handleTimeOptionChange = (event) => {
    setSelectedTimeOption(event.target.value);
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar setHeroLabel={setHeroLabel} />
      <div className={styles.heroContainer}>
        <div className={styles.heroNav}>
          <div className={styles.userNameAndDate}>
            <h2>welcome!Keshav</h2>
            <p>12th Jan, 2024</p>
          </div>
          <div className={styles.sideMenuAndDropdown}>
            <p className={styles.sidebarLabel}>{heroLabel}</p>
            <div className={styles.dropDownContainer}>
              <select
                value={selectedTimeOption}
                onChange={handleTimeOptionChange}
                className={styles.dropdown}
              >
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.heroBody}>
        {/* backlog */}
          <div className={`${styles.backlog} ${styles.cardContainer}`}>
            <div className={styles.cardContainerTittleBar}>
              <p>Backlog</p>
              <img src={collapse} alt="" />
            </div>
            <TaskCard name={['To-Do','Progress','Done']}/>
          </div>
          {/* todo */}
          <div className={`${styles.todo} ${styles.cardContainer}`}>
            <div className={styles.cardContainerTittleBar}>
              <p>To do</p>
                  <div className={styles.addAndCollapse}>
                    <img src={AddSvg} alt="" />
                    <img src={collapse} alt="" />
                  </div>
            </div>
          </div>
          {/* progress */}
          <div className={`${styles.progress} ${styles.cardContainer}`}>
            <p>In Progress</p>
          </div>
          {/* done */}
          <div className={`${styles.done} ${styles.cardContainer}`}>
            <p>Done</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
