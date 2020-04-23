import React from 'react'

import HeaderQuotes from './HeaderQuotes'
import CountDown from './CountDown';
const Header = () => {
    return (
        <React.Fragment>
            <HeaderQuotes />
            <CountDown />
            <div className='home-header-box' />
        </React.Fragment>
    );
}

export default Header;