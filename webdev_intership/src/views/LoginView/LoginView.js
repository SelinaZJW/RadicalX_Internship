import React, {useState} from 'react';
import Link from 'next/link';
import { useAuth } from '../../firebase/AuthContext';
import { Button } from '../../stories/Button';
import { Input } from '../../stories/Input';
import styles from "./LoginView.module.css"

const LoginView = () => {
  const [email, setEmail] = useState("");   //controlled value -> initiate
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const HandleLogin = async (event) => {
    event.preventDefault();

    try {
      await login(email, password)    //await to catch error
      console.log(email, password);
      setEmail("")
      setPassword("")
    } catch {
      console.log("log in failed")
    }
  }

  return (
    <main className={styles["login-view"]}>
      <section className={styles.left}>
      </section>
      <section className={styles.right}>
        {/* <h1 className={styles["title"]}>Radical X</h1> */}
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
        <form className={styles.form}>
          <h3> Login</h3>
          <Input type="email" variant="left" placeholder='Email Address' icon="bi bi-envelope" styling={{ marginBottom: "10px"}} onChange={(e) => setEmail(e.target.value)} value={email} />
          <Input type="password" variant="left" placeholder='Password' icon="bi bi-key" styling={{ marginBottom: "10px"}} onChange={(e) => setPassword(e.target.value)} value={password}  />
          {/* <div className={`${styles["inner-addon"]} ${styles["left-addon"]}`}>
            <i className={`bi bi-envelope ${styles["bi"]}`}></i>
            <input type="email" className="form-control" placeholder='Email Address'/>
          </div>
          <div className={`${styles["inner-addon"]} ${styles["right-addon"]}`}>
            <i className={`bi bi-key ${styles["bi"]}`}></i>
            <input type="password" className="form-control" placeholder='Password'/>
          </div> */}

          <div className={styles.utils}>
            <label className={styles.checkbox}>
              <input type="checkbox" value="remember-me"/> 
              <span className={styles.cr}><i className={`${styles["cr-icon"]} bi bi-check-lg`}></i></span>
              Remember me
            </label>
            <Link href="">
              Forgot password
            </Link>
          </div>
          <Button variant="primary" size="large" onClick={HandleLogin} >Login</Button>
          <div className={styles.signup}>
            <Link href="/Signup" className={styles["signup-link"]}>
              New User? Sign up
            </Link>
          </div>
          {/* <button className={styles.button} type="submit">Login</button> */}
        </form>
      </section>
    </main>
  )
}

export default LoginView;
