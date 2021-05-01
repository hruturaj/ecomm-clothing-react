import React from "react";

import "./custom-button-style.scss";

export const CustomButton = ({
  children,
  isSignInWithGoogle,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isSignInWithGoogle ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
