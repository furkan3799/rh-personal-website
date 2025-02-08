import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, services } from "../../content_option";
import robertCooking from "../../assets/images/robert_cooking.jpeg";
import robertTent from "../../assets/images/robert_tent.jpeg";
import robertMeditating from "../../assets/images/robert_meditating.jpeg";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Über mich | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="about-hero">
          <div className="about-hero-content">
            <h1>Namaste</h1>
            <p className="lead">
              Ich bin Robert Herzog, ein leidenschaftlicher Yogalehrer und
              Ayurveda-Experte. Meine Reise begann vor vielen Jahren mit der
              Entdeckung der transformativen Kraft von Yoga und der
              ganzheitlichen Weisheit des Ayurveda.
            </p>
          </div>
        </div>

        <div className="about-sections">
          <div className="about-section">
            <div className="about-image">
              <img src={robertMeditating} alt="Robert practicing meditation" />
            </div>
            <div className="about-content">
              <h2>Yoga & Meditation</h2>
              <p>
                Als zertifizierter Yogalehrer teile ich meine Leidenschaft für
                Yoga und Meditation. Mein Ansatz verbindet traditionelle
                Yogapraxis mit modernen Lehrmethoden, um Ihnen zu helfen, Körper
                und Geist in Einklang zu bringen.
              </p>
            </div>
          </div>

          <div className="about-section reverse">
            <div className="about-image">
              <img src={robertCooking} alt="Robert preparing ayurvedic food" />
            </div>
            <div className="about-content">
              <h2>Ayurvedische Küche</h2>
              <p>
                Die ayurvedische Küche ist mehr als nur Ernährung - sie ist ein
                Weg zu ganzheitlichem Wohlbefinden. Als Meister der
                ayurvedischen Küche zeige ich Ihnen, wie Sie die Prinzipien
                dieser jahrtausendealten Wissenschaft in Ihren Alltag
                integrieren können.
              </p>
            </div>
          </div>

          <div className="about-section">
            <div className="about-image">
              <img src={robertTent} alt="Robert at an event" />
            </div>
            <div className="about-content">
              <h2>Events & Workshops</h2>
              <p>
                In meinen Events und Workshops verbinde ich Theorie und Praxis.
                Erleben Sie die transformative Kraft von Yoga und Ayurveda in
                einer entspannten Atmosphäre, lernen Sie von Gleichgesinnten und
                entdecken Sie neue Wege zu mehr Gesundheit und Wohlbefinden.
              </p>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2>Meine Angebote</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
