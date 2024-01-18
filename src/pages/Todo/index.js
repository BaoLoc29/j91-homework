import { useState, useEffect } from "react";
import TodoList from "../../components/TodoList";
import TODOS from "../../data/todos";
const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setTodos(TODOS)
    }, []);
    
    return (
        <div className="todo">
            <h2>My Todo</h2>
            <TodoList todos={todos} />
        </div>
    )
}
export default Todo;