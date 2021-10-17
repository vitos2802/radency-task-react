import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import selectors from '../../redux/todos/todos-selectors';
import styles from './TodoEditor.module.css';
import searchDate from '../../helpers/searchDate';

const TodoEditor = ({ onSave }) => {
  const dispatch = useDispatch();

  const {
    name: editedName,
    category: editedCategory,
    content: editedContent,
    id: editedId,
    dates: editDates,
    created: editedCreated,
  } = useSelector(selectors.getEditedTodos);

  const [name, setName] = useState(editedName ? editedName : '');
  const [category, setCategory] = useState(
    editedCategory ? editedCategory : 'Task',
  );
  const [content, setContent] = useState(editedContent ? editedContent : '');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'content':
        setContent(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setCategory('');
    setContent('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contentDate = searchDate(content);

    editedName
      ? dispatch(
          todosActions.updateTodo({
            id: editedId,
            name,
            content,
            category,
            dates: contentDate ? `${contentDate}, ${editDates}` : editDates,
            created: editedCreated,
          }),
        )
      : dispatch(
          todosActions.addTodo({
            name,
            content,
            category,
            dates: contentDate ? contentDate : editDates,
          }),
        );

    resetForm();
    onSave();
    editedName &&
      dispatch(
        todosActions.editTodo({
          id: null,
          name: null,
          category: null,
          content: null,
        }),
      );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />

      <select
        name="category"
        className={styles.select}
        value={category}
        onChange={handleChange}
      >
        <option value="Task">Task</option>
        <option value="Random thought">Random thought</option>
        <option value="Idea">Idea</option>
      </select>

      <textarea
        name="content"
        className={styles.textarea}
        onChange={handleChange}
        placeholder="Content"
        value={content}
      ></textarea>

      <button>{!editedName ? 'Create' : 'Save'}</button>
    </form>
  );
};

export default TodoEditor;
