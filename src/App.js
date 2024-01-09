import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {isLoggedIn && <h4>Account User Is Loc</h4>}
        <button style={{ backgroundColor: isLoggedIn ? "yellow" : "red" }}
          onClick={() => { setIsLoggedIn(!isLoggedIn) }}>
          {isLoggedIn ? "Logout" : "Login"}
        </button> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;