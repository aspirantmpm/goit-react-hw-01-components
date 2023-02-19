import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import profile from './Profile/user';
import stat from './Statistics/data';
import friends from './FriendList/friends';
import transaction from './TransactionHistory/transactions';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Profile item={profile} />
      <Statistics items={stat} />
      <FriendList items={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
