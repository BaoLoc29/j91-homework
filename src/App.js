import logo from './logo.svg';
import './App.css';
// import NameCard from './components/NameCard';
// import Counter from './components/Counter';
import Student from './components/Student';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student />
      </header>
    </div>
  );
}

export default App;
