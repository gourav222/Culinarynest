import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="main-section">
        <div>
          <h2>Search your recipe by our recipe</h2>
          <button
            onClick={() => {
              navigate("/recipes");
            }}
          >
            Search Recipe by Ingridents...
          </button>
        </div>
      </div>
    </div>
  );
};
