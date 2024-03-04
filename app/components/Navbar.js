import React from 'react'
import styles from '../page.module.css'
import Button from "../Button";
import { CgProfile } from "react-icons/cg";
import { GoSun } from "react-icons/go";

import { FaRegBell } from "react-icons/fa";
import Image from 'next/image';

const Navbar = ({color,setColor,change}) => {


  return (
    <nav>
    <div className={color ? styles.nav : styles.whitenav }>
      <div className={styles.flex1}>
        {/* <h1>TriboPlanet</h1> */}
        <Image src={color ? "/img_tribo.jpeg" : "/img_tribo2.jpeg"} width={150} height={75}/>
      </div>
      <div className={color ? styles.flex2 : styles.flex21}>
      {/* <GoSun className={styles.mode}   /> */}
      <Button 
      change={change}
      color={color}
      setColor={setColor}
      />
      {/* <MdOutlineDarkMode className={styles.mode}/> */}
      <FaRegBell className= {styles.profile }/>
      <CgProfile className={styles.profile}/> 
      </div>
    </div>
    </nav>
  )
}

export default Navbar