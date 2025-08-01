export const FriendList = ({ props, styles }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friends_list}>
        {props.map((item, index) => (
          <FriendListItem
            props={item}
            styles={styles}
            id={item.id}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

const FriendListItem = ({ props, styles }) => {
  const statusClass = props.isOnline ? "online" : "offline";
  return (
    <li className={styles.friend} key={props.id}>
      <span className={styles[`${statusClass}`]}></span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{props.name}</p>
    </li>
  );
};
