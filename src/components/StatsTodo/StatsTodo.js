import Icon from '@mdi/react';
import styles from './StatsTodo.module.css';

const StatsTodo = ({ icon, category, active, archived }) => {
  return (
    <>
      <div className={styles.icon}>
        <Icon path={icon} />
      </div>
      <div className={styles.cell}>{category}</div>
      <div className={styles.cell}>{active}</div>
      <div className={styles.cell}>{archived}</div>
    </>
  );
};

export default StatsTodo;
