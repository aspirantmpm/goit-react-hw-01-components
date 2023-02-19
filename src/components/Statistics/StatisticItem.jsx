import { Label } from './Statistics.styled';
import { Percentage } from './Statistics.styled';

export const Statistic = ({ items: { label, percentage } }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </div>
  );
};
