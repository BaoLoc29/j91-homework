import "./style.css";
import { useState } from "react";

const EditItem = ({id,task,isEdited,hanleDelete,handleIsEdited,handleEditTask}) => {
  const [newTask,setNewTask] = useState(task);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditTask(id,newTask);
    handleIsEdited(id);
  }
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
return (
    <div className={`edit-item__container ${isEdited ? "":"hide_element"}`}>
      <form onSubmit={handleSubmit}>
        <div className="edit-input">
          <input type="text" value={newTask} onChange={handleChange}/>
        </div>
        <div className="button__container">
          <div className="button-delete">
            <button type="button" onClick={()=>hanleDelete(id)} className="button">Delete</button>
          </div>
          <div className="button-edit">
            <button type="button" onClick={()=>handleIsEdited(id)} className="button">Cancel</button>
            <button type="submit" className="button btn-save">Save</button>
          </div>
        </div>
    </form>
    </div>
    
  );
};
export default EditItem;