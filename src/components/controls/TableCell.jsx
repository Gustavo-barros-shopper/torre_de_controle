import {VEHICLE_TYPE_MAP} from '../../data/vehicle_types';
import {storage} from '../../util/firebase';
import React, {useState, useEffect} from 'react';
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedTime} from 'react-intl';
import {Tooltip} from 'reactstrap';
import styled, {keyframes} from 'styled-components';
import Avatar from './Avatar';

export function DateCell({cell: { value } }) {
    return <FormattedDate value={value} />
}

export function CurrencyCell({cell: { value } }) {
    return <div className="text-right">
        <FormattedNumber value={ Number(value) } style="currency" currency="BRL" />
    </div>;
}

export function AddressCell({cell: { value }}) {
    return <>{value.street}, {value.street_number}</>
}

export function AddressPopupCell(table) {
    const value = table.cell.value;
    const id = `popupWithCompleteAddressForRow${table.row.id}`;
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);

    if (value.street && value.street_number) {
        return <>
            <span id={id}>
                {value.street}, {value.street_number}
            </span>
            <Tooltip hideArrow={true} placement="top" isOpen={isOpen} toggle={toggle} target={id}>
                <div className="text-left">
                    {value.street}, {value.street_number}.<br/>
                    {value.neighborhood}, {value.city} - {value.state}<br />
                    <FormattedMessage id="general.labels.zip_code" /> {value.zip_code}<br />
                    {value.complement}
                </div>
            </Tooltip>
        </>
    }
    return <span className="muted"><FormattedMessage id="general.tooltips.no_address" /></span>
}

export function TimeRangeCell(table) {
    const value = table.cell.value;
    if (value.start && value.end) return (
        <>
            <FormattedTime value={value.start} />
            {' - '}
            <FormattedTime value={value.end} />
        </>
    );
    return <>{'--:-- - --:--'}</>
}

export function AvatarDisplay({value, label}) {
    const [url, setUrl] = useState(null);
    const fakePhotoUrl = () => {
        let initials = '';
        if (label) {
            const words = label.split(' ');
            if (words.length > 0) {
                initials += words[0].substr(0, 1);
            }
            if (words.length > 1) {
                initials += words[1].substr(0, 1);
            }
        }
        if (!initials) initials = '??';
        setUrl(`https://fakeimg.pl/300/898989/fff?retina=1&text=${initials}&font=noto`);
    };
    const getPhotoUrl = async () => {
        try {
            let photoUrl = value;
            if (!value.startsWith('http')) {
                const photoRef = storage.ref(value);
                photoUrl = await photoRef.getDownloadURL();
            }
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (e) => {
                setUrl(window.URL.createObjectURL(xhr.response));
            };
            xhr.open('GET', photoUrl);
            xhr.send();
        } catch (e) {
            fakePhotoUrl();
            console.error(e);
        }
    };
    useEffect(() => {

        if (value) {
            getPhotoUrl();
        } else {
            fakePhotoUrl();
        }
    }, [value]);

    return <div className="avatar">
        <Avatar
            src={url}
            alt={label}
        />
    </div>;
}

export function AvatarCell(table) {
    const value = table.cell.value;
    const label = table.row.original.photoLabel;
    return <AvatarDisplay value={value} label={label}/>
}

export function LargeTextTruncateCell(table) {
    const value = table.cell.value;
    const id = `popupWithFullOfTruncatedText${table.row.id}`;
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);
    return <>
        <div className="text-truncate" id={id} style={{maxWidth: 100}}>
            {value}
        </div>
        <Tooltip hideArrow={true} placement="top" isOpen={isOpen} toggle={toggle} target={id}>
            {value}
        </Tooltip>
    </>
}

export function BooleanCell({cell:{value}}) {
    return value ? <FormattedMessage id="general.labels.yes" /> : <FormattedMessage id="general.labels.no" />;
}

export const TextCenterCell = styled.div`
  text-align: center;
`;

export const TextRightCell = styled.div`
  text-align: right;
`;

const PulseEffect = keyframes`
  from {
    filter: gray(1);
    opacity: 0.1;
  }
  to {
    filter: gray(0);
    opacity: 1;
  }
`;

export const BlurredText = styled.div`
  filter: blur(4px);
  transition: filter ease-in 500ms;
`;

export const BlurredPulse = styled.div`
  filter: blur(4px);
  animation: ${PulseEffect} 500ms ease-in-out 0s infinite alternate;
`;

export const UnBlurOnHoverCell = ({cell:{value}}) => {
    const [isHover, setHover] = useState(false);
    return (<div
        onMouseOver={()=>setHover(true)}
        onFocus={()=>setHover(true)}
        onMouseOut={()=>setHover(false)}
        onBlur={()=>setHover(false)}
    >
        {isHover ?
            <div>{value}</div>
            :
            <BlurredText>{value}</BlurredText>
        }
    </div>)
}
