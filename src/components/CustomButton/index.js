import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CustomButton = ({
  to,
  onClick,
  children,
  variant = "default",
  className = "",
}) => {
  const buttonClass = `ac_btn btn ${
    variant === "primary" ? "button_p" : "button_h"
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className="text_2">
        <div className={buttonClass}>
          {children}
          <div className="ring one"></div>
          <div className="ring two"></div>
          <div className="ring three"></div>
        </div>
      </Link>
    );
  }

  return (
    <div className={buttonClass} onClick={onClick}>
      {children}
      <div className="ring one"></div>
      <div className="ring two"></div>
      <div className="ring three"></div>
    </div>
  );
};

export default CustomButton;
