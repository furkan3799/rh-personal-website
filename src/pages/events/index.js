import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, events } from "../../content_option";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <div className="event-card">
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
        <Link to={`/event/${event.id}`} className="event-button">
          Mehr Info
          <div className="ring one"></div>
          <div className="ring two"></div>
          <div className="ring three"></div>
        </Link>
      </div>
    </div>
  );
};

export const Events = () => {
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
        <div className="events-grid">
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
