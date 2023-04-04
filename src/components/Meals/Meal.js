import { Fragment } from "react";
import AvailableMeals from "./AvailableMeal";
import MealSummary from "./MealSummary";

const Meals = props => {
    return (    
        <Fragment>
            <AvailableMeals />
            <MealSummary />
        </Fragment>
    )
}

export default Meals;