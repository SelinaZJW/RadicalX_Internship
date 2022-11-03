import React from "react";
import Row from "./Row/Row";
import styles from "./Table.module.css";

const Table = () => {
  const internships = [
    {
      id:0,
      title: "Product Design GVI",
      description: "Asdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.",
      completion: 120,
      created: new Date("2022-10-21"),
      enrolment: 20000,
      qualified: 120
    },
    {
      id:1,
      title: "Product Design GVI",
      description: "Asdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.",
      completion: 120,
      created: new Date("2022-10-21"),
      enrolment: 20000,
      qualified: 120
    },
    {
      id:2,
      title: "Product Design GVI",
      description: "Asdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.",
      completion: 120,
      created: new Date("2022-10-21"),
      enrolment: 20000,
      qualified: 120
    },
    {
      id:3,
      title: "Product Design GVI",
      description: "Asdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.",
      completion: 120,
      created: new Date("2022-10-21"),
      enrolment: 20000,
      qualified: 120
    },
    {
      id:4,
      title: "Product Design GVI",
      description: "Asdfke sdlfje sndfieo sndf sqoweirmb sdkflw mdkon oefnvlka dnfow ndn wknfjg.",
      completion: 120,
      created: new Date("2022-10-21"),
      enrolment: 20000,
      qualified: 120
    }
  ]

  return (
    <div class="container" id={styles.table}>
      <div class="row" id={styles["top-row"]}>
        <div class="col-3">
          Internship Title <i class="bi bi-arrow-down-square"></i>
        </div>
        <div class="col">
          Completion Period <i class="bi bi-arrow-down-square"></i>
        </div>
        <div class="col">
          Total Enrolled <i class="bi bi-arrow-down-square"></i>
        </div>
        <div class="col-3">
          Qualified Candidates <i class="bi bi-arrow-down-square"></i>
        </div>
        <div class="col">
          
        </div>
      </div>
      {/* <Row /> */}
      {internships.map(i => 
        <Row  
          key={i.id} 
          title={i.title} 
          description={i.description} 
          completion={i.completion} 
          created={i.created} 
          enrolment={i.enrolment} 
          qualified={i.qualified} 
          />
        )}
      
    </div>
  )
}

export default Table