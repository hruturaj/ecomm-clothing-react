import React from "react";

import "./custom-button-style.scss";

export const CustomButton = ({
  children,
  isSignInWithGoogle,
  ...otherProps
}) => (
  <button
    className={` ${isSignInWithGoogle ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
