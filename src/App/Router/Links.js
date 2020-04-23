import React from 'react'
import { NavLink } from 'react-router-dom'

import LinkConfig from './LinksConfig'

const Links = () => {
    return (
        <li className="side-drawer-list">
            <div className="side-profile-card"></div>
            {
                LinkConfig.map((linkConfig) => {
                    return (
                        <div key={linkConfig.key} className="side-drawer-link">
                            <i className={linkConfig.class}></i>
                            <NavLink
                                activeClassName={linkConfig.activeClassName}
                                className="link-style"
                                to={linkConfig.to}
                            >{linkConfig.link}
                            </NavLink>
                        </div>
                    )
                })
            }
        </li>
    );
}

export default Links;