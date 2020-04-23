import React, { Suspense } from 'react'

// import SideBar from './Components/SideDrawer/SideBar'
import NavBar from './Components/NavBar/NavBar'
import Routes from './Router/Routes'
import { SignInCard, SignUpCard } from './LazyLoad/LazyLoadComponents'
import LazyLoading from './Components/Loading/LazyLoading'
import HomePage from './Components/Home/HomePage'

const Main = () => {
    return (
        <>
            {/* <SideBar/> */}
            <NavBar/>
            <HomePage/>
        </>
    );
}

export default Main;