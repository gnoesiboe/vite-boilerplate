import React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import classNames from '../mainNavigation.module.scss';

type Props = {
    path: string;
    children: string;
};

const NavLink: React.FC<Props> = ({ path, children }) => (
    <ReactRouterNavLink
        to={path}
        className={classNames.link}
        activeClassName={classNames.linkIsActive}
        exact
    >
        {children}
    </ReactRouterNavLink>
);

export default NavLink;
