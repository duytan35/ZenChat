import styles from "./SignUp.module.scss";
import { useState, useEffect } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [sex, setSex] = useState();
  // post login
  function handleSubmit() {
    console.log(username + " " + password + " " + fullName + " " + sex);
  }

  useEffect(() => {
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    for (let i = 1; i <= 31; i++) {
      let option = document.createElement("option");
      option.innerHTML = i;
      day.appendChild(option);
    }
    for (let i = 1; i <= 12; i++) {
      let option = document.createElement("option");
      option.innerHTML = i;
      month.appendChild(option);
    }
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      let option = document.createElement("option");
      option.innerHTML = i;
      year.appendChild(option);
    }
  }, []);

  return (
    <div className={styles.Login}>
      <div className={styles.label}>
        <div className={styles.label_img}>
          <img src="./zen_logo.png" alt="logo" />
        </div>
        <p className={styles.label_des}>
          Connect with your friends and the world around you!
        </p>
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Your full name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.birthday}>
          <span>Birthday:</span>
          <label htmlFor="day">Day</label>
          <select name="day" id="day"></select>
          <label htmlFor="month">Month</label>
          <select name="month" id="month"></select>
          <label htmlFor="year">Year</label>
          <select name="year" id="year"></select>
        </div>
        <div className={styles.sex}>
          <span>Sex:</span>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="sex"
            onChange={() => setSex("male")}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="sex"
            onChange={() => setSex("female")}
          />
          <label htmlFor="custom">Custom</label>
          <input
            type="radio"
            id="custom"
            name="sex"
            onChange={() => setSex("custom")}
          />
        </div>
        <button className={styles.btn} type="button" onClick={handleSubmit}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
