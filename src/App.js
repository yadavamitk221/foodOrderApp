/** @format */

import Header from "./components/Layouts/Header";
import { Fragment } from "react";
import Cart from './components/Cart/Cart';
import Meals from "./components/Meals/Meal";
function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
