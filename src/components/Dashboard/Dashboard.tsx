import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="main-section">
        <div>
          <h1>OUR RECIPES</h1>
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
