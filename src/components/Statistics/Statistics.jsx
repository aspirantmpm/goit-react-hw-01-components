import { Statistic } from './StatisticItem';

export const Statistics = ({ items }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {items.map(items => (
          <li class="item" key={items.id}>
            <Statistic items={items} />
          </li>
        ))}
      </ul>
    </section>
  );
};
