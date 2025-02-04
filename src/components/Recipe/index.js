import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const MobileRecipe = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="mobile-recipe">
      <h3>{recipe.title}</h3>
    </Link>
  );
};

const DesktopRecipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-content">
        <div className="recipe-text">
          <h3>{recipe.title}</h3>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-meta">
            <span className="prep-time">
              <i className="far fa-clock"></i> {recipe.prepTime} min
            </span>
            <span className="difficulty">
              <i className="fas fa-signal"></i> {recipe.difficulty}
            </span>
          </div>
        </div>
        <div>
          <Link to={`/recipe/${recipe.id}`} className="recipe-button">
            Zum Rezept
            <div className="ring one"></div>
            <div className="ring two"></div>
            <div className="ring three"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Recipe = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileRecipe {...props} /> : <DesktopRecipe {...props} />;
};

export default Recipe;
