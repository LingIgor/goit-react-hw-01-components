import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsList.styled';
import { FriendsList } from './FriendsList.styled';

function getColorStatus(status) {
  return status ? 'green 20px 10px 30px 5px;' : 'red 20px 10px 30px 5px;';
}

const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem
          key={id}
          style={{
            boxShadow: getColorStatus(isOnline),
          }}
        >
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendsItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
