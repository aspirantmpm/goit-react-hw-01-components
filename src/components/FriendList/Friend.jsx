export const Friend = ({ items: { avatar, name, isOnLine } }) => {
  return (
    <div>
      <span className="status">{isOnLine}</span>
      <img src={avatar} alt={name} className="avatar-friend" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};
