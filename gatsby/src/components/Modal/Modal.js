import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { AiFillCloseCircle as Exit } from '@react-icons/all-files/ai/AiFillCloseCircle';
import Portal from '../../gatsby/portal';
import { ModalStyles } from './Modal.style';

// eslint-disable-next-line react/display-name
const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
    }));

    const handleOpen = () => {
        setDisplay(true);
    };

    const handleClose = () => {
        setDisplay(false);
    };

    if (display) {
        return (
            <Portal>
                <ModalStyles>
                    <div className="modal">
                        <div className="topWrapper">
                            <h3 className="title">{props.title}</h3>{' '}
                            <button className="exitButton" tabIndex="0" type="button" onClick={handleClose}>
                                <Exit className="exitIcon" />
                            </button>
                        </div>
                        {props.children}
                    </div>
                </ModalStyles>
            </Portal>
        );
    }

    return null;
});

export default Modal;
