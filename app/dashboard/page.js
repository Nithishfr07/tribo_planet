"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styles from '../page.module.css'


const page = () => {
    const [color,setColor]=useState(true)
    function change()
    {
      setColor(!color)
      
    }

  return (
  
    <div className={styles.body}>
        <Navbar 
    color={color}
    setColor={setColor}
    change={change}
    />
    
    <br/>
    <Sidebar
    color={color}
    />

<main className={color ? styles.main : styles.mainw}>
      <div className={styles.post} style={{fontSize:"30px",color:"white"}}>
        Dashboard
      </div>
    
      
    </main>

    </div>
  )
}

export default page