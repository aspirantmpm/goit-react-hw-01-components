export const Statistic = ({items:{ label, percentage} }) => {
    return (
      <div>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </div>
    );
}