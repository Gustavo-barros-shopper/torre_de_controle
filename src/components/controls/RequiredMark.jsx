import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';

const RequiredSpan = styled.span`
  margin-left: 4px;
`;

export default function () {
    const intl = useIntl();
    const msg = intl.formatMessage({id:'general.tooltips.required_mark'});
    return (
        <>
            <RequiredSpan
                className="text-danger"
                id={`spanMark`}
                title={msg}
            >*</RequiredSpan>
        </>
    )
}