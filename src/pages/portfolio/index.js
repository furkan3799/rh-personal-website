import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, recipes } from "../../content_option";
import Recipe from "../../components/Recipe";
import CustomButton from "../../components/CustomButton";
import authService from "../../services/auth.service";

export const Portfolio = () => {
  const isAuthenticated = authService.isAuthenticated();
  console.log("Loaded recipes:", recipes);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rezepte | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Rezepte</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            {isAuthenticated && (
              <CustomButton to="/create-recipe" variant="primary">
                <i className="fas fa-plus"></i> Neues Rezept
              </CustomButton>
            )}
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
