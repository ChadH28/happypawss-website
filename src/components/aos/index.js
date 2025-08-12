"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      once: true, // Run animation only once
    });
  }, []);

  return children;
};

export default AOSProvider;
