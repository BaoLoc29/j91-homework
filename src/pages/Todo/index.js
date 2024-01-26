import { useState, useEffect } from "react";
import TodoList from "../../components/TodoList";
import TODOS from "../../data/todos";
import './style.css'
const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setTodos(TODOS)
    }, []);
    
    return (
        <div className="todo">
            <TodoList todos={todos} />
        </div>
    )
}
export default Todo;