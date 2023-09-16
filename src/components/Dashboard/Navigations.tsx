import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getRecipeByDishType,
  getRecipeByMealType,
  getRecipeByDietType,
} from "../../Store/RecipeSlice";
const Navigations = ({ setShowNavigation, showNavigation }) => {
  function closeNav() {
    if (showNavigation) setShowNavigation(false);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  function recipeByDishType(dishType) {
    let dishTypeString = "";
    for (let i = 0; i < dishType.length; i++) {
      if (dishType[i] == " ") {
        dishTypeString += "%20";
      } else {
        dishTypeString += dishType[i];
      }
    }

    dispatch(getRecipeByDishType({ dishType }));
  }

  function recipeByMealType(mealType) {
    dispatch(getRecipeByMealType({ mealType }));
  }

  function recipeByDietType(dietType) {
    dispatch(getRecipeByDietType({ dietType }));
  }
  return (
    <>
      <li>
        <Link to={"/recipes"} onClick={() => closeNav()}>
          Recipes
        </Link>
      </li>
      {/* <div className="dropdown-navigation"> */}
      <select
        id="dish-type"
        // size={4}
        onChange={(e) => {
          recipeByDishType(e.target.value);
          navigate("/recipes");
        }}
      >
        <option value="Dish Type">Dish Type</option>
        <option value="Starter">Starter</option>
        <option value="Main Course">Main Course</option>
        <option value="desserts">Desserts</option>
        <option value="Salad">Salad</option>
        <option value="Sweets">Sweets</option>
        <option value="Soup">Soup</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Sandwiches">Sandwiches</option>
        <option value="Preps">Preps</option>
        <option value="Preserve">Preserve</option>
        <option value="Pancake">Pancake</option>
        <option value="Drinks">Drinks</option>
        <option value="Bread">Bread</option>
        <option value="Biscuits and cookies">Biscuits and cookies</option>
        <option value="Condiments and sauces">Condiments and sauces</option>
      </select>

      <select
        name=""
        id="meal-type"
        onChange={(e) => {
          recipeByMealType(e.target.value);
          navigate("/recipes");
        }}
      >
        <option value="Category">Meal Type</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
        <option value="Teatime">Teatime</option>
      </select>

      <select
        name=""
        id="diet-type"
        onChange={(e) => {
          recipeByDietType(e.target.value);
          navigate("/recipes");
        }}
      >
        <option value="diet-type">Diet Type</option>
        <option value="balanced">balanced</option>
        <option value="high-fiber">high-fiber</option>
        <option value="high-protein">high-protein</option>
        <option value="low-carb">low-carb</option>
        <option value="low-fat">low-fat</option>
        <option value="low-sodium">low-sodium</option>
      </select>
      {/* </div> */}
    </>
  );
};

export default Navigations;
