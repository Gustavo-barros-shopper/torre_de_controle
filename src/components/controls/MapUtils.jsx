import React from 'react';
import {FormattedNumber, useIntl} from 'react-intl';
import styled from 'styled-components';

export const MapBox = styled.div`
  position: relative;
  height: 300px;
`;

export function getCharCode(n) {
    if (n < 26) {
        return String.fromCharCode(65 + n);
    }
}

export const distanceTextValue = (distance, intl) => {
    let unit = "meter";
    let convertedDistance = distance;
    if (convertedDistance >= 1000) {
        convertedDistance = convertedDistance / 1000;
        unit = 'kilometer'
    }
    return intl.formatNumber(convertedDistance, {style: 'unit', unit: unit, unitDisplay: 'narrow', maximumFractionDigits:1});
};

export const DistanceText = ({distance}) => {
    const intl = useIntl();
    return distanceTextValue(distance, intl)
};

export const timeTextValue = (time, intl) => {
    let unit = 'second';
    let convertedTime = time;
    if (convertedTime >= 60) {
        convertedTime = convertedTime / 60;
        unit = 'minute'
    }
    if (convertedTime >= 60) {
        convertedTime = convertedTime / 60;
        unit = 'hour'
    }
    return intl.formatNumber(convertedTime, {style: 'unit', unit: unit, unitDisplay: 'long', maximumFractionDigits:1});
};

export const TimeText = ({time}) => {
    const intl = useIntl();
    return timeTextValue(time, intl);
};