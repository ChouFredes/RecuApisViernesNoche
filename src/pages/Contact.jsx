import React from "react";
import GoogleMapsMap from "../components/GoogleMapsMap";
import "../assets/css/Contact.css";
import ContactForm from "../components/ContactForm";

export const Contact = () => {
  return (
    <div className="contact-container">
      <GoogleMapsMap />
      <ContactForm />
    </div>
  );
};