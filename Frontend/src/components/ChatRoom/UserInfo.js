import styles from "./chatRoom.module.scss";

function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <img
        className={styles.avatar}
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
        alt="avatar"
      />
      <p className={styles.fullName}>Tran Duy Tan ádasd asdasdasđá</p>
      <button className={styles.btnLogout}>Logout</button>
    </div>
  );
}

export default UserInfo;
