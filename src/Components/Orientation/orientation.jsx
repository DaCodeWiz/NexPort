/** @format */

import React, { useEffect, useState } from "react";
import s from "./orientation.module.scss";

const OrientationMessage = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Function to check the device orientation
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Run the checkOrientation function initially
    checkOrientation();

    // Listen for the orientation change event
    window.addEventListener("orientationchange", checkOrientation);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!isPortrait) {
    return null; // Return null if the device is not in portrait mode
  }

  return (
    <div className={s.message}>
      <p>
        Please rotate your device to landscape mode for the ideal experience.
      </p>
    </div>
  );
};

export default OrientationMessage;
