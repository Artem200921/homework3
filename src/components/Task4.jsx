export const TransactionHistory = ({ props, styles }) => {
  return (
    <div className={styles.transaction}>
      <table className={styles.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.transaction_body}>
          {props.map((item, index) => (
            <TransactionHistoryItem props={item} styles={styles} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TransactionHistoryItem = ({ props, styles }) => {
  return (
    <tr id={styles[`${props.id}`]} className={styles.transaction_item}>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
};
