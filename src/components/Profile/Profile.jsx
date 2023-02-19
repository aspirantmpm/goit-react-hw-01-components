import { List } from './Profile.styled';
import { Li } from './Profile.styled';
import { Avatar } from './Profile.styled';
import { Description } from './Profile.styled';
import { Section } from './Profile.styled';
import { Name } from './Profile.styled';
import { Tag } from './Profile.styled';
import { Location } from './Profile.styled';
import { Label } from './Profile.styled';
import { Quantity } from './Profile.styled';


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
