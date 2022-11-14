import React, { useState } from 'react';
import Link from "next/link"
import { Button } from '../../stories/Button';
import { Input } from '../../stories/Input';
import styles from "./SignupView.module.css"

const SignupView = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const HandleSignup = (event) => {
    event.preventDefault();

    // setEmail(event.target.email.value);
    // setPassword(event.target.password.value);
    console.log(email, password);
    setEmail("")
    setPassword("")
  }

  return (
    <main className={styles["login-view"]}>
      <section className={styles.left}>
      </section>
      <section className={styles.right}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
        <form className={styles.form}>
          <h3>Sign up</h3>
          <Input type="email"variant="left" placeholder='Email Address' icon="bi bi-envelope" styling={{ marginBottom: "10px"}} onChange={(e) => setEmail(e.target.value)} value={email}  />
          <Input type="password" variant="left" placeholder='Password' icon="bi bi-key" styling={{ marginBottom: "10px"}} onChange={(e) => setPassword(e.target.value)} value={password} />
          {/* <Input type="password" variant="left" placeholder='Confirm Password' icon="bi bi-key" styling={{ marginBottom: "10px"}}  /> */}
          <Button variant="primary" size="large" onClick={HandleSignup} >Sign up</Button>
          <div className={styles.utils}>
            <Link href="/Login">
              Already have an account? Log in
            </Link>
          </div>
          {/* <button className={styles.button} type="submit">Login</button> */}
        </form>
      </section>
    </main>
  )
}

export default SignupView;
