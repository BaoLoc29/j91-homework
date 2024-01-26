import { Routes, Route } from "react-router-dom";
import './App.css';
import TodoList from "./components/TodoList";
import TodoDetail from "./pages/TodoDetail";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/:todoId" element={<TodoDetail />} />
          {/* <Route path="/" element={<Products />} />
          <Route path="/:productId" element={<ProductDetail />} /> */}
          
        </Routes>
      </header>
    </div>
  );
}

export default App;