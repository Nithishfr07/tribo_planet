"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoSun } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { PiArrowBendUpLeft } from "react-icons/pi";
import { BiHomeSmile } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [color,setColor]=useState(true)
  function change()
  {
    setColor(!color)
    
  }


  

  return (
    <div className={styles.body} >
    
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
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400} className={!color ? styles.photo : 0}/>
      </div>
      <br/><br/><br/><br/>
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400}/>
      </div>
      <br/><br/><br/><br/>
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400}/>
      </div>
      <br/><br/><br/><br/>
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400}/>
      </div>

      <br/><br/><br/><br/>
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400}/>
      </div>
      <br/><br/><br/><br/>
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400}/>
      </div>
      <br/><br/><br/><br/>
      <div className={styles.post}>
        <Image src="/ph1.jpg" width={400} height={400}/>
      </div>
      
    </main>
    </div>
  );
}
