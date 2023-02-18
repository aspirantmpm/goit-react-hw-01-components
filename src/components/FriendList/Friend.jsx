export const Friend = ({ items: { avatar, name, isOnLine } }) => {
  return (
    <div>
      <span class="status">{isOnLine}</span>
      <img src={avatar} alt={name} class="avatar-friend" width="48" />
      <p class="name">{name}</p>
    </div>
  );
};
