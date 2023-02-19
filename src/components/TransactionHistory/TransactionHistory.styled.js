import styled from 'styled-components';

export const Section = styled.section`
  margin: 100px;
  width: 800px;
  background-color: #e7ecf2;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
`;
export const Table = styled.table`
  border-radius: 3px;
  text-align: center;
  width: 580px;
  font-size: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const Thead = styled.thead`
  background-color: #00bcd5;
  color: white;
  text-transform: uppercase;
`;
export const Tr = styled.tr`
  /* border: 3px solid black; */
  &:nth-child(2n) {
    background-color: #ecf1f3;
  }
`;
export const Th = styled.th`
  /* border: 3px solid black; */
  padding: 10px;
`;
export const Td = styled.td`
  padding: 10px;
`;
