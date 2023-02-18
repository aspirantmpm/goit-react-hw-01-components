import { Profile } from './Profile'

export const ProfileList = ({ items }) => {
    return (
      <div>
        {items.map(item => (
          <p>
            <Profile item={item} />
          </p>
        ))}
      </div>
    );
}