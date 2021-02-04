import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I'm a React Person</p>
        <Person name="Alex" age="15"></Person>
        <Person name="John" age="20"></Person>
        <Person name="Siri" age="30" device="iPhone"></Person>
      </header>
    </div>
  );
}

function Person (props) {
  console.log(props)
  var styleT = {
    border:'1px solid orange', padding:'5px', margin:'5px'
  }
  return (
    <div style = {styleT}>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
    </div>
  ) 
}

export default App;
