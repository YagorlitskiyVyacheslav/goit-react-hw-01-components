import React from "react";
import Container from './profile.component';

const Profile = ({name, tag, location, avatar, stats}) => {
    return (
      <>
        <h2>Task 1</h2>
        <Container>
          <Container.WraperInfo>
            <Container.Img src={avatar} alt="user avatar" />
            <h2>{name}</h2>
            <p>@{tag}</p>
            <p>{location}</p>
          </Container.WraperInfo>
          <Container.Ul>
            <Container.Li>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </Container.Li>
            <Container.Li>
              <span>Views</span>
              <span>{stats.views}</span>
            </Container.Li>
            <Container.Li>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </Container.Li>
          </Container.Ul>
        </Container>
      </>
    );
};

export default Profile;