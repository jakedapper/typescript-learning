import React, {useState} from 'react';
import './App.css';
import Greeter from "./components/Greeter"
import ShoppingList from "./components/ShoppingList"
import Item from "./models/Item"
interface Item {
  id: number;
  product: string;
  quantity: number;
}


function App() {
  const [items, setItems] = useState<Item[]>([])
  
  return (
    <div className="App">
      <h1>HELLOW</h1>
      <Greeter person="jason"/>
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
