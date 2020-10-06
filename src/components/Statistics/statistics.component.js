import styled from 'styled-components';

const Container = styled.section`
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 5px 0px 15px -2px rgba(0, 0, 0, 0.78);
`;
Container.Ul = styled.ul`
  display: flex;
  padding: 0;
`;
Container.Li = styled.li`
  list-style-type: none;
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px inset rgba(28, 110, 164, 0.77);
  border-radius: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
Container.Title = styled.h2`
margin: 0;
`;
Container.Percentage = styled.span`
font-size: 24px;
`;
Container.Label = styled.span`
font-size: 20px;
margin-bottom: 10px;
`;
export default Container;