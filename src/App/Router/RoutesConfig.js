import React from "react";

// import {
//   SignInCard,
//   SignUpCard,
//   HomePage,
// } from "../LazyLoad/LazyLoadComponents";
import SignInCard from "../Components/SignIn/SignInCard";
import SignUpCard from "../Components/SignUp/SignUpCard";

const routesConfig = [
  {
    path: "/",
    routeKey: "#home",
    exact: true,
    render: () => <div>Home</div>,
  },
  {
    path: "/allcites",
    routeKey: "#allcites",
    exact: true,
    render: () => <div>All cities</div>,
  },
  {
    path: "/career",
    routeKey: "#career",
    exact: true,
    render: () => <div>Carrer</div>,
  },
  {
    path: "/about",
    routeKey: "#about",
    exact: true,
    render: () => <div>chat</div>,
  },
  // {
  //     path: '/signin',
  //     routeKey: '#signin',
  //     exact: true,
  //     render: () => <SignInCard/>
  // },
  // {
  //     path: '/signup',
  //     routeKey: '#signup',
  //     exact: true,
  //     render: () => <SignUpCard/>
  // },
];

export default routesConfig;
