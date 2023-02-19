import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  text-align: center;
  flex-direction: column;
`;
export const Item = styled.li`
  color: gray;
  border: 1px solid black;
`;
export const ItemFriend = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Status = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => {
    return props.pr ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  width: 100px;
`;
export const Name = styled.p`
  font-weight: 600;
`;
