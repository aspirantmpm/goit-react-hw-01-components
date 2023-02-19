import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px;
`;
export const Table = styled.table`
  border: 3px solid black;
  text-align: center;
`;
export const Thead = styled.thead`
  background-color: #625df580;
`;
export const Tr = styled.tr`
  border: 3px solid black;
  &:nth-child(2n) {
    background-color: #efe4ad;
  }
`;
export const Th = styled.th`
  border: 3px solid black;
`;
export const Td = styled.td`
  border: 1px solid black;
`;
