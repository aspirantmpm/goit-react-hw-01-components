import { Statistic } from './StatisticItem';
import { Section, Title, List, Item } from './Statistics.styled';

export const Statistics = ({ items }) => {
  return (
    <Section>      
      <Title>Upload stats</Title>
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


// function StatisticTitle(props) {
//   const existTitle = props.title;
//   if (existTitle) {
//     return <Title>{props.title}</Title>;
//   }
//   return <Title>Upload stats</Title>;
// }

