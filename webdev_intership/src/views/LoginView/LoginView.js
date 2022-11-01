import React from 'react';
import styles from "./LoginView.module.css"

const LoginView = () => {
  return (
    <main className={styles["login-view"]}>
      <section className={styles.left}>
      </section>
      <section className={styles.right}>
        <h1 className={styles["title"]}>Radical X</h1>
        <form className={styles.form}>
          <h3> Login</h3>
          <div className={`${styles["inner-addon"]} ${styles["left-addon"]}`}>
            <i className={`bi bi-envelope ${styles["bi"]}`}></i>
            <input type="email" className="form-control" placeholder='Email Address'/>
          </div>
          <div className={`${styles["inner-addon"]} ${styles["right-addon"]}`}>
            <i className={`bi bi-key ${styles["bi"]}`}></i>
            <input type="password" className="form-control" placeholder='Password'/>
          </div>

          <div className={styles.utils}>
            <label className={styles.checkbox}>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
            <a href="">
              Forgot password
            </a>
          </div>
          <button className={styles.button} type="submit">Login</button>
        </form>
      </section>
    </main>
  )
}

export default LoginView;
