import React from "react";
import styles from "./Row.module.css";

const Row = ({title, description, completion, created, enrolment, qualified}) => {
  return (
    // <div class="row" id={styles.row}>
    //   <div class="col-3" id={styles.first}>
    //     <h6>Product Design GVI</h6>
    //     <p>lsdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.</p>
    //   </div>
    //   <div class="col" id={styles.second}>
    //     <div className={styles.second}>
    //     <h6>120 days</h6>
    //     <p>(created on 10/21/2022)</p>
    //     </div>
    //   </div>
    //   <div class="col" id={styles.third}>
    //     <p>20,000</p>
    //   </div>
    //   <div class="col-3">
    //     4
    //   </div>
    //   <div class="col" id={styles.fifth}>
    //     <i class="bi-lg bi-bar-chart-line"></i>
    //     <i class="bi bi-people"></i>
    //     <i class="bi bi-grid-3x2-gap-fill"></i>
    //   </div>
    // </div>
    <div class="row" id={styles.row}>
    <div class="col-3" id={styles.first}>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
    <div class="col" id={styles.second}>
      <div className={styles.second}>
      <h6>{completion} days</h6>
      <p>(created on {created.toLocaleDateString("en-GB")})</p>
      </div>
    </div>
    <div class="col" id={styles.third}>
      <p>{enrolment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </div>
    <div class="col-3">
      {/* {qualified} */}
      <img src="/images/qualified.png" alt="qualified"  />
    </div>
    <div class="col" id={styles.fifth}>
      <i class="bi-lg bi-bar-chart-line"></i>
      <i class="bi bi-people"></i>
      <i class="bi bi-grid-3x2-gap-fill"></i>
    </div>
  </div>
  )
}

export default Row;