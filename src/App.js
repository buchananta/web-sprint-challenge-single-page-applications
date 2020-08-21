import React from "react";
import { useRouteMatch, Link, Route } from 'react-router-dom';
import PizzaForm from './PizzaForm';

const App = () => {
  let url = useRouteMatch();
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <p>Tasty Food, Delicious Pizza!</p>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'./help'}>Help</Link>
        </nav>
      </header>
      <Route exact path='/'>
      <section>
        <Link to={'/pizza'}>Make a Pizza!</Link>
      </section>
      </Route>
      <Route path='{url}/pizza/'>
        <PizzaForm />
      </Route>
    </>
  );
};
export default App;
