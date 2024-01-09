import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import TODOS from '../../data/todos';

const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);

  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleted = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={handleCompleted}
          onDelete={handleDeleted}
        />
      ))}
    </div>
  );
};

export default TodoList;