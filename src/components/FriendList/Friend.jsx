import PropTypes from 'prop-types';
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

Friend.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
