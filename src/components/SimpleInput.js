import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    inputIsValid: nameIsValid,
    inputHasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value !== "");

  const {
    value: emailValue,
    inputIsValid: emailIsValid,
    inputHasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@") && value !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  const formHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid) return;

    // inputs are valid and reset
    nameReset();
    emailReset();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Email must contain an @ symbol</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
