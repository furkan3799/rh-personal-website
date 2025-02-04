import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { meta, recipes } from "../../content_option";
import { useNavigate, useParams } from "react-router-dom";

export const EditRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingRecipe = recipes.find((r) => r.id === id);

  // Redirect if recipe not found
  useEffect(() => {
    if (!existingRecipe) {
      navigate("/portfolio");
    }
  }, [existingRecipe, navigate]);

  const [recipe, setRecipe] = useState({
    title: existingRecipe?.title || "",
    description: existingRecipe?.description || "",
    image: existingRecipe?.image || "",
    prepTime: existingRecipe?.prepTime || "",
    difficulty: existingRecipe?.difficulty || "Einfach",
    category: existingRecipe?.category || "",
    tags: existingRecipe?.tags?.join(", ") || "",
    ingredients: existingRecipe?.ingredients?.join("\n") || "",
    instructions: existingRecipe?.instructions?.join("\n") || "",
    tips: existingRecipe?.tips || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data
    const formattedRecipe = {
      id,
      ...recipe,
      prepTime: parseInt(recipe.prepTime),
      tags: recipe.tags.split(",").map((tag) => tag.trim()),
      ingredients: recipe.ingredients.split("\n").filter((line) => line.trim()),
      instructions: recipe.instructions
        .split("\n")
        .filter((line) => line.trim()),
    };

    // Here you would typically update the recipe in your backend
    console.log("Updated Recipe:", formattedRecipe);

    // For now, just log it and go back to recipes
    alert("Rezept aktualisiert!");
    navigate("/portfolio");
  };

  if (!existingRecipe) return null;

  return (
    <HelmetProvider>
      <Container className="edit-recipe-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rezept bearbeiten | {meta.title}</title>
        </Helmet>

        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Rezept bearbeiten</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row>
          <Col lg="8">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Titel</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={recipe.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Beschreibung</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={recipe.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Bild URL</Form.Label>
                <Form.Control
                  type="url"
                  name="image"
                  value={recipe.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-4">
                    <Form.Label>Zubereitungszeit (Minuten)</Form.Label>
                    <Form.Control
                      type="number"
                      name="prepTime"
                      value={recipe.prepTime}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-4">
                    <Form.Label>Schwierigkeitsgrad</Form.Label>
                    <Form.Select
                      name="difficulty"
                      value={recipe.difficulty}
                      onChange={handleChange}
                    >
                      <option>Einfach</option>
                      <option>Mittel</option>
                      <option>Schwer</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-4">
                    <Form.Label>Kategorie</Form.Label>
                    <Form.Control
                      type="text"
                      name="category"
                      value={recipe.category}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Tags (mit Komma getrennt)</Form.Label>
                <Form.Control
                  type="text"
                  name="tags"
                  value={recipe.tags}
                  onChange={handleChange}
                  placeholder="z.B. Vegetarisch, Traditionell, Österreichisch"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Zutaten (eine pro Zeile)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  name="ingredients"
                  value={recipe.ingredients}
                  onChange={handleChange}
                  required
                  placeholder="4 große Äpfel&#10;100g Butter&#10;100g Zucker"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Zubereitung (eine Anweisung pro Zeile)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  name="instructions"
                  value={recipe.instructions}
                  onChange={handleChange}
                  required
                  placeholder="Äpfel schälen und in kleine Stücke schneiden&#10;Butter schmelzen&#10;Äpfel mit Zucker und Zimt mischen"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Tipps (optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="tips"
                  value={recipe.tips}
                  onChange={handleChange}
                  placeholder="Zusätzliche Tipps und Tricks für das Rezept"
                />
              </Form.Group>

              <div className="mt-5 button-group">
                <Button type="submit" className="edit-recipe-button">
                  Rezept aktualisieren
                </Button>
                <Button
                  type="button"
                  className="cancel-button"
                  onClick={() => navigate("/portfolio")}
                >
                  Abbrechen
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default EditRecipe;
