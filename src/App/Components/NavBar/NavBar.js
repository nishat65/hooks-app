import React from "react";
import Search from "./Search";
import SignInButton from "../SignIn/SignInButton";
import SignUpButton from "../SignUp/SignUpButton";
import BurgerButton from "./BurgerButton";

const NavBar = () => {
  return (
    <div className="p-absolute-nav nav-bar flex-center">
      <BurgerButton />
      <Search />
      <SignInButton />
      <SignUpButton />
    </div>
  );
};

export default NavBar;
