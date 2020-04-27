import is from "is_js";

function isSignInValid(data) {
  let error = {},
    valid = true;
  if (is.empty(data.email)) {
    error.email = "Required email address";
    valid = false;
  }
  if (is.empty(data.password)) {
    error.password = "Required password";
    valid = false;
  }
  if (!is.empty(data.email) && !is.email(data.email)) {
    error.email = "Required valid email address";
    valid = false;
  }
  if (!is.empty(data.password) && data.password.length < 6) {
    error.password = "Password length should have more than six characters";
    valid = false;
  }
  return { valid, error };
}

export default isSignInValid;
