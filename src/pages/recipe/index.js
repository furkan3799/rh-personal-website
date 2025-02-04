import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { meta, recipes } from "../../content_option";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id);

  console.log("Recipe ID:", id);
  console.log("Recipe Data:", recipe);

  // Redirect if recipe not found
  if (!recipe) {
    console.log("Recipe not found, redirecting...");
    navigate("/portfolio");
    return null;
  }

  // Convert ingredients and instructions to markdown format
  const markdownContent = `
# Zutaten

${recipe.ingredients.map((ingredient) => `- ${ingredient}`).join("\n")}

# Zubereitung

${recipe.instructions
  .map((instruction, index) => `${index + 1}. ${instruction}`)
  .join("\n")}

${recipe.tips ? `\n# Tipps\n\n${recipe.tips}` : ""}
`;

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
          <Col lg="12" className="recipe-detail-image">
            <img src={recipe.image} alt={recipe.title} />
          </Col>

          <Col lg="12" className="recipe-detail-content">
            <div className="recipe-header">
              <h1 className="recipe-title">{recipe.title}</h1>
              <p className="recipe-description">{recipe.description}</p>

              <div className="recipe-meta-detail">
                <span className="prep-time">
                  <i className="far fa-clock"></i> {recipe.prepTime} min
                </span>
                <span className="difficulty">
                  <i className="fas fa-signal"></i> {recipe.difficulty}
                </span>
                {recipe.category && (
                  <span className="category">
                    <i className="fas fa-tag"></i> {recipe.category}
                  </span>
                )}
              </div>

              {recipe.tags && (
                <div className="recipe-tags">
                  {recipe.tags.map((tag, index) => (
                    <span key={index} className="recipe-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="recipe-content-markdown">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h2 className="markdown-h1" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h3 className="markdown-h2" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="markdown-ul" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="markdown-ol" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="markdown-li" {...props} />
                  ),
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default RecipeDetail;
