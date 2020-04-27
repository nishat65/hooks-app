import React from "react";
import is from "is_js";
import UseFormHook from "../../Hooks/UseLoginForm";
import ErrorForm from "./ErrorForm";

const data = {};
const error = {};

const SignInForm = () => {
  const { state, validData, onHandleChange, onHandleSubmit } = UseFormHook(
    data,
    error
  );

  return (
    <form onSubmit={onHandleSubmit} className="form-card-sign-in">
      <div className="sign-in-oauth">
        <div className="sign-in-oauth-button">
          <i className="fab fa-google"></i>
        </div>
        <div className="sign-in-oauth-button">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="sign-in-oauth-button">
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className="card-form-style">
        <input
          data-input-email
          type="text"
          name="email"
          value={state.email}
          onChange={onHandleChange}
          placeholder="Email"
        />
        <i data-user className="fas fa-user"></i>
      </div>
      {validData && validData.email && <ErrorForm alert={validData.email} />}
      <div className="card-form-style">
        <input
          data-input-password
          type="text"
          name="password"
          value={state.password}
          onChange={onHandleChange}
          placeholder="Password"
        />
        <i data-password className="fas fa-key"></i>
      </div>
      {validData && validData.password && (
        <ErrorForm alert={validData.password} />
      )}
      <input
        data-input-submit
        type="submit"
        value="Submit"
        disabled={is.not.empty(validData)}
      />
    </form>
  );
};

export default SignInForm;
