import React from 'react';
import Link from 'next/link';
import SidebarLink from './Links/Link';
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <section className={styles.main}>
      <div className={`d-flex flex-column flex-shrink-0 p-3 ${styles.sidebar}`} >

        {/* <a  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <span className="fs-4">Sidebar</span>
        </a> */}
        {/* <h1 className={styles.title}>Radical X</h1> */}
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
        {/* <hr> */}
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <SidebarLink label="Dashboard" icon="bi bi-columns-gap" href="Home/"  />
          </li>
          <li>
            <SidebarLink label="Apprenticeships" icon="bi bi-award" href="Home/" />
          </li>
          <li>
            <SidebarLink label="Internships" icon="bi bi-book-half" href="Home/" active />
          </li>
          <li>
            <SidebarLink label="Jobs" icon="bi bi-briefcase" href="Home/" />
          </li>
          <li>
            <SidebarLink label="Settings" icon="bi bi-gear" href="Home/" />
          </li>
        </ul>
        {/* </hr> */}
        <div className={`dropdown ${styles.user}`}>
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="40" height="40" className="rounded me-3" />
            Adam Scott
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
            {/* <li><hr className="dropdown-divider" /></li> */}
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Sidebar