export const Statistics = ({ title, props, styles}) => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {props.map((item, index) => (
          <StatisticItem props={item} styles={styles} id={item.id} key={index} />
        ))}
      </ul>
    </div>
  );
};

const StatisticItem = ({ props, styles}) => {
  return (
    <li className={styles.item} id={styles[`${props.id}`]}>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.percentage}>{props.percentage}%</span>
    </li>
  );
};
