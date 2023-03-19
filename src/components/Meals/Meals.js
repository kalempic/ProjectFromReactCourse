import { Fragment } from "react";
import AvailabeleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals=()=>{
    return(
        <Fragment>
<MealsSummary/>
<AvailabeleMeals/>
        </Fragment>
    )
}
export default Meals;