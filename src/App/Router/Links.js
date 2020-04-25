import React from 'react'
import { NavLink } from 'react-router-dom'

import LinkConfig from './LinksConfig'

const Links = ({ drawerState }) => {

    let iconStyle = !drawerState ? { marginLeft: '60px' } : { marginLeft: '0' }


    return (
        <>
            <ul className='link-list'>
                {
                    LinkConfig.map((linkConfig) => {
                        return (
                            <li
                                className='padding-all d-flex text-center'
                                key={linkConfig.key}>
                                <div>
                                    <NavLink
                                        to={linkConfig.to}
                                    >
                                        {linkConfig.link}

                                    </NavLink>
                                </div>
                                <div><i
                                    style={iconStyle}
                                    title={linkConfig.title}
                                    className={linkConfig.class}
                                ></i></div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Links;