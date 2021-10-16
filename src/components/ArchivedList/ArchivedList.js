import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/todos/todos-selectors';
import Todo from '../Todo';
import todosActions from '../../redux/todos/todos-actions';
import styles from './ArchivedList.module.css';
import Container from '../Container';

const ArchivedList = () => {
  const archivedTodos = useSelector(selectors.getArchivedTodos);
  const dispatch = useDispatch();
  const onArchiveTodo = id => dispatch(todosActions.toggleArchived(id));
  return (
    <Container>
      <ul className={styles.list}>
        {archivedTodos.map(
          ({ id, name, created, category, content, dates, archived }) => {
            return (
              <li key={id} className={styles.todo}>
                <Todo
                  name={name}
                  created={created}
                  category={category}
                  content={content}
                  dates={dates}
                  archived={archived}
                  onArchive={() => onArchiveTodo(id)}
                />
              </li>
            );
          },
        )}
      </ul>
    </Container>
  );
};

export default ArchivedList;
