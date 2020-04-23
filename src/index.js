import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store } from './Store/Store'
import './index.css';
import App from './App';
// import axios from 'axios';
// import * as serviceWorker from './serviceWorker';

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkudW5kZXJ3b3Jrcy50aHMuYWdlbmN5XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTg3MTA2MjA5LCJleHAiOjE1ODcyMTQyMDksIm5iZiI6MTU4NzEwNjIwOSwianRpIjoiQkN5d1BaOXdTYnRnV0RYMiIsInN1YiI6IjljYmE4OWUxLTM5ZTEtNDAxMy1hNDEzLTI2NDA4NmZkZDVmOCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.4CYm97UYjDW9lCVA0WDGH5N-ijmybdhXMMpn58qi6bA"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
