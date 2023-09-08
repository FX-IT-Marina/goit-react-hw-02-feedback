import styled from 'styled-components';

export const StatisticsButton = styled.ul`
  display: flex;
  gap: 40px;
`;

export const Button = styled.button`
  font-size: 30px;
  border-radius: 25px 40px;
  padding: 5px;
  background-color: rgb(193, 193, 193);
  border: 4px solid rgb(49, 49, 49);
  width: 130px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: rgb(59, 59, 59);
  }
`;
