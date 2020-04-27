import React from "react";
import { NavLink } from "react-router-dom";

import linkConfig from "../../Router/LinksConfig";

const NavLinkConfig = () => {
  return (
    <>
      {linkConfig.map((link, index) => {
        return (
          <div className="flex-evenly-center" key={link.key}>
            <NavLink to={link.to}>{link.link}</NavLink>
            <i className={link.class}></i>
          </div>
        );
      })}
    </>
  );
};

export default NavLinkConfig;
