import { Outlet, Link } from "react-router-dom";
import {Fragment} from 'react';
const Navigation = () => {
  return (
    <Fragment>
      <div className = "navigation">
        <Link className = "logo-container" to = '/'>LOGO</Link>
        <div className = 'links-container'>
            <Link className = 'nav-links-container' to = '/shop'>
                SHOP
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
