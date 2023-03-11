import styles from "./chatRoom.module.scss";
import UserInfo from "./UserInfo";
import ListRoom from "./ListRoom";

function SideTab() {
  return (
    <div className={styles.sideTab}>
      <UserInfo />
      <ListRoom />
    </div>
  );
}

export default SideTab;
