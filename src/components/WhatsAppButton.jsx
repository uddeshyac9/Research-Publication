// src/components/WhatsAppButton.jsx

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  // Replace the phone number and message with your own details
  const phoneNumber = "7906767266"; // Include country code, e.g., "15551234567"
  const message = "Hello! I would like to get in touch.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
