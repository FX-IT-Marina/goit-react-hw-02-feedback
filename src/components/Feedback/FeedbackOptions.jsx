import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <ul className={css.statisticsButton}>
        {options.map(option => (
          <li key={option}>
            <button
              className={css.button}
              name={option}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
