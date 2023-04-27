import PropTypes from 'prop-types';

import { FriendsSpan } from './FriendsList.styled';
import { FriendsContainer } from './FriendsList.styled';

function getStatus(status) {
  return status ? 'green' : 'red';
}

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsContainer>
      <FriendsSpan
        style={{
          backgroundColor: getStatus(isOnline),
        }}
      >
        {isOnline}
      </FriendsSpan>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendsContainer>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
