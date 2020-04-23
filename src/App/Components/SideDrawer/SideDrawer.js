import React from 'react'

import MenuList from './MenuList'

const SideDrawer = ({ 
    drawerState,
    onOpenDrawer, 
    onMouseEnterOpenDrawer, 
    onMouseLeaveOpenDrawer
 }) => {
    return (
        <div
            onMouseEnter={onMouseEnterOpenDrawer}
            onMouseLeave = {onMouseLeaveOpenDrawer}
        >
            <MenuList
                onOpenDrawer={onOpenDrawer}
                drawerState={drawerState}
            />
        </div>
    )
}

export default SideDrawer;