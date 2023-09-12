import "./Recipe.css";
import plus from "../../images/plus.png";
import { useEffect, useState } from "react";
import close from "../../images/close.png";
import { RecipeCard } from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeByIngridents } from "../../Store/RecipeSlice";

const Recipe = () => {
  const [ingridentList, setIngridentList]: any = useState([]);
  const [ingrident, setIngrident] = useState("");
  const dispatch = useDispatch<any>();
  const [getRecipe, setGetRecipe] = useState(false);

  const [ingridentString, setIngridentString] = useState("");

  const getResultByIngridents = () => {
    if (ingridentList.length > 0) {
      let newString = "";

      for (let i = 0; i < ingridentList.length; i++) {
        if (i != 0) newString += "%20";
        newString += ingridentList[i];
      }
      setIngridentString(newString);
      getRecipe ? setGetRecipe(false) : setGetRecipe(true);
    }
  };
  let recipes = useSelector((state: any) => state.recipe.recipeData);
  console.log(recipes);

  useEffect(() => {
    function getAllRecipes() {
      dispatch(getRecipeByIngridents({ ingridentString }));
    }
    getAllRecipes();
  }, [getRecipe]);

  const addIngrident = (ingrident: string) => {
    let ingridentAlreadyExists = ingridentList.includes(ingrident);

    if (!ingridentAlreadyExists)
      setIngridentList([...ingridentList, ingrident]);
    else alert("Ingrident already exists");

    setIngrident("");
  };

  const removeIngridentFromList = (index: number) => {
    const newList = ingridentList.filter((items: string, i: number) => {
      return i !== index;
    });
    setIngridentList(newList);
  };
  const getIngrident = (ingridentName: string) => {
    if (ingridentName.length < 4) {
      alert("Please enter valid ingrident name.");
    }
  };

  return (
    <div className="recipe-section">
      <div className="divider"></div>

      <div className="search-section">
        <h2>
          Search Recipe by <span>Ingridents...</span>
        </h2>

        <div className="add-ingridents-to-list-section">
          <input
            type="text"
            value={ingrident}
            className="add-ingridents-to-list"
            onChange={(e) => {
              setIngrident(e.target.value);
            }}
          />
          <button
            className="add-ingridents"
            onClick={() => {
              ingrident.length < 4
                ? getIngrident(ingrident)
                : addIngrident(ingrident);
            }}
          >
            <img src={plus} alt="" />
          </button>
        </div>

        <div className="ingridentLists">
          {ingridentList.map((items: string, index: number) => {
            return (
              <div key={index} className="manage-ingridents">
                <span>{items}</span>
                <button
                  onClick={() => {
                    removeIngridentFromList(index);
                  }}
                >
                  <img src={close} alt="" />
                </button>
              </div>
            );
          })}
        </div>

        {ingridentList.length > 0 && (
          <button
            className="submit-ingridents"
            onClick={() => getResultByIngridents()}
          >
            Search
          </button>
        )}
      </div>

      <div className="recipeCard">
        {recipes && recipes.length > 0 ? (
          recipes.map((items, index) => {
            const recipeImage = items.recipe.image;
            const recipeSource = items.recipe.source;
            const recipeName = items.recipe.label;
            const recipeUrl = items.recipe.url;
            return (
              <RecipeCard
                key={index}
                recipeImage={recipeImage}
                recipeSource={recipeSource}
                recipeName={recipeName}
                recipeUrl={recipeUrl}
                recipeIndex={index}
              />
            );
          })
        ) : (
          <div>Recipe does not exists</div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
