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

  // email input state
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = email.trim().includes("@") && email !== "";
  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) formIsValid = true;

  //// email input handlers ////

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  };

  const formHandler = (e) => {
    e.preventDefault();

    // user has had chance to change inputs
    setEmailTouched(true);

    if (!nameIsValid || !emailIsValid) return;

    // inputs are valid and reset
    nameReset();
    setEmail("");
    setEmailTouched(false);
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

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
          value={email}
        />
        {emailIsInvalid && (
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
