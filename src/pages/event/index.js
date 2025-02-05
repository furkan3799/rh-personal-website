import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { meta, events } from "../../content_option";

export const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

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
            <Link to="/events" className="back-button">
              ← Zurück zu den Events
            </Link>
          </Col>
        </Row>

        <Row className="event-detail">
          <Col lg="12" className="event-detail-image">
            <img src={event.image} alt={event.title} />
          </Col>

          <Col lg="12" className="event-detail-content">
            <div className="event-header">
              <h1 className="event-title">{event.title}</h1>
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
              </div>

              <div className="event-info">
                <div className="event-price-detail">
                  <i className="fas fa-ticket-alt"></i>
                  <div>
                    <h3>Preis</h3>
                    <p>{event.price}</p>
                  </div>
                </div>

                <div className="event-spots-detail">
                  <i className="fas fa-users"></i>
                  <div>
                    <h3>Verfügbarkeit</h3>
                    <p>{event.spots}</p>
                  </div>
                </div>
              </div>

              <div className="event-actions-detail">
                <Link
                  to={`/edit-event/${event.id}`}
                  className="edit-event-button"
                >
                  <i className="fas fa-edit"></i> Event bearbeiten
                </Link>
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        `Möchten Sie das Event "${event.title}" wirklich löschen?`
                      )
                    ) {
                      console.log("Deleting event:", event.id);
                      alert("Event gelöscht!");
                      navigate("/events");
                    }
                  }}
                  className="delete-event-button"
                >
                  <i className="fas fa-trash-alt"></i> Event löschen
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
