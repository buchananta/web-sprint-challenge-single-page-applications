import React, {useState} from "react";
import { Link, Route } from 'react-router-dom';
import PizzaForm from './PizzaForm';
import Ordered from './Ordered';

const App = () => {
  const [orderedData, setOrderedData] = useState();
  return (
    <>
      <header>
        <p>Tasty Food, Delicious Pizza!</p>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'./help'}>Help</Link>
        </nav>
      </header>
      <Route exact path='/'>
      <section className='main'>
        <Link to={'/pizza'}>Make a Pizza!</Link>
      </section>
      </Route>
      <Route path='/pizza'>
        <PizzaForm setOrderedData={setOrderedData} />
      </Route>
      <Route path='/ordered'>
        <Ordered data={orderedData} />
      </Route>
    </>
  );
};
export default App;
