import { useState } from 'react';
import './style.css'; // Import file CSS

const TodoItem = ({ todo, onComplete, onDelete }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onComplete(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="task">
      <div className='task-item'>
        <div className='it-task'>
          <div className='item-left'>
            <div className='check-left'>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            </div>
            <div className='name-todo'>
              <span className={isChecked ? 'completed' : ''}>
                {todo.todo}
              </span>
            </div>
          </div>
          <div className='item-right'>
            <span className='num-todo'>
              <span className='num-count'>0/1</span>
            </span>
            <div className='btn-deleted'>
              <button onClick={handleDelete}>X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
