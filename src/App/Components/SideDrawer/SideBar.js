import React, { useState } from 'react'

import SideDrawer from './SideDrawer'

const SideBar = () => {

    const [drawerState, setDrawerState] = useState(false)

    const onOpenDrawer = () => {
        setDrawerState(!drawerState)
    }

    const onMouseEnterOpenDrawer = (e) => {
        setDrawerState(true)
    }

    const onMouseLeaveCLoseDrawer = (e) => {
        console.log(e, 'this is the event');
        setDrawerState(false)
    }

    return (
        <SideDrawer
            onMouseEnterOpenDrawer={onMouseEnterOpenDrawer}
            onMouseLeaveCLoseDrawer={onMouseLeaveCLoseDrawer}
            onOpenDrawer={onOpenDrawer}
            drawerState={drawerState}
        />
    );
}

export default SideBar;