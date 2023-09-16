import "./Recipe.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
export const RecipeCard = ({
  recipeImage,
  recipeName,
  recipeSource,
  recipeUrl,
  recipeIndex,
}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <LazyLoadImage
          effect="blur"
          src={recipeImage}
          placeholderSrc={recipeImage}
          alt=""
        />
      </div>

      <div className="recipe-details">
        <h3>{recipeName}</h3>
        <h4>{recipeSource}</h4>
      </div>

      <div className="recipe-check">
        <button className="recipe-detail-button">
          <Link to={`/view-recipe/${recipeIndex}`}>View Recipe</Link>
        </button>
      </div>
    </div>
  );
};
