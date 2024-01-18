import { useState } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Todo from './pages/Todo';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import ThemeContext from './Context/ThemeContext';
import Profile from './pages/Profile';
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Header />
          <Routes>
            <Route path="/" element={<Outlet />} >
              <Route index element={<Todo />} />
            </Route>
            <Route path="/welcome" element={<Welcome />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;