import PropTypes from 'prop-types';
import { Name } from './Profile.styled';
import { Title } from './Profile.styled';
import { TitleText } from './Profile.styled';
import { TitleList } from './Profile.styled';
import { TitleItem } from './Profile.styled';
import { TitleImg } from 'components/statistics/Statistics.styled';

const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div>
      <Name>
        <TitleImg src={avatar} alt={username} width="150px" />
        <Title>{username}</Title>
        <TitleText>{tag}</TitleText>
        <TitleText>{location}</TitleText>
      </Name>

      <TitleList>
        <TitleItem>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </TitleItem>
        <TitleItem>
          <span>Views </span>
          <span>{stats.views}</span>
        </TitleItem>
        <TitleItem>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </TitleItem>
      </TitleList>
    </div>
  );
};

Profile.protoType = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.string,
};

export default Profile;
