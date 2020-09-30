import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgba(255, 182, 193, 0.1);
  padding: 10px;
`;

Container.Img = styled.img`
display: block;
margin: 0 auto;
border-radius: 50%;
`;

Container.WraperInfo = styled.div`
margin: 0 auto;
text-align: center;
`;

Container.Ul = styled.ul`
display: flex;
justify-content: space-between;
padding: 0;
`;
Container.Li = styled.li`
display: flex;
flex-direction: column;
`;

export default Container;