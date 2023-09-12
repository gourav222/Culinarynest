import { Dashboard } from "./components/Dashboard/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Recipe from "./components/Recipes/Recipe";
import Header from "./components/Dashboard/Header";
import EachRecipeDetail from "./components/EachRecipe/EachRecipeDetail";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/recipes" element={<Recipe />}></Route>
          <Route path="/view-recipe/:id" element={<EachRecipeDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
