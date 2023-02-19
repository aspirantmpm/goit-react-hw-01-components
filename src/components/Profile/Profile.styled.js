import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  /* gap: 25px; */
  width: 600px;
  background-color: #f3f6f9;
`;
export const Li = styled.li`
  display: flex;
  gap: 20px;
  text-align: center;
  flex-direction: column;
  width: 200px;
  font-size: 30px;
  padding: 20px;
  border: 1px solid #e8edf2;
`;

export const Description = styled.div`
  text-align: center;
  background-color: white;
  padding: 50px;
`;

export const Avatar = styled.img`
  width: 250px;
  border-radius: 125px;
  background-color: #a78872;
  margin: 0;
`;

export const Section = styled.section`
  margin: 100px;
  width: 800px;
  background-color: #e7ecf2;
  margin-left: auto;
  margin-right: auto;
  padding: 100px;
`;

export const Name = styled.p`
  color: black;
  font-size: 50px;
`;
export const Tag = styled.p`
  color: #a3adb7;
`;

export const Location = styled.p`
  color: #a3adb7;
  margin: 0;
  /* padding:50px; */
`;

export const Label = styled.span`
  color: #a3adb7;
`;

export const Quantity = styled.span`
  color: black;
`;
