import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { meta, events } from "../../content_option";
import authService from "../../services/auth.service";
import CustomButton from "../../components/CustomButton";

export const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);
  const isAuthenticated = authService.isAuthenticated();

  const handleDelete = () => {
    if (
      window.confirm(`Möchten Sie das Event "${event.title}" wirklich löschen?`)
    ) {
      console.log("Deleting event:", event.id);
      // Here you would typically delete the event from your backend
      alert("Event gelöscht!");
      navigate("/events");
    }
  };

  // Redirect if event not found
  if (!event) {
    console.log("Event not found, redirecting...");
    navigate("/events");
    return null;
  }

  return (
    <HelmetProvider>
      <Container className="event-detail-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {event.title} | {meta.title}
          </title>
          <meta name="description" content={event.description} />
        </Helmet>

        <Row className="mb-5 mt-3">
          <Col lg="12">
            <CustomButton to="/events">← Zurück zu den Events</CustomButton>
          </Col>
        </Row>

        <Row className="event-detail">
          <Col lg="12" className="event-detail-image">
            <img src={event.image} alt={event.title} />
          </Col>

          <Col lg="12" className="event-detail-content">
            <div className="event-header">
              <h1 className="event-title">{event.title}</h1>
              {isAuthenticated && (
                <div className="event-actions-detail">
                  <CustomButton to={`/edit-event/${event.id}`}>
                    <i className="fas fa-edit"></i> Bearbeiten
                  </CustomButton>
                  <CustomButton onClick={handleDelete} variant="primary">
                    <i className="fas fa-trash-alt"></i> Löschen
                  </CustomButton>
                </div>
              )}
              <p className="event-description">{event.description}</p>

              <div className="event-meta-detail">
                <span className="event-date">
                  <i className="far fa-calendar"></i> {event.date}
                </span>
                <span className="event-time">
                  <i className="far fa-clock"></i> {event.time}
                </span>
                <span className="event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </span>
                <span className="event-price">
                  <i className="fas fa-ticket-alt"></i> {event.price}
                </span>
                <span className="event-spots">
                  <i className="fas fa-users"></i> {event.spots}
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
