export const Info = ({
  name,
  url,
  tag,
  location,
  followers,
  views,
  likes,
  styles,
  index,
}) => {
  return (
    <div className={styles.profile} key={index}>
      <img src={url} alt={name} className={styles.avatar} width="100px" />
      <div className={styles.description}>
        <div className={styles.text_content}>
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.stat_item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}> {followers}</span>
          </li>
          <li className={styles.stat_item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}> {views}</span>
          </li>
          <li className={styles.stat_item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}> {likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
