import React from "react";
import { SignIn } from "../../components/signIn/signIn.component.jsx";
import { SignUp } from "../../components/signUp/signUp.component.jsx";

import "./signIn-signUp-style.scss";

export const signIn_signUp = () => (
  <div className="sign-in-sign-out">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);
