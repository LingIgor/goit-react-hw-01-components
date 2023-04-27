import styled from 'styled-components';

export const Name = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 50px;
  padding-top 30px;
`;

export const Title = styled.h1`
  color: black;
  font-size: 50px;
  margin: 0;
`;

export const TitleText = styled.p`
  color: grey;
  font-size: 30px;
  margin: 0;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const TitleList = styled.ul`
  list-style: none;
  display: flex;

  background-color: #d6cdcd;
  padding: 0;
  border: 1px solid black;
  margin: 0;
`;

export const TitleItem = styled.li`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  font-size: 25px;
`;
