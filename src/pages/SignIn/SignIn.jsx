import React from "react";
import styles from "./SignIn.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {

  const {signUpWithGmail} = useContext(AuthContext);

  //Google sign in
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;

      alert("Login Successful !")
    }).catch((error) => console.log(error));
  }

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

          <button className={styles.google}  style={{ width: '50%', borderRadius: '1rem' }} onClick={handleLogin}>
            <FaGoogle />
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
