import React from 'react';
import s from './Navbar.module.css'
import {routes} from "../../router";
import {NavLink} from "react-router-dom";


const Navbar = () => {

    const paths = [
        ...routes,
        {path: '/asdfsdfsdfgsdfasfas', name: '404'},
    ]

    const mappedLinks = paths.map(path => (
        <NavLink to={path.path}
                 key={path.name}
                 className={s.navLink}>
            {path.name}
        </NavLink>)
    )
    return (
        <nav>
            {mappedLinks}
        </nav>
    );
};

export default Navbar;