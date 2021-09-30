import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WorkingAlert = ({isWorking, setWorking}) => {
    return (
        <SweetAlert
            type="custom"
            show={isWorking}
            title={<FormattedMessage id="general.labels.await"/>}
            onConfirm={() => setWorking(false)}
            showCancel={false}
            showConfirm={false}
        >
            <LoaderWrapper>
                <div className="loader bg-white">
                    <div className="whirly-loader"/>
                </div>
            </LoaderWrapper>
        </SweetAlert>
    )
};

export default WorkingAlert;