/** @format */
import meal from '../../assets/meals.jpg';
import { Fragment } from "react";
import './Header.css'
import HeaderCartButton from './HeardCartButton';

const Header = (props) => {
    return <Fragment>
        <header className='header'>
            <h1>React Meal</h1>
            <HeaderCartButton />
        </header>
        <div className='main-imag'>
            <img src={meal} alt="Meal Image" />
        </div>
  </Fragment>;
};

export default Header;
