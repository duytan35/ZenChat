import styles from "./chatRoom.module.scss";
import SideTab from "./SideTab";
import ChatWindow from "./ChatWindow";

function ChatRoom() {
  console.log(styles.sideTab);
  return (
    <div className={styles.container}>
      <SideTab />
      <ChatWindow />
    </div>
  );
}

export default ChatRoom;
