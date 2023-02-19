// import { TransactionItem } from './TransactionItem';
import { Table } from './TransactionHistory.styled';
import { Thead } from './TransactionHistory.styled';
import { Tr } from './TransactionHistory.styled';
import { Th } from './TransactionHistory.styled';
import { Td } from './TransactionHistory.styled';
import { Section } from './TransactionHistory.styled';

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
