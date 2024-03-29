// TodoList.js
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './style.css';
import TodoItem from '../TodoItem';
import TODOS from '../../data/todos';
import AddTodo from '../AddTodo';
const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);
  const [todoText, setTodoText] = useState("");
  // const navigate = useNavigate();

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, editedText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editedText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: todos.length + 1,
      todo: newTaskText,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);
  };
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={handleComplete}
            onDelete={handleDelete}
            onEditTask={handleEdit}
            todoText={todoText}
            setTodoText={setTodoText}
          />
      ))}
      <AddTodo onAddTask={handleAddTask} />
    </div>
  );
};

export default TodoList;