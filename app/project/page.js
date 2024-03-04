"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styles from '../page.module.css'
import Project from '../components/Project'


const page = () => {
    const [color,setColor]=useState(true)
    const [task,setTask]=useState([])
    const API_URL="http://localhost:3500/projects"
    function change()
    {
      setColor(!color)
      
    }

    useEffect(()=>
    {
      const fetchItems= async()=>
      {
        try
        {
          const respone= await fetch(API_URL);
        const res= await respone.json();
        setTask(res)
        }
        catch(err)
        {
          console.log(err)
        }
        
      }
      (async()=>await fetchItems())()
    },[])

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
      <div >
        {
          task.map((task)=><Project name={task.name} desc={task.description}/>)
        }
        </div>
      </div>
    
      
    </main>

    </div>
  )
}

export default page