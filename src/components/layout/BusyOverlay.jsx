import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';

const BusyOverlayContainer = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    color: rgba(0, 0, 0, 0.8);
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

export default function BusyOverlay() {
    return (
        <BusyOverlayContainer>
            <div className="loader-box"><span className="rotate dashed"/></div>
            <div>
                <FormattedMessage id="general.labels.await"/>
            </div>
        </BusyOverlayContainer>
    )
}
