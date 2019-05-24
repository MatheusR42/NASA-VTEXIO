import React from 'react';
import { FormattedMessage } from 'react-intl';

const Hello = () => {
    return (
        <h1><FormattedMessage id="store/hello" defaultMessage="Eae!" /></h1>
    )
}

export default Hello;