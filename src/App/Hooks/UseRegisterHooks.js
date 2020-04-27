import { useState } from "react";
import isSignUpValid from "../Validations/SignUpValidations";

const useSignInFormHook = (signData, err) => {
  const [state, setState] = useState(signData);
  const [validData, setValidData] = useState(err);

  function onHandleChange(e) {
    e.persist();
    if (state.email && state.password && state.confirmPassword) {
      isNotValidCheck(state);
    }
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    let { valid } = isSignUpValid(state);
    if (valid) {
      setState({ ...state, [e.target.name]: e.target.value });
      localStorage.setItem("form", JSON.stringify(state));
    }
  }

  function isNotValidCheck(value) {
    let { error } = isSignUpValid(value);
    setValidData(error);
  }

  return {
    state,
    validData,
    onHandleChange,
    onHandleSubmit,
  };
};

export default useSignInFormHook;
