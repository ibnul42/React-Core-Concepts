import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator', price:'$90.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I'm a React Person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        
        <Person name="Alex" age="15"></Person>
        <Person name="John" age="20"></Person>
        <Person name="Siri" age="30" device="iPhone"></Person>
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
      <h3>Age: {props.age}</h3>
    </div>
  ) 
}

export default App;
