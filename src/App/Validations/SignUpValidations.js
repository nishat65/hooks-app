import is from "is_js";

function isSignUpValid(data) {
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
  if (is.empty(data.confirmPassword)) {
    error.confirmPassword = "Confirmed password doesn't matched";
    valid = false;
  }
  if (!is.empty(data.email) && !is.email(data.email)) {
    error.email = "Required valid email address";
    valid = false;
  }
  if (!is.empty(data.password) && data.password.length < 5) {
    error.password = "Password length should have atleast six character";
    valid = false;
  }
  if (
    !is.empty(data.confirmPassword) &&
    data.confirmPassword != data.password &&
    data.confirmPassword.length !== data.password.length
  ) {
    console.log(
      data.confirmPassword !== data.password,
      data.confirmPassword,
      data.password,
      "data.confirmPassword !== data.password"
    );
    error.confirmPassword = "Confirmed password doesn't matched";
    valid = false;
  }
  return { valid, error };
}

export default isSignUpValid;
