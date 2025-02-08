import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const MobileRecipe = ({ recipe }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      window.confirm(
        `Möchten Sie das Rezept "${recipe.title}" wirklich löschen?`
      )
    ) {
      console.log("Deleting recipe:", recipe.id);
    }
  };

  return (
    <div className="mobile-recipe">
      <div className="recipe-actions">
        <Link
          to={`/edit-recipe/${recipe.id}`}
          className="recipe-action-btn edit-btn"
          title="Rezept bearbeiten"
          onClick={(e) => e.stopPropagation()}
        >
          <i className="fas fa-edit"></i>
        </Link>
        <button
          onClick={handleDelete}
          className="recipe-action-btn delete-btn"
          title="Rezept löschen"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <Link to={`/recipe/${recipe.id}`}>
        <h3>{recipe.title}</h3>
      </Link>
    </div>
  );
};

const DesktopRecipe = ({ recipe }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    if (
      window.confirm(
        `Möchten Sie das Rezept "${recipe.title}" wirklich löschen?`
      )
    ) {
      console.log("Deleting recipe:", recipe.id);
    }
  };

  return (
    <div className="recipe-card">
      <div className="recipe-actions">
        <Link
          to={`/edit-recipe/${recipe.id}`}
          className="recipe-action-btn edit-btn"
          title="Rezept bearbeiten"
        >
          <i className="fas fa-edit"></i>
        </Link>
        <button
          onClick={handleDelete}
          className="recipe-action-btn delete-btn"
          title="Rezept löschen"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-content">
        <div className="recipe-text">
          <h3 style={{ marginTop: "-30px" }}>{recipe.title}</h3>
          <p>{recipe.description}</p>
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
