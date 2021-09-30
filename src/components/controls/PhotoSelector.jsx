import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import {useFormikContext} from 'formik';

const HiddenFileInput = styled.input`
  display: none;
  width: 0;
  height: 0;
`;

const PhotoSelector = props => {
    const MAX_FILE_SIZE = 15 * 1024 * 1024;
    const EXTENSIONS = ['.jpg', '.png', '.gif', '.jpeg'];
    const intl = useIntl();
    const FILE_SIZE_ERROR = intl.formatMessage({id:'general.form_errors.file_too_big'});
    const SELECT_PHOTO = intl.formatMessage({id:'general.labels.select_photo'});
    const {setFieldValue} = useFormikContext();

    const onAddPhoto = (files, dataUrls) => {
        setFieldValue(props.name, files[0]);
    };

    return (
        <>
            <ImageUploader
                withIcon={false}
                withPreview={true}
                label=""
                buttonText={SELECT_PHOTO}
                onChange={onAddPhoto}
                imgExtension={EXTENSIONS}
                maxFileSize={MAX_FILE_SIZE}
                fileSizeError={FILE_SIZE_ERROR}
            />
            <HiddenFileInput {...props} type="file" />
        </>
    )
};

export default PhotoSelector;