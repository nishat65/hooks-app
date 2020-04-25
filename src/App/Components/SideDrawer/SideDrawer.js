import React from 'react'

import BurgerMenu from './BurgerMenu'
import Links from '../../Router/Links'

const SideDrawer = ({
    drawerState,
    onOpenDrawer,
    onMouseLeaveCLoseDrawer,
    onMouseEnterOpenDrawer
}) => {

    let drawerMenuState = drawerState ? 'menu-open' : 'menu-close'

    return (
        <div
            // onMouseLeave={onMouseLeaveCLoseDrawer}
            // onMouseEnter={onMouseEnterOpenDrawer}
            className={`side-drawer drawer-state-delay ${drawerMenuState}`}
        >
            <div>
                <BurgerMenu onOpenDrawer={onOpenDrawer} />
            </div>
            <div className='side-drawer-links'>
                <Links
                    drawerState={drawerState}
                />
            </div>
        </div>
    )
}

export default SideDrawer;