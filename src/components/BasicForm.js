import useInput from "../hooks/basic-use-input";

const BasicForm = (props) => {
  const {
    inputValue: firstNameValue,
    inputIsValid: firstNameIsValid,
    inputIsInvalid: firstNameIsInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value !== "");

  const firstNameClasses = firstNameIsValid
    ? "form-control"
    : "form-control invalid";

  const {
    inputValue: lastNameValue,
    inputIsValid: lastNameIsValid,
    inputIsInvalid: lastNameIsInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value !== "");

  const lastNameClasses = lastNameIsValid
    ? "form-control"
    : "form-control invalid";

  const {
    inputValue: emailValue,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value !== "" && value.includes("@"));

  const emailClasses = emailIsValid ? "form-control" : "form-control invalid";

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
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
            value={firstNameValue}
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
            value={lastNameValue}
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
          value={emailValue}
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
