import { useState } from "react";
const TodoList = () => {
    // todo = todo item
    // todos = todo list
    const [todos, setTodos] = useState(["Doing homework", "Shoping", "Fishing"]);

    // cách cũ dài hơn
    // const todosLi = [];
    // todos.forEach((todo) => {
    //     todosLi.push(<li>{todo}</li>);
    // });

    // cách mới là dùng MAP
    const todosLi = todos.map((todo) => (
        <li key={todo}>
            <span>{todo}</span>
        </li>
    ));
    
    // const renderTodosLi = () => {
    //     // update
    //     // ...
    //     // return
    // };
    const handelAddTodo = () => {
        setTodos(prev => {
            return [...prev, `new todo ${prev.length + 1}`]
        })
    };

    return (
        <div className="todo-list">
            <button onClick={handelAddTodo}>Add todo</button>
            <ul>{todosLi}</ul>
        </div>
    );
};
export default TodoList;