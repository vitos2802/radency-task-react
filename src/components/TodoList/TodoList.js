import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mdi/react';
import { mdiPackageDown, mdiDelete } from '@mdi/js';
import todosActions from '../../redux/todos/todos-actions';
import Button from '../Button';
import Todo from '../Todo';
import selectors from '../../redux/todos/todos-selectors';

import styles from './TodoList.module.css';

const TodoList = ({ onClick }) => {
  const todos = useSelector(selectors.getActiveTodos);

  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(todosActions.toggleModal());
    dispatch(todosActions.toggleArchiveShow());
  };

  const onDeleteTodo = id => dispatch(todosActions.deleteTodo(id));
  const onArchiveTodo = id => dispatch(todosActions.toggleArchived(id));
  const onEditTodo = ({ id, name, content, category, created, dates }) => {
    dispatch(todosActions.toggleModal());
    dispatch(
      todosActions.editTodo({ id, name, content, category, created, dates }),
    );
  };
  return (
    <div className={styles.list}>
      <div className={styles.listHead}>
        <div className={styles.icon}></div>
        <div className={styles.cell}>Name</div>
        <div className={styles.cell}>Created</div>
        <div className={styles.cell}>Category</div>
        <div className={styles.cell}>Content</div>
        <div className={styles.cell}>Dates</div>
        <div className={styles.btnBox}>
          <Button onClick={toggleModal}>
            <Icon path={mdiPackageDown} color="#fff" />
          </Button>
          <span className={styles.icon}>
            <Icon path={mdiDelete} color="#fff" />
          </span>
        </div>
      </div>
      <ul>
        {todos.map(
          ({ id, name, created, category, content, dates, archived }) => {
            return (
              <li key={id} className={styles.item}>
                <Todo
                  name={name}
                  created={created}
                  category={category}
                  content={content}
                  dates={dates}
                  archived={archived}
                  onDelete={() => onDeleteTodo(id)}
                  onArchive={() => onArchiveTodo(id)}
                  onEdit={() =>
                    onEditTodo({ id, name, category, content, created, dates })
                  }
                />
              </li>
            );
          },
        )}
      </ul>
      <button className={styles.createBtn} type="button" onClick={onClick}>
        Create todo
      </button>
    </div>
  );
};

export default TodoList;
