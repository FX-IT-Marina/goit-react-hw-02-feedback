import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.statistics}>
        <li className={css.goodStatistics}>Good:{good}</li>
        <li className={css.neutralStatistics}>Neutral:{neutral}</li>
        <li className={css.badStatistics}>Bad:{bad}</li>
        <li className={css.totalStatistics}>Total:{total}</li>
        <li className={css.positiveStatistics}>
          Positive feedback:{positivePercentage}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
