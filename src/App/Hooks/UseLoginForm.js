import { useState } from "react";
import isSignInValid from "../Validations/SignInValidations";

const useSignInFormHook = (loginData, err) => {
  const [state, setState] = useState(loginData);
  const [validData, setValidData] = useState(err);

  function onHandleChange(e) {
    e.persist();
    if (state.email && state.password) {
      isNotValidCheck(state);
    }
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    let { valid } = isSignInValid(state);
    if (valid) {
      setState({ ...state, [e.target.name]: e.target.value });
      localStorage.setItem("form", JSON.stringify(state));
    }
  }

  function isNotValidCheck(value) {
    let { error } = isSignInValid(value);
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
