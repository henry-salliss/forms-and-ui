import { useState } from "react";

const useInputBasic = (validate) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validate(inputValue);
  const inputIsInvalid = inputTouched && !inputIsValid;

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputTouched(false);
  };

  return {
    inputValue,
    inputIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputBasic;
