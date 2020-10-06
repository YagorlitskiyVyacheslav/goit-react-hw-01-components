import React from "react";
import Container from "./friendList.component"
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
    return (
      <>
        <h2>Task 3</h2>
        <Container>
          {friends.map((friend) => {
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

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendList;