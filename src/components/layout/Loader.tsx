import React, { Fragment , useState  } from 'react';
import rocket from '../../assets/images/rocket.gif';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    display: flex;
`

const LoaderImage = styled.div`
    display: flex;
    flex: 0 1 auto;
    background-color: #fff;
    img {
      width: 320px;
      height: 320px;
    }
`

interface Props {
    show: boolean
}

export default ({show} : Props) => {
    return (
        <Fragment>
            <LoaderWrapper className={`loader-wrapper ${show ? '' : 'loderhide'}`} >
                <LoaderImage>
                    <img
                        src={rocket}
                        alt="Foguete decolando"
                    />
                </LoaderImage>
            </LoaderWrapper>
        </Fragment>
    );
};