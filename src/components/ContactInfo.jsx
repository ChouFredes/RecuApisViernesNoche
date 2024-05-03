import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
        } from "@fortawesome/free-brands-svg-icons";

export default function ContactInfo() {
    return (
<div class="social-container">
    <h3>
        Lima 757, C1073 Cdad. Autónoma de Buenos Aires
        
        Telefono: 4444-4444
    </h3>
    <h3>Seguinos!</h3>
        <a href="https://www.youtube.com/channel/UCJbgNz5VfETvD_wd4KiF2yQ"
            className="youtube">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/UADEOficial/?locale=es_LA"
            className="facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/UADEoficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
            className="X">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
            className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
    );
}