import React from 'react';

const BurgerMenu = ({ onOpenDrawer }) => {
    return (
        <li className="burger-menu-list " onClick={onOpenDrawer}>
            <div className='list-margin'>
                <div className='burger-menu-icon'></div>
            </div>
            <div className='list-margin type-second'>
                <div className='burger-menu-icon'></div>
            </div>
            <div className='list-margin type-third'>
                <div className='burger-menu-icon'></div>
            </div>
        </li>
    );
}

export default BurgerMenu;