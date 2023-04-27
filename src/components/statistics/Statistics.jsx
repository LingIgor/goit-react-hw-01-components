import PropTypes from 'prop-types';
import { Section } from './Statistics.styled';
import { Title } from './Statistics.styled';
import { StatisticList } from './Statistics.styled';
import { StatisticItem } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}

      <StatisticList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatisticItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
