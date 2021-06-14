import React, { ReactElement } from 'react';
import classNames from '../mainNavigation.module.scss';

type Props = {
    children: ReactElement[];
};

const NavList: React.FC<Props> = ({ children }) => (
    <nav>
        <ul className={classNames.list}>
            {React.Children.map(children, (child) => (
                <li className={classNames.listItem} key={child.key}>
                    {child}
                </li>
            ))}
        </ul>
    </nav>
);

export default NavList;
