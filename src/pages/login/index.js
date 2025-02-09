import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import authService from "../../services/auth.service";
import { meta } from "../../content_option";
import CustomButton from "../../components/CustomButton";
import "./style.css";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login(formData.username, formData.password);
      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      setError(err.response?.data?.message || "Login fehlgeschlagen");
    } finally {
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Login</title>
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Login</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            {error && <div className="alert alert-danger mb-4">{error}</div>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Benutzername</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Passwort</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <CustomButton
                onClick={handleSubmit}
                variant="primary"
                disabled={loading}
              >
                {loading ? "Wird geladen..." : "Anmelden"}
              </CustomButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
