import styled from 'styled-components';

const Table = styled.table`
  width: 80vw;
  margin: 0 auto;
  margin-top: 30px;
  border-spacing: 0px;
  border-collapse: collapse;
  box-sizing: border-box;
`;
Table.Thead = styled.thead`
  background-color: #20b0f2;
  color: #fff;
  & tr {
    height: 50px;
  }
  & tr th {
    border: 2px solid #b5b5b5;
    padding: 0;
  }
`;
Table.Tbody = styled.tbody`
  
`;
Table.Tr = styled.tr`
  background-color: ${(props) => props.color};
  text-align: center;
  height: 30px;
  & td {
    &:first-child {
    }
    &:last-child {
    }
    &:nth-child(2) {
        text-align: center;
    }
    padding-left: 200px;
    border: 2px solid #b5b5b5;
    padding: 0;
  }
`;

export default Table;
