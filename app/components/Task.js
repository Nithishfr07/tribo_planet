import React from 'react'
import styles from '../page.module.css'

const Task = ({name,desc}) => {
  return (
    <>
    <div className={styles.task}>
       Name : {name}
       <br /><br />
       Description : {desc}
    </div>
    <br /><br />
    </>
  )
}

export default Task