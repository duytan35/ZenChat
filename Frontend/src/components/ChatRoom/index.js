import styles from "./chatRoom.module.scss";
import SideTab from "./SideTab";
import ChatWindow from "./ChatWindow";
import { useEffect } from "react";
import Cookies from "js-cookie";

console.log(123);

function ChatRoom() {
  console.log(1223);
  useEffect(() => {
    console.log(Cookies.get("user"));
    if (!Cookies.get("user")) {
      window.location.href = "./login";
    }
    var user = JSON.parse(Cookies.get("user").slice(2));
    console.log(user.accessToken);
    console.log(user.refreshToken);
    async function verify() {
      const res = await fetch("http://localhost:3003/auth/verify", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      var rs = await res.json();
      if (rs.isAuth === true) {
        console.log("isAuth");
        //window.location.href = "./";
      } else {
        window.location.href = "./login";
      }
    }
    verify();
  }, []);
  return (
    <div className={styles.container}>
      <SideTab />
      <ChatWindow />
    </div>
  );
}

export default ChatRoom;
