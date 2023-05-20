import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ options, value, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {options.map(el => (
        <StatisticsItem key={el + 'key'}>
          {el}: <span>{value[el]}</span>
        </StatisticsItem>
      ))}
      <StatisticsItem>
        Total: <span>{total()}</span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: {positivePercentage()}%
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.shape(PropTypes.number).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
