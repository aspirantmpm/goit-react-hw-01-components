import PropTypes from 'prop-types';
import { Section, Table, Thead, Tr, Th, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </Thead>

        <tbody>
          {items.map(items => (
            <Tr key={items.id}>
              <Td>{items.type}</Td>
              <Td>{items.amount}</Td>
              <Td>{items.currency}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
