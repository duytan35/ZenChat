import styles from "./Login.module.scss";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // post login
  function handleSubmit() {
    console.log(username + " " + password);
  }

  return (
    <div className={styles.Login}>
      <div className={styles.label}>
        <div className={styles.label_img}>
          <img src="./zen_logo.png" alt="logo" />
        </div>
        <p className={styles.label_des}>The great place for chatting!</p>
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.btn} type="button" onClick={handleSubmit}>
          Login
        </button>
        <a className={styles.forgot_password} href="./login">
          Forgotten password?
        </a>
        <hr />
        <button
          className={styles.btn}
          type="button"
          onClick={() => {
            window.location.href = "./signup";
          }}
        >
          Create New Account
        </button>
      </form>
    </div>
  );
}

export default Login;
