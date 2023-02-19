import PropTypes from 'prop-types';
import {
  List,
  Li,
  Avatar,
  Description,
  Section,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Section>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <Li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Li>
        <Li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Li>
        <Li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Li>
      </List>
    </Section>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
