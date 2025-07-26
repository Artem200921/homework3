import PropTypes from "prop_types";
export const Info = (props, styles, index) => {
  return (
    <div className={styles.profile} key={index}>
      <div className={styles.description}>
        <img src={props.url} alt={props.name} className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.locatio}n>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat_item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {props.followers}</span>
        </li>
        <li className={styles.stat_item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {props.views}</span>
        </li>
        <li className={styles.stat_item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
