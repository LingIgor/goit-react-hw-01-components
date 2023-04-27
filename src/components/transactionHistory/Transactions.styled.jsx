import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 100px;
  border: 1px solid black;
`;

export const TransactionTh = styled.th`
  font-size: 25px;
  font-weight: normal;
  background: #b9c9fe;
  border-top: 4px solid #aabcfe;
  border-bottom: 1px solid white;
  color: #039;
  padding: 15px;
  text-align: center;
`;

export const BodyTd = styled.td`
  font-size: 24px;
  border-bottom: 1px solid white;
  border-top: 1px solid transparent;
  padding: 15px 100px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    background: #e8edaa;
    box-shadow: 20px 10px 10px 10px;
  }
`;

export const Tr = styled.tr`
  &: nth-child(even) {
    background: #8fec8f;
    color: black;
  }
`;
