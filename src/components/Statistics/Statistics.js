import PropTypes from 'prop-types';
import { BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';

import {
  StatisticsItem,
  GoodStatistics,
  NeutralStatistics,
  BadStatistics,
  TotalStatisctis,
  PositiveStatistics,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsItem>
        <GoodStatistics>
          Good: <BsEmojiHeartEyes color="green" /> {good}
        </GoodStatistics>
        <NeutralStatistics>
          Neutral: <BsEmojiNeutral color="brown" /> {neutral}
        </NeutralStatistics>
        <BadStatistics>
          Bad:
          <BsEmojiFrown color="red" /> {bad}
        </BadStatistics>
        <TotalStatisctis>Total: {total}</TotalStatisctis>
        <PositiveStatistics>
          Positive feedback: {positivePercentage}%
        </PositiveStatistics>
      </StatisticsItem>
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
