import { useParams, useNavigate } from "react-router-dom";

const TodoDetail = () => {
  const { todoId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="todo-detail">
      <h2>Todo Detail</h2>
      <h4>TodoId: {todoId}</h4>

      <button onClick={() => {
        navigate("/");
      }}>
        Back to Todo
      </button>
    </div>
  );
};

export default TodoDetail;