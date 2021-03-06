import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator', price:'$90.99'}
  ];

  const persons = [
    {name:'Alex', company:'Google'},
    {name:'siri', company:'Apple'},
    {name:'cortana', company:'Windows'}
  ];

  const person = persons.map(prop => prop.name)
  const company = persons.map(prop => prop.company)
  console.log(person)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        {/* component from array of object */}
        <ul>
          {
            persons.map(prop => <li>{prop.name}</li>)
          }
          <li>{person[0]}</li>
        </ul>
        <p>I'm a React Person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        
        <Person name={person[0]} company={company[0]}></Person>
        <Person name={person[1]} company={company[1]}></Person>
        <Person name={person[2]} company={company[2]}></Person>

      </header>
    </div>
  );
}

function Product(params) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'Tomato',
    hight: '200px',
    weight: '200px',
    float: 'left'
  }
  const {name, price} = params.product;
  return (
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Person (props) {
  var styleT = {
    border:'1px solid orange', padding:'5px', margin:'5px'
  }
  return (
    <div style = {styleT}>
      <h2>Name: {props.name}</h2>
      <h3>Company: {props.company}</h3>
    </div>
  ) 
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={ () => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
