import { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import Header from './components/Header';
import ThemeContext from './Context/ThemeContext';
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{theme: theme, setTheme : setTheme}}>
          <Header />
          <TodoList />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;