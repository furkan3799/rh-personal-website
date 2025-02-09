import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, events } from "../../content_option";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import CustomButton from "../../components/CustomButton";

const Event = ({ event }) => {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      window.confirm(`Möchten Sie das Event "${event.title}" wirklich löschen?`)
    ) {
      console.log("Deleting event:", event.id);
      // Here you would typically delete the event from your backend
      alert("Event gelöscht!");
      // Refresh the page or update the state
      window.location.reload();
    }
  };

  return (
    <div className="event-card">
      {isAuthenticated && (
        <div className="event-actions">
          <Link
            to={`/edit-event/${event.id}`}
            className="event-action-btn edit-btn"
            title="Event bearbeiten"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fas fa-edit"></i>
          </Link>
          <button
            onClick={handleDelete}
            className="event-action-btn delete-btn"
            title="Event löschen"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-content">
        <div className="event-text">
          <h3>{event.title}</h3>
          <p className="event-description">{event.description}</p>
          <div className="event-meta">
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
          </div>
          <div className="event-spots">
            <i className="fas fa-users"></i> {event.spots}
          </div>
        </div>
        <CustomButton to={`/event/${event.id}`}>Mehr Info</CustomButton>
      </div>
    </div>
  );
};

export const Events = () => {
  const isAuthenticated = authService.isAuthenticated();

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Events | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Events</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {isAuthenticated && (
          <Row className="mb-4">
            <Col>
              <CustomButton to="/create-event" variant="primary">
                <i className="fas fa-plus"></i> Neues Event
              </CustomButton>
            </Col>
          </Row>
        )}
        <div className="events-grid">
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
