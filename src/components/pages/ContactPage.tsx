import React from 'react';
import { composeMetaTitle } from '../../utilities/pageMetaUtilities';
import { Helmet } from 'react-helmet';

const ContactPage: React.VFC = () => (
    <>
        <Helmet>
            <title>{composeMetaTitle('Contact')}</title>
        </Helmet>
        @todo implement contact
    </>
);

export default ContactPage;
