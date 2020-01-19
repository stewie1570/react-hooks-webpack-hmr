export const initialState = {
  counter: 2,
  todos: [{
    id: 1,
    text: "One",
  }, {
    id: 2,
    text: "Two",
  }],
};

export const add = action => state => {
  const newCounter = state.counter + 1;
  const newTodo = {
    id: newCounter,
    text: action.text,
  };
  return {
    counter: newCounter,
    todos: [...state.todos, newTodo],
  };
};

export const edit = action => state => {
  const idx = state.todos.findIndex(t => t.id === action.id);
  const todo = Object.assign({}, state.todos[idx]);
  todo.text = action.text;
  const todos = Object.assign([], state.todos);
  todos.splice(idx, 1, todo);
  return {
    counter: state.counter,
    todos: todos,
  };
}

export const remove = action => state => {
  const idx = state.todos.findIndex(t => t.id === action.id);
  const todos = Object.assign([], state.todos);
  todos.splice(idx, 1);
  return {
    counter: state.counter,
    todos: todos,
  };
}