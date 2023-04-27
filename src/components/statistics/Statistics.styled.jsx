import styled from 'styled-components';

export const TitleImg = styled.img`
  border-radius: 50%;
  background-color: grey;
`;

export const Section = styled.section`
  box-shadow: 20px 0px 20px 0px;
  margin-top: 40px;
`;

export const Title = styled.h2`
  align-items: center;
  display: flex;
  justify-content: center;
  color: grey;
  font-size: 40px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const StatisticList = styled.ul`
  margin: 0;
  padding: 0px;
  list-style: none;
  display: flex;
  margin-top: 40px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid red;
  width: 100px;
`;
