import { useEffect, useState } from 'react';
import './App.css';

function App() {
  var friends = [`Khairul`, `Rayhan`, `Sohan`, `Aladdi`]
  var phone = [
    {name :'iPhone', price: '1500$'},
    {name :`Samsung`, price: `1500$`},
    {name :`Oppo`, price: `1500$`},
    {name :`Redmi`, price: `1500$`},
    {name :`Vibo`, price: `1500$`}
]
return (
  <div>
    {
      <Daynamic></Daynamic>
    }
    {
      <Count></Count>
    }
    {
      friends.map(names => <Person frName ={names} ></Person>)
    }
    {
      phone.map(prodDtails => <Product proName = {prodDtails}></Product>)
    }
  </div>
)
};
const Person = (props) => {
const name = props.frName;
  // console.log(name.length);
  return (<div style={{color : '#101036', height : '200px', width : '600px', border : '1px solid #101036', margin : '20px auto', textAlign : 'center' }}>
    <h3> Name = {name} </h3>;
  </div>
  )
};

const Product = (props) =>{
  let {names, prices} = props.proName;
  // console.log(names, prices);
  // console.log(props.proName.name);
  return (
    <div style={{border : '1px solid #101036', height : '200px', width: '400px', padding : '10px', margin : '10px auto', textAlign : 'center'}}>
      <h2>Produt Name :{names}</h2>
      <h3>Product Price : {prices}</h3>
    </div>
  )
}

const Count = () => {
  const[count, setCount] = useState(0);
  // const handleClick = () => setCount(count + 1);
  return (
    <div style={{margin: '20px auto', color: '#101036', textAlign: 'center'}}>
      <h1>Count : {count}</h1>
      <button onMouseMove ={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove ={()=> setCount(count-1)}>Decrese</button>
    </div>
  )
}

const Daynamic = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respo => respo.json())
    .then(data => setUser(data)
    
      )
  },[])
  return (
    <div style={{margin: '20px auto'}}>
      <h1>Dynamic User: {user.length} </h1>
    <ul>
      {
        user.map(user => <li>{user.name}</li>)
      }
    </ul>
    {
      console.log(user)
    }
    </div>
  )
}
export default App;
