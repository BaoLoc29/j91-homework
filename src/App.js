import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
// import Counter from './components/Counter';
// import Student from './components/Student';
import LoginForm from './components/LoginForm';
import TotalAge from "./components/TotalAge";
function App() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 19, gender: "female" },
    { name: "John", age: 29, gender: "male" },
    { name: "Cris", age: 19, gender: "male" },
  ]);

  const increaseAge = (name) => {
    console.log(name);
    // name = Alice
    const newUsers = [...users];
    newUsers.forEach((user, index) => {
      if (user.name === name) {
        users[index].age += 1;
      }
    });

    setUsers(newUsers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* không nên vì sau này dữ liệu càng ngày càng nhiều*/}
        {/* <NameCard name="Alice" age={19} gender="female"/>
        <NameCard name="John" age={29} gender="male"/>
        <NameCard name="Cris" age={19} gender="male"/> */}

        {/* Nên làm*/}
        <NameCard user={users[0]} increaseAge={increaseAge} />
        <NameCard user={users[1]} increaseAge={increaseAge} />
        <NameCard user={users[2]} increaseAge={increaseAge} />
        <TotalAge users={users}/>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
