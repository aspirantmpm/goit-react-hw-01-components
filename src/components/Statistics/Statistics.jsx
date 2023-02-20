import PropTypes from 'prop-types';

import { Statistic } from './StatisticItem';
import { Section, Title, List, Item } from './Statistics.styled';

export const Statistics = ({ title, items }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {items.map(items => (
          <Item key={items.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Statistic items={items} />
          </Item>
        ))}
      </List>
    </Section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistic.propTypes = {
  title: PropTypes.string,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
