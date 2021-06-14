import React from 'react';
import { contactRoute, homeRoute } from '../../../routing/routes';
import NavLink from './components/NavLink';
import NavList from './components/NavList';

const MainNavigation: React.VFC = () => (
    <NavList>
        <NavLink path={homeRoute}>Home</NavLink>
        <NavLink path={contactRoute}>Contact</NavLink>
    </NavList>
);

export default MainNavigation;
