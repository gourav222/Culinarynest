import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./EachRecipeDetail.css";
const EachRecipeDetail = () => {
  const { id }: any = useParams();
  const recipes = useSelector((state: any) => state.recipe.recipeData);
  const recipeImage = recipes[id].recipe.image;
  const recipeName = recipes[id].recipe.label;
  const recipeSource = recipes[id].recipe.source;
  const ingridentList = recipes[id].recipe.ingredientLines;
  const recipeUrl = recipes[id].recipe.url;
  return (
    <div className="each-recipe-detail">
      <div className="recipe-image-back-to-recipe">
        <button>
          <Link to={"/recipes"}>Back to the Recipe list</Link>
        </button>

        <img src={recipeImage} alt="" />
      </div>

      <div className="recipe-ingrident-details">
        <div className="recipe-name-url">
          <h3>{recipeName}</h3>
          <h4>{recipeSource}</h4>
          <button>
            <a href={recipeUrl}>Recipe Url</a>
          </button>
        </div>

        <h2 className="ingridents-heading">Ingridents</h2>

        <div className="ingrident-list">
          {ingridentList.map((ingrident, index) => {
            return (
              <div className="ingrident-list-item" key={index}>
                <span>{ingrident}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EachRecipeDetail;
