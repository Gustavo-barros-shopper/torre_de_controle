import React from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react'

const PickerStyled = styled.div`
    ${props => !props.isOpen && 'display: none;'}
    position: absolute !important;
    bottom: 100% !important;
`

const EmojiPicker = ({
    isOpen,
    onEmojiClick,
    preload,
    skinTone
}) => {
    return (
        <PickerStyled isOpen={isOpen}>
            <Picker
                onEmojiClick={onEmojiClick}
                preload={preload}
                skinTone={skinTone}
            />
        </PickerStyled>
    )
}

export default EmojiPicker