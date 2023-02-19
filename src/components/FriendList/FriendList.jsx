import { Friend } from './Friend';
import { List } from './FriendList.style';
import { Item } from './FriendList.style';
import { Section } from './FriendList.style';

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
