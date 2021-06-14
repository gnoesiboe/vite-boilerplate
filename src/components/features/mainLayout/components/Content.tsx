import React, { ReactNode } from 'react';
import classNames from '../mainLayout.module.scss';

type Props = {
    children: ReactNode;
};

const Content: React.FC<Props> = ({ children }) => (
    <main className={classNames.content}>{children}</main>
);

export default Content;
