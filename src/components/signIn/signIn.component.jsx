import React from "react";

import { FormInput } from "../form-input/form-input.component.jsx";
import { CustomButton } from "../custom-button/custom-buttom.component.jsx";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import "./signIn-style.scss";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    var { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an Account.</h2>
        <h5>Sign in with your Email and Password</h5>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            required
            label="Email"
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isSignInWithGoogle>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
