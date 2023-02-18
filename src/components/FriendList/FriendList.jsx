import { Friend } from './Friend';

export const FriendList = ({ items }) => {
  return (
    <ul class="friend-list">
          {items.map(items => (
          <li class="item" key={items.id}>
        <Friend items={items} />
             </li> 
      ))}
    </ul>
  );
};
