import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import Recipe from "../../components/Recipe";

export const Portfolio = () => {
  // This would typically come from your content_option.js or an API
  const recipes = [
    {
      id: 1,
      title: "Apfelstrudel",
      description:
        "Klassischer österreichischer Apfelstrudel mit knusprigem Strudelteig",
      image:
        "https://ayurveda-maharishi.net/wp-content/uploads/2023/03/ayurveda-food.jpg",
      prepTime: 60,
      difficulty: "Mittel",
    },
    {
      id: 2,
      title: "Wiener Schnitzel",
      description: "Traditionelles Wiener Schnitzel vom Kalb",
      image:
        "https://d2sj0xby2hzqoy.cloudfront.net/kenwood_germany/attachments/data/000/018/747/medium/apfelstrudel.png?1658773320",
      prepTime: 45,
      difficulty: "Einfach",
    },
    // Add more recipes as needed
  ];

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Rezepte | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Rezepte</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
