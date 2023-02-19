import { Status, Avatar, Name, ItemFriend } from './FriendList.style';

export const Friend = ({ items: { avatar, name, isOnline } }) => {
  return (
    <ItemFriend>
      <Status pr={isOnline}> </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ItemFriend>
  );
};
