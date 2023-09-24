import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <li className={css.item} key={friend.id}>
              <span className={css.status}></span>
              <img
                className={css.avatar}
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
