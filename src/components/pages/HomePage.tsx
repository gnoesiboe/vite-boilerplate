import React, { VFC } from 'react';
import { Helmet } from 'react-helmet';
import { composeMetaTitle } from '../../utilities/pageMetaUtilities';

const HomePage: VFC = () => (
    <>
        <Helmet>
            <title>{composeMetaTitle('Home')}</title>
        </Helmet>
        @todo implement homepage
    </>
);

export default HomePage;
