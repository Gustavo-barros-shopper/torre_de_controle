import React from 'react'
import ReactDOM from 'react-dom'
import SweetAlert from 'react-bootstrap-sweetalert'

const Confirmation = (cancel, confirm, config) => {
    let {
        title,
        input,
        showCancel,
        confirmBtnText,
        confirmBtnBsStyle,
        placeholder,
        validationMsg,
        validationRegex,
        content
    } = config

    if (!input) input = false
    if (!showCancel) showCancel = false

    const onConfirm = (response) => {
        confirm(response)
    }

    const domNode = document.getElementById('portal')

    return ReactDOM.createPortal(
        <SweetAlert
            input={input}
            showCancel={showCancel}
            confirmBtnText={confirmBtnText}
            confirmBtnBsStyle={confirmBtnBsStyle}
            title={title}
            placeholder={placeholder}
            validationMsg={validationMsg}
            validationRegex={validationRegex}
            onConfirm={onConfirm}
            onCancel={cancel}
        >
            <div>
                {content}
            </div>
        </SweetAlert>,
        domNode
    )
}

export default Confirmation