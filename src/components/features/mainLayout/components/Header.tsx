import React, { ReactNode } from 'react';
import classNames from '../mainLayout.module.scss';

type Props = {
    children: ReactNode;
};

const Header: React.FC<Props> = ({ children }) => (
    <header className={classNames.header}>{children}</header>
);

export default Header;
