import styles from "./Login.module.scss";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // check valid information
  function checkValid() {
    if (username.length < 3) {
      document.getElementById("error").innerHTML = "Username wrong!";
      return false;
    }
    if (password.length < 3) {
      document.getElementById("error").innerHTML = "Password wrong!";
      return false;
    }
    document.getElementById("error").innerHTML = "";
    return true;
  }

  // post login
  async function handleSubmit() {
    if (checkValid()) {
      const res = await fetch("http://localhost:3003/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      var rs = await res.json();
      if (rs.isSuccess === true) {
        window.location.href = "./";
      } else {
        document.getElementById("error").innerHTML = rs.error;
      }
    }
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
        <p id="error" className={styles.error}></p>
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
