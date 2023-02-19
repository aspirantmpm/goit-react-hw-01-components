import { Statistic } from './StatisticItem';
import { Section } from './Statistics.styled';
import { Title } from './Statistics.styled';
import { List } from './Statistics.styled';
import { Item } from './Statistics.styled';

export const Statistics = ({ items }) => {
  return (
    <Section>
      <Title>Upload stats</Title>

      <List>
        {items.map(items => (
          <Item key={items.id}>
            <Statistic items={items} />
          </Item>
        ))}
      </List>
    </Section>
  );
};
