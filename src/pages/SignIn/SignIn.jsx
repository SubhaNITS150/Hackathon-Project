import React from "react";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputBox}>
            <input type="email" required />
            <label>Email</label>
            <span className={styles.icon}>@</span>
          </div>
          <div className={styles.inputBox}>
            <input type="password" required />
            <label>Password</label>
            <span className={styles.icon}>🔒</span>
          </div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
          <div className={styles.options}>
            <a href="#">Create an account</a>
            
            <a href="#">Forget Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
