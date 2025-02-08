import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import robertCooking from "../../assets/images/robert_cooking.jpeg";
import robertTent from "../../assets/images/robert_tent.jpeg";
import robertMeditating from "../../assets/images/robert_meditating.jpeg";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="order-1 order-lg-2 h-100 home-carousel">
            <Carousel fade interval={3000} pause={false} controls={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={robertMeditating}
                  alt="Robert meditating"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={robertCooking}
                  alt="Robert cooking"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={robertTent}
                  alt="Robert at an event"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <div className="d-lg-block">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x d-none d-lg-block">
                    {introdata.description}
                  </p>
                </div>
                <div className="intro_btn-action pb-5">
                  <Link to="/contact" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      Kontaktier Mich!
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      Über mich
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/portfolio" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      Rezepte
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/events" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      Events
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
