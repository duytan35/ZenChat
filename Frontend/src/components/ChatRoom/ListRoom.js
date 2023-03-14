import styles from "./chatRoom.module.scss";
import { useState } from "react";

console.log(styles);

function ListRoom() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.listRoom}>
      <div className={styles.search}>
        <i className={styles.iconSearch + " fa-solid fa-magnifying-glass"}></i>
        <input
          className={styles.input}
          placeholder="Search chat rooms"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.list}>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
        <div className={styles.room}>
          <div className={styles.blockAvatar}>
            <img
              className={styles.avatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatarGroup"
            />
          </div>
          <div className={styles.groupName}>
            <p className={styles.name}>Name of Group</p>
            <p className={styles.des}>Description of Group a b c 1 2 ád34</p>
          </div>
        </div>
      </div>
      <button className={styles.newChat}>➕ New chat</button>
    </div>
  );
}

export default ListRoom;
