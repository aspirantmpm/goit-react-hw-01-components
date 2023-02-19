import PropTypes from 'prop-types';
import { Label, Percentage } from './Statistics.styled';

export const Statistic = ({ items: { label, percentage } }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </div>
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
