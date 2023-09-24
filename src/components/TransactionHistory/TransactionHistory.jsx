import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.terminal}>
            <th className={css.type}>Type</th>
            <th className={css.amount}>Amount</th>
            <th className={css.currency}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.spisok}>
          {items.map(item => {
            return (
              <tr className={css.keyy} key={item.id}>
                <td className={css.iff}>{item.type}</td>
                <td className={css.iff}>{item.amount}</td>
                <td className={css.iff}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
