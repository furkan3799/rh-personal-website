import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export const StickyContact = () => {
  const location = useLocation();

  // Don't show on contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <div className="sticky-contact-wrapper">
      <Link to="/contact" className="sticky-contact-btn">
        <span>Kontaktier Mich!</span>
      </Link>
    </div>
  );
};
