import React from "react";
import Container from "./friendList.component"

const FriendList = ({friends}) => {
    return (
      <>
        <h2>Task 3</h2>
        <Container>
          {friends.map((friend) => {
            console.log(friend.isOnline);
            return (
              <Container.Li key={friend.id}>
                <Container.IsActive
                  status={friend.isOnline}
                ></Container.IsActive>
                <Container.Avatar src={friend.avatar} />
                <Container.Name>{friend.name}</Container.Name>
              </Container.Li>
            );
          })}
        </Container>
      </>
    );
}

export default FriendList;