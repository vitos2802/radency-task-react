import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import formatDate from '../../helpers/date';

const addTodo = createAction('todos/add', ({ name, content, category }) => ({
  payload: {
    id: nanoid(),
    name,
    created: formatDate,
    content,
    category,
    dates: '',
    archived: false,
  },
}));

const editTodo = createAction(
  'todos/edit',
  ({ id, name, content, category, dates, created }) => ({
    payload: {
      id,
      name,
      content,
      category,
      dates,
      created,
    },
  }),
);

const deleteTodo = createAction('todos/delete');

const updateTodo = createAction('todo/update');
const toggleArchiveShow = createAction('todos/toggleArchiveShow');

const toggleArchived = createAction('todos/toggleArchived');
const toggleModal = createAction('todos/toggleModal');

const todosActions = {
  addTodo,
  deleteTodo,
  toggleArchived,
  toggleModal,
  editTodo,
  updateTodo,
  toggleArchiveShow,
};
export default todosActions;
