import React from 'react'

import BurgerMenu from './BurgerMenu'
import Links from '../../Router/Links'

const MenuList = ({ onOpenDrawer, drawerState }) => {

    drawerState = drawerState ? 'menu-open' : 'menu-close'

    return (
        <ul className={`side-drawer-fixed drawer-state-delay ${drawerState}`}>
            <BurgerMenu onOpenDrawer={onOpenDrawer} />
            <Links />
        </ul>
    );
}

export default MenuList;