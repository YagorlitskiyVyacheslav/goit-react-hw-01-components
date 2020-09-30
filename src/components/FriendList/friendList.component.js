import styled from 'styled-components';

const Container = styled.ul`
padding: 0;
width: fit-content;
margin: 0 auto;
margin-top: 30px;
`;
Container.Li = styled.li`
  list-style-type: none;
  padding: 20px;
  width: 350px;
  display: flex;
  align-items: center;
  box-shadow: 2px 5px 16px 0px #0b325e, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  &:not(:last-child) {
      margin-bottom: 15px
  }
`;
Container.Name = styled.p`

`;
Container.IsActive = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  background-color: ${props => props.status ? 'green' : 'red'};
  border-radius: 50%;
`;
Container.Avatar = styled.img`
  margin-right: 20px;
`;

export default Container;