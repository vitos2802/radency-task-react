import { useSelector, useDispatch } from 'react-redux';

import Container from '../components/Container';
import TodoList from '../components/TodoList';
import Modal from '../components/Modal';
import TodoEditor from '../components/TodoEditor';
import StatsList from '../components/StatsList/StatsList';
import selectors from '../redux/todos/todos-selectors';
import todosActions from '../redux/todos/todos-actions';
import ArchivedList from '../components/ArchivedList/ArchivedList';

const TodosView = () => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector(selectors.isModalOpened);
  const isArchivedList = useSelector(selectors.isArchivedList);

  const toggleModal = () => {
    dispatch(todosActions.toggleModal());
  };

  return (
    <Container>
      <TodoList onClick={toggleModal} />

      <StatsList />

      {isModalOpened && (
        <Modal>
          {isArchivedList && <ArchivedList />}
          {!isArchivedList && <TodoEditor onSave={toggleModal} />}
        </Modal>
      )}
    </Container>
  );
};

export default TodosView;
