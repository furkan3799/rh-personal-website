import React, { useState, useEffect } from "react";
import "./style.css";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>
          Diese Website verwendet Cookies, um Ihnen die bestmögliche
          Nutzererfahrung zu bieten. Durch die weitere Nutzung der Website
          stimmen Sie der Verwendung von Cookies zu.
        </p>
        <div className="cookie-buttons">
          <button onClick={handleAccept} className="cookie-button accept">
            Akzeptieren
          </button>
          <button onClick={handleDecline} className="cookie-button decline">
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
