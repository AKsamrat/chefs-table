import { useState } from 'react';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Banner from './Components/Banner/Banner';
import Recipes from './Components/Recipies/Recipes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
