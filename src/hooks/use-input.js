import { useReducer } from "react";

const useInput = (validate) => {
  const initialInputState = {
    value: "",
    isTouched: false,
  };

  const inputReducer = (state, action) => {
    if (action.type === "INPUT") {
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    }
    if (action.type === "BLUR") {
      return {
        value: state.value,
        isTouched: true,
      };
    }

    if (action.type === "RESET") {
      return {
        value: "",
        isTouched: false,
      };
    }
    return initialInputState;
  };

  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  //   conditional checks
  const inputIsValid = validate(inputState.value);
  const inputHasError = !inputIsValid && inputState.isTouched;

  //// input handlers ////

  const inputChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    inputIsValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
