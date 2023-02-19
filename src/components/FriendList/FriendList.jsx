import { Friend } from './Friend';

export const FriendList = ({ items }) => {
  return (
    <ul className="friend-list">
          {items.map(items => (
          <li className="item" key={items.id}>
        <Friend items={items} />
             </li> 
      ))}
    </ul>
  );
};
