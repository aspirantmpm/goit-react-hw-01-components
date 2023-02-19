import { Friend } from './Friend';
import { List, Item, Section } from './FriendList.style';

export const FriendList = ({ items }) => {
  return (
    <Section>
      <List>
        {items.map(items => (
          <Item key={items.id}>
            <Friend items={items} />
          </Item>
        ))}
      </List>
    </Section>
  );
};
