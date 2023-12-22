import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <NameCard name="Alice" age="20" />
        <NameCard name="Bob" age="20" />
        <NameCard name="Cris" age="20" /> */}
        <NameCard name="John Doe" age={25} gender="male" />
        <NameCard name="Jane Doe" age={30} gender="female" />
      </header>
    </div>
  );
}

export default App;
