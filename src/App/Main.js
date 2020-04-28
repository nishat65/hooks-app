import React, { Suspense } from "react";

import SideBar from "./Components/SideDrawer/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import { SignInCard, SignUpCard } from "./LazyLoad/LazyLoadComponents";
import LazyLoading from "./Components/Loading/LazyLoading";
import HomePage from "./Components/Home/HomePage";
import PexelBay from "./Components/Search/PexelBay";

const Main = () => {
  return (
    <>
      {/* <Suspense fallback={<p>loading....</p>}>
        <SignUpCard />
      </Suspense> */}
      <PexelBay />
      {/* <SideBar /> */}
      {/* <NavBar />
      <HomePage /> */}
    </>
  );
};

export default Main;
