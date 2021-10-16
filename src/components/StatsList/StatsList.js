import { useSelector } from 'react-redux';
import selectors from '../../redux/todos/todos-selectors';
import StatsTodo from '../StatsTodo/StatsTodo';
import styles from './StatsList.module.css';

const StatsList = () => {
  const todosStats = useSelector(selectors.getTodosStats);

  return (
    <div>
      <div className={styles.head}>
        <div className={styles.box}></div>
        <div className={styles.cell}>Category</div>
        <div className={styles.cell}>Active</div>
        <div className={styles.cell}>Archived</div>
      </div>
      <ul>
        {todosStats.map(({ id, icon, category, active, archived }) => {
          return (
            <li key={id} className={styles.todo}>
              <StatsTodo
                icon={icon}
                category={category}
                active={active}
                archived={archived}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatsList;
