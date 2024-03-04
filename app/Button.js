
"use client"
import { GoSun } from "react-icons/go";
import styles from "./page.module.css";

export default function Button({change,color,setColor}) {

 
  return <button onClick={() => change() } className={color ? styles.button : styles.whitebutton}><GoSun className={styles.mode}   /></button>;
}
