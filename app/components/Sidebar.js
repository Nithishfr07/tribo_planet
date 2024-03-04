import Link from 'next/link'
import React from 'react'
import styles from '../page.module.css'
import { PiArrowBendUpLeft } from 'react-icons/pi'
import { BiHomeSmile } from 'react-icons/bi'
import { FaTasks } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { TbReportSearch } from 'react-icons/tb'
import { LuLayoutDashboard } from 'react-icons/lu'


const Sidebar = ({color}) => {
  return (
    <section className={color ? styles.section : styles.sectionw}>
      <div className={styles.child}>
      <Link href="" className={color ? styles.link : styles.linkw}> <p className={styles.back}><PiArrowBendUpLeft className={styles.icon}/> Back</p></Link>
        <Link href="/" className={color ? styles.link : styles.linkw}><p><BiHomeSmile className={styles.icon}/>Home</p></Link> 
        <Link href="/task" className={color ? styles.link : styles.linkw}><p><FaTasks className={styles.icon}/>Task</p></Link>
        <Link href="/project" className={color ? styles.link : styles.linkw}><p><GrProjects className={styles.icon}/>Projects</p></Link>
        <Link href="/report" className={color ? styles.link : styles.linkw}><p><TbReportSearch className={styles.icon}/>Reports</p></Link>
        <Link href="dashboard" className={color ? styles.link : styles.linkw}><p><LuLayoutDashboard className={styles.icon}/>Dashboard</p></Link>
      </div>
    </section>
  )
}

export default Sidebar