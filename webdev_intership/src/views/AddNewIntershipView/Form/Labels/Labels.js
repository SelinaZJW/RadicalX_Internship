import React, { useState } from "react";
import SingleLabel from "./SingleLabel/SingleLabel";
import { Button } from "../../../../stories/Button";
import styles from "./Labels.module.css"

const Labels = () => {
  const [activeLabel, setActiveLabel] = useState("");
  
  function variant(tag) {
    return activeLabel===tag ? "active" : "basic"
  }

  return (
    <section className={styles.labels}>
      <SingleLabel tag="Category" variant={variant("category")} onClick={() => setActiveLabel("category")} />
      <SingleLabel tag="Description" variant={variant("description")} onClick={() => setActiveLabel("description")}/>
      <SingleLabel tag="Location" variant={variant("location")} onClick={() => setActiveLabel("location")} />
      <SingleLabel tag="Benefits" variant={variant("benefits")} onClick={() => setActiveLabel("benefits")}/>
      <SingleLabel tag="Intro Video" variant={variant("introVideo")} onClick={() => setActiveLabel("introVideo")}/>
      <SingleLabel tag="Mentor Details" variant={variant("mentorDetails")} onClick={() => setActiveLabel("mentorDetails")}/>
      <SingleLabel tag="Recommended Roles" variant={variant("recommendedRoles")} onClick={() => setActiveLabel("recommendedRoles")}/>
      <SingleLabel tag="Web Links & Resources"  variant={variant("webLinks")} onClick={() => setActiveLabel("webLinks")}/>
      {/* <SingleLabel tag="Add More" variant="add" /> */}
      <Button variant="secondary" styling={{marginLeft: "38px", width: "inherit"}}> <i className="bi bi-plus-square"></i> Add More </Button>
    </section>
  )
}

export default Labels;