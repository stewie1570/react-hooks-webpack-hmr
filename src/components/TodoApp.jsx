import React, { useState } from "react";
import { initialState, add, edit, remove } from "../reducers/todo.reducer.js";
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";

const TodoApp = () => {
  const [state, setState] = useState(initialState);

  return (<>
    <AddTodo
      add={text => setState(add({ text }))}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => setState(remove({ id: t.id }))}
        edit={text => setState(edit({ id: t.id, text: text }))}
      />
    ))}
  </>);
}

export default TodoApp;
