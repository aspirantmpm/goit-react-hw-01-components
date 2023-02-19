import PropTypes from 'prop-types';
import { Label, Percentage, ItemDiv } from './Statistics.styled';

export const Statistic = ({ items: { label, percentage } }) => {
  return (
    <ItemDiv>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </ItemDiv>
  );
};

Statistic.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
