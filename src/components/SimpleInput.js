import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");

  const nameRef = useRef();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const enteredValue = nameRef.current.value;
    console.log(enteredValue);

    console.log(name);
    setName("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={name}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
