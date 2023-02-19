import { Statistic } from './StatisticItem';

export const Statistics = ({ items }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(items => (
          <li className="item" key={items.id}>
            <Statistic items={items} />
          </li>
        ))}
      </ul>
    </section>
  );
};
