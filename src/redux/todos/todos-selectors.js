import generateIcon from '../../helpers/generateIcon';
import { nanoid } from 'nanoid';

const getTodos = state => state.todos.items;
const getEditedTodos = state => state.todos.editedTodo;
const isModalOpened = state => state.todos.isModalOpen;
const isArchivedList = state => state.todos.isArchivedList;

const getActiveTodos = state => {
  const todos = getTodos(state);
  const activeTodos = todos.filter(todo => todo.archived === false);
  return activeTodos;
};

const getTodosStats = state => {
  const todos = getTodos(state);
  return todos.reduce((acc, obj) => {
    const newObj = {
      id: nanoid(),
      icon: generateIcon(obj.category),
      category: obj.category,
      active: 0,
      archived: 0,
    };

    obj.archived ? (newObj.archived += 1) : (newObj.active += 1);

    const filterAcc = acc.find(obj => obj.category === newObj.category);

    if (filterAcc && filterAcc.category === obj.category) {
      obj.archived ? (filterAcc.archived += 1) : (filterAcc.active += 1);
    } else {
      acc.push(newObj);
    }

    return acc;
  }, []);
};

const getArchivedTodos = state => {
  const todos = getTodos(state);
  const archivedTodos = todos.filter(todo => todo.archived === true);
  return archivedTodos;
};

const selectors = {
  getTodos,
  getActiveTodos,
  getTodosStats,
  getEditedTodos,
  isModalOpened,
  getArchivedTodos,
  isArchivedList,
};

export default selectors;
