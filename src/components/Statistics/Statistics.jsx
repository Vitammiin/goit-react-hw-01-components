import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      <section className={css.statistics}>
        <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
