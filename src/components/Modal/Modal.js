import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import selectors from '../../redux/todos/todos-selectors';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const isArchiveList = useSelector(selectors.isArchivedList);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      if (isArchiveList) {
        dispatch(todosActions.toggleArchiveShow());
      }
      dispatch(todosActions.toggleModal());

      dispatch(
        todosActions.editTodo({
          id: null,
          name: null,
          category: null,
          content: null,
        }),
      );
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.content}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
