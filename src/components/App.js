import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/Transactions'
import user from "../json/user.json";
import statisticalData from "../json/statistics.json";
import friendListData from '../json/friendListData.json';
import transationsData from '../json/transactions.json'

const App = () => {
    return (
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friendListData} />
        <Transactions items={transationsData} />
      </>
    );
}
 export default App;