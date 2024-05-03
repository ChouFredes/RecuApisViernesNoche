import React from "react";
import GoogleMapsMap from "../GoogleMapsMap"
import ContactInfo from "../ContactInfo";
import "../css/Contact.css"

export const Contact = () => {
  return  <div className="contact-container">
            <GoogleMapsMap/>
            <ContactInfo/>
          </div>;         
};
