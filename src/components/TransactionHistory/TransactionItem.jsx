export const TransactionItem = ({ items: { type, amount, currency } }) => {
  return (
    <p>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </p>
  );
};
