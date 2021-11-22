import { useState } from "react";

const BasicForm = (props) => {
  // first name state
  const [firstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  // first name conditional check
  const firstNameIsValid = firstName.trim() !== "";
  const firstNameIsInvalid = firstNameTouched && !firstNameIsValid;
  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const firstNameBlurHandler = (e) => {
    setFirstNameTouched(true);
  };

  const firstNameClasses = firstNameIsValid
    ? "form-control"
    : "form-control invalid";

  // last name state
  const [lastName, setlastName] = useState("");
  const [lastNameTouched, setlastNameTouched] = useState(false);

  // last name conditional check
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameIsInvalid = lastNameTouched && !lastNameIsValid;

  const lastNameChangeHandler = (e) => {
    setlastName(e.target.value);
  };

  const lastNameBlurHandler = (e) => {
    setlastNameTouched(true);
  };

  const lastNameClasses = lastNameIsValid
    ? "form-control"
    : "form-control invalid";

  // last name state
  const [email, setemail] = useState("");
  const [emailTouched, setemailTouched] = useState(false);

  // last name conditional check
  const emailIsValid = email.trim() !== "" && email.includes("@");
  const emailIsInvalid = emailTouched && !emailIsValid;

  const emailChangeHandler = (e) => {
    setemail(e.target.value);
  };

  const emailBlurHandler = (e) => {
    setemailTouched(true);
  };

  const emailClasses = emailIsValid ? "form-control" : "form-control invalid";

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // if (firstNameIsInvalid) return;
    setFirstName("");
    setFirstNameTouched(false);
    setlastName("");
    setlastNameTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
            className={firstNameClasses}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
            className={lastNameClasses}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
          className={emailClasses}
        />
        {emailIsInvalid && (
          <p className="error-text">
            email must not be empty and must contain an @ sign
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
