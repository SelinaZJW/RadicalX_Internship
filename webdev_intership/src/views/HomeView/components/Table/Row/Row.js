import React from "react";
import styles from "./Row.module.css";

const Row = ({title, description, completion, created, enrolment, qualified}) => {
  //convert firebase Timestape to JS Date object
  const createdDate = new Date(created._seconds * 1000)
  // console.log(createdDate);
  return (
    // <div className="row" id={styles.row}>
    //   <div className="col-3" id={styles.first}>
    //     <h6>Product Design GVI</h6>
    //     <p>lsdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.</p>
    //   </div>
    //   <div className="col" id={styles.second}>
    //     <div className={styles.second}>
    //     <h6>120 days</h6>
    //     <p>(created on 10/21/2022)</p>
    //     </div>
    //   </div>
    //   <div className="col" id={styles.third}>
    //     <p>20,000</p>
    //   </div>
    //   <div className="col-3">
    //     4
    //   </div>
    //   <div className="col" id={styles.fifth}>
    //     <i className="bi-lg bi-bar-chart-line"></i>
    //     <i className="bi bi-people"></i>
    //     <i className="bi bi-grid-3x2-gap-fill"></i>
    //   </div>
    // </div>
    <div className="row" id={styles.row}>
    <div className="col-3" id={styles.first}>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
    <div className="col" id={styles.second}>
      <div className={styles.second}>
      <h6>{completion} days</h6>
      {/* <p>(created on {created})</p> */}
      <p>(created on {createdDate.toLocaleDateString("en-GB")})</p>
      </div>
    </div>
    <div className="col" id={styles.third}>
      <p>{enrolment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </div>
    <div className="col-3">
      {/* {qualified} */}
      <img src="/images/qualified.png" alt="qualified"  />
    </div>
    <div className="col" id={styles.fifth}>
      <i className="bi-lg bi-bar-chart-line"></i>
      <i className="bi bi-people"></i>
      <i className="bi bi-grid-3x2-gap-fill"></i>
    </div>
  </div>
  )
}

export default Row;