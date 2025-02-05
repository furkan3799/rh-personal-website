import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { meta, events } from "../../content_option";
import { useNavigate, useParams } from "react-router-dom";

export const EditEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const existingEvent = events.find((e) => e.id === id);

  // Redirect if event not found
  useEffect(() => {
    if (!existingEvent) {
      navigate("/events");
    }
  }, [existingEvent, navigate]);

  const [event, setEvent] = useState({
    title: existingEvent?.title || "",
    description: existingEvent?.description || "",
    image: existingEvent?.image || "",
    date: existingEvent?.date || "",
    time: existingEvent?.time || "",
    location: existingEvent?.location || "",
    price: existingEvent?.price || "",
    spots: existingEvent?.spots || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data
    const formattedEvent = {
      id,
      ...event,
    };

    // Here you would typically update the event in your backend
    console.log("Updated Event:", formattedEvent);

    // For now, just log it and go back to events
    alert("Event aktualisiert!");
    navigate("/events");
  };

  if (!existingEvent) return null;

  return (
    <HelmetProvider>
      <Container className="edit-event-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Event bearbeiten | {meta.title}</title>
        </Helmet>

        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Event bearbeiten</h1>
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
                  value={event.title}
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
                  value={event.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Bild URL</Form.Label>
                <Form.Control
                  type="url"
                  name="image"
                  value={event.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Datum</Form.Label>
                    <Form.Control
                      type="text"
                      name="date"
                      value={event.date}
                      onChange={handleChange}
                      placeholder="z.B. 15. April 2024"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Uhrzeit</Form.Label>
                    <Form.Control
                      type="text"
                      name="time"
                      value={event.time}
                      onChange={handleChange}
                      placeholder="z.B. 14:00 - 18:00"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Ort</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={event.location}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Preis</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={event.price}
                      onChange={handleChange}
                      placeholder="z.B. 89€"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Verfügbare Plätze</Form.Label>
                    <Form.Control
                      type="text"
                      name="spots"
                      value={event.spots}
                      onChange={handleChange}
                      placeholder="z.B. 10 Plätze verfügbar"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="mt-5 button-group">
                <Button type="submit" className="edit-event-button">
                  Speichern
                </Button>
                <Button
                  type="button"
                  className="cancel-button"
                  onClick={() => navigate("/events")}
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
