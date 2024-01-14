import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import TodoList from "./components/TodoList";
import Header from './components/Header';
import Footer from './components/Footer'
import Welcome from './pages/Welcome';
import ThemeContext from './Context/ThemeContext';
import Profile from './pages/Profile';
import AboutMe from './pages/AboutMe';
import Courses from './pages/Courses';
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
          <Header />
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path='/profile' element={<Profile />}>
              <Route path='' element={<AboutMe />} />
              <Route path='courses' element={<Courses />} />
            </Route>
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
          <Footer />
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;