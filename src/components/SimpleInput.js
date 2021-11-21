import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = nameTouched && !nameIsValid;

  let formIsValid = false;

  if (nameIsValid) formIsValid = true;

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameBlurHandler = (e) => {
    setNameTouched(true);
  };

  const formHandler = (e) => {
    e.preventDefault();

    // user has had chance to change input
    setNameTouched(true);

    if (!nameIsValid) return;
    // input is valid and reset
    setName("");
    setNameTouched(false);
  };

  const formClasses = nameIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
