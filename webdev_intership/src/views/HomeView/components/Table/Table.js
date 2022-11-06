import React, { useEffect, useState } from "react";
import internshipService from "../../../../services/internshipService";
import Row from "./Row/Row";
import styles from "./Table.module.css";

const Table = () => {
  const [internships_db, setInternships] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await internshipService.getAllInternships();
      setInternships(data);
    }
    // internshipService.getAllInternships().then(setInternships)

    fetchData()
  }, []);
  console.log(internships_db)

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
    <div className="container" id={styles.table}>
      <div className="row" id={styles["top-row"]}>
        <div className="col-3">
          Internship Title <i className="bi bi-arrow-down-square"></i>
        </div>
        <div className="col">
          Completion Period <i className="bi bi-arrow-down-square"></i>
        </div>
        <div className="col">
          Total Enrolled <i className="bi bi-arrow-down-square"></i>
        </div>
        <div className="col-3">
          Qualified Candidates <i className="bi bi-arrow-down-square"></i>
        </div>
        <div className="col">
          
        </div>
      </div>
      {/* <Row /> */}
      {internships_db.map(i => 
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