import { Status } from './FriendList.style';
import { Avatar } from './FriendList.style';
import { Name } from './FriendList.style';

export const Friend = ({ items: { avatar, name, isOnLine } }) => {
  return (
    <div>
      <Status>{isOnLine}</Status>
      <Avatar src={avatar} alt={name} className="avatar-friend" width="48" />
      <Name className="name">{name}</Name>
    </div>
  );
};
