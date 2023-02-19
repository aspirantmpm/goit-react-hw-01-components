import styled from 'styled-components';

export const Section = styled.section`
  margin: 100px;
  width: 800px;
  background-color: #e7ecf2;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  text-align: center;
  flex-direction: column;
  padding: 0;
`;
export const Item = styled.li`
  color: gray;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); ;
`;
export const ItemFriend = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
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
  background-color: #714e2f;
  border-radius: 10px;
`;
export const Name = styled.p`
  font-weight: 600;
  color: black;
`;
