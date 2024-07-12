import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../assets/css/ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <div className={styles.contactFooter}>
      <div className={styles.contactInfo}>
        Lima 757, C1073 Cdad. Autónoma de Buenos Aires
        <br />
        Telefono: 4444-4444
      </div>
      <div className={styles.contactInfo}>Seguinos!</div>
      <div className={styles.socialContainer}>
        <a
          href="https://www.youtube.com/channel/UCJbgNz5VfETvD_wd4KiF2yQ"
          className={styles.socialIcon}
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.facebook.com/UADEOficial/?locale=es_LA" 
          className={styles.socialIcon}
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com/UADEoficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          className={styles.socialIcon}
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com/uadeoficial/"
          className={styles.socialIcon}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
