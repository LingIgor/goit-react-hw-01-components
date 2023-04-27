import PropTypes from 'prop-types';
import { BodyTd } from './Transactions.styled';
import { Tr } from './Transactions.styled';

const Transaction = ({ id, type, amount, currency }) => {
  return (
    <Tr key={id}>
      <BodyTd>{type}</BodyTd>
      <BodyTd>{amount}</BodyTd>
      <BodyTd>{currency}</BodyTd>
    </Tr>
  );
};

export default Transaction;
