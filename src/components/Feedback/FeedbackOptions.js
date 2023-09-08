import PropTypes from 'prop-types';
import { StatisticsButton, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <StatisticsButton>
        {options.map(option => (
          <li key={option}>
            <Button name={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        ))}
      </StatisticsButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
