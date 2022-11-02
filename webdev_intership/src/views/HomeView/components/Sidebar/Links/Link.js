import React from 'react';
import Link from 'next/link';
import styles from "./Link.module.css";

const SidebarLink = ({href, label, icon, active, ...props}) => {
  const mode = active ? "active" : null
  return (
    // <Link
    //   underline="none"
    //   component="a"
    //   href={`/${href}`}
    //   // className="active"
    // >
    //   <i className={icon}></i>
    //   {label}
    // </Link>
    <a href={`/${href}`} className={`${styles.link} nav-link link-dark ${styles[`link--${mode}`]}`}>
      <i className={icon}></i>
      {label}
    </a>
  )
}

export default SidebarLink;