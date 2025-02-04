import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { meta } from "../../content_option";

export const RecipeDetail = () => {
  const { id } = useParams();

  // This would typically come from your API or content_option.js
  // For now, we'll use dummy data
  const recipe = {
    id: 1,
    title: "Apfelstrudel",
    description:
      "Klassischer österreichischer Apfelstrudel mit knusprigem Strudelteig",
    image:
      "https://ayurveda-maharishi.net/wp-content/uploads/2023/03/ayurveda-food.jpg",
    prepTime: 60,
    difficulty: "Mittel",
    ingredients: [
      "4 große Äpfel",
      "100g Butter",
      "100g Zucker",
      "1 TL Zimt",
      "100g Rosinen",
      "200g Strudelteig",
    ],
    instructions: [
      "Äpfel schälen und in kleine Stücke schneiden",
      "Butter schmelzen",
      "Äpfel mit Zucker und Zimt mischen",
      "Strudelteig ausrollen",
      "Mit geschmolzener Butter bestreichen",
      "Apfelmischung auf den Teig geben",
      "Strudel einrollen",
      "Bei 180°C für 30-35 Minuten backen",
    ],
  };

  return (
    <HelmetProvider>
      <Container className="recipe-detail-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {recipe.title} | {meta.title}
          </title>
          <meta name="description" content={recipe.description} />
        </Helmet>

        <Row className="mb-5 mt-3">
          <Col lg="12">
            <Link to="/portfolio" className="back-button">
              ← Zurück zu den Rezepten
            </Link>
          </Col>
        </Row>

        <Row className="recipe-detail">
          <Col lg="6" className="recipe-detail-image">
            <img src={recipe.image} alt={recipe.title} />
          </Col>

          <Col lg="6" className="recipe-detail-content">
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>

            <div className="recipe-meta-detail">
              <span className="prep-time">
                <i className="far fa-clock"></i> {recipe.prepTime} min
              </span>
              <span className="difficulty">
                <i className="fas fa-signal"></i> {recipe.difficulty}
              </span>
            </div>

            <div className="recipe-section">
              <h2>Zutaten</h2>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="recipe-section">
              <h2>Zubereitung</h2>
              <ol className="instructions-list">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default RecipeDetail;
