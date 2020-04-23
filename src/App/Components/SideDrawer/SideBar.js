import React , { useState } from 'react'

import SideDrawer from './SideDrawer'

const SideBar = () => {

    const [drawerState, setDrawerState] = useState(false)

    const onOpenDrawer = () => {
        setDrawerState(!drawerState)
    }

    const onMouseEnterOpenDrawer = (e) => {
        setDrawerState(true)
    }

    const onMouseLeaveOpenDrawer = () => {
        setDrawerState(false)
    }

    return ( 
        <SideDrawer
            onMouseEnterOpenDrawer={onMouseEnterOpenDrawer}
            onMouseLeaveOpenDrawer={onMouseLeaveOpenDrawer}
            onOpenDrawer={onOpenDrawer}
            drawerState={drawerState}
        />
     );
}
 
export default SideBar;