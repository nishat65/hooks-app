import React from 'react'

// import { SignInCard, SignUpCard } from '../LazyLoad/LazyLoadComponents'
import SignInCard from '../Components/SignIn/SignInCard'
import SignUpCard from '../Components/SignUp/SignUpCard'

const routesConfig = [
    {
        path: '/',
        routeKey: '#home',
        exact: true,
        render: () => <div>Home</div>
    },
    {
        path: '/allcites',
        routeKey: '#allcites',
        exact: true,
        render: () => <div>All cities</div>
    },
    {
        path: '/carrer',
        routeKey: '#carrer',
        exact: true,
        render: () => <div>Carrer</div>
    },
    {
        path: '/finance',
        routeKey: '#finance',
        exact: true,
        render: () => <div>Finance</div>
    },
    {
        path: '/warehouse',
        routeKey: '#warehouse',
        exact: true,
        render: () => <div>Warehouse</div>
    },
    {
        path: '/chat',
        routeKey: '#chat',
        exact: true,
        render: () => <div>chat</div>
    },
    {
        path: '/admin',
        routeKey: '#admin',
        exact: true,
        render: () => <div>Admin</div>
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
]

export default routesConfig

