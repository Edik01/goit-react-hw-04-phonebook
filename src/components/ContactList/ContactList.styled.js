import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: none;
  background-color: tomato;
  border-radius: 5px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
`;
