import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './todos-actions';
import formatDate from '../../helpers/date';

const initialState = [
  {
    id: 1,
    icon: '',
    name: 'Name',
    created: formatDate,
    category: 'Task',
    content: 'How are you?',
    dates: '',
    archived: true,
  },
  {
    id: 2,
    icon: '',
    name: 'Name 2',
    created: 'Oct 9, 2021',
    category: 'Random thought',
    content: 'How are you?',
    dates: '',
    archived: false,
  },

  {
    id: 3,
    icon: '',
    name: 'Name 3',
    created: formatDate,
    category: 'Random thought',
    content: 'How are you?',
    dates: '',
    archived: false,
  },
  {
    id: 4,
    icon: '',
    name: 'Name 2',
    created: formatDate,
    category: 'Idea',
    content: 'How are you?',
    dates: '',
    archived: false,
  },
];

const isModalOpen = createReducer(false, {
  [actions.toggleModal]: (state, _) => (state ? false : true),
});

const isArchivedList = createReducer(false, {
  [actions.toggleArchiveShow]: (state, _) => (state ? false : true),
});

const editedTodo = createReducer(
  {
    id: null,
    name: null,
    content: null,
    category: null,
    dates: null,
    created: null,
  },
  {
    [actions.editTodo]: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.content = payload.content;
      state.category = payload.category;
      state.dates = payload.dates;
      state.created = payload.created;
    },
  },
);

const items = createReducer(initialState, {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.updateTodo]: (state, { payload }) => {
    return [...state].map(el =>
      el.id === payload.id ? { ...el, ...payload } : el,
    );
  },
  [actions.toggleArchived]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, archived: !todo.archived } : todo,
    ),
});

export default combineReducers({
  items,
  isModalOpen,
  editedTodo,
  isArchivedList,
});
