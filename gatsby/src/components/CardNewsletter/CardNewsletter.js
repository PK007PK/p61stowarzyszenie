import React, { useRef } from 'react';
import { FaMailchimp } from '@react-icons/all-files/fa/FaMailchimp';
import Modal from 'src/components/Modal/Modal';
import FormMailchimp from 'src/components/FormMailchimp/FormMailchimp';
import { CardNewsletterStyle } from './CardNewsletter.style';

const CardNewsletter = () => {
    const modalRef2 = useRef();
    <CardNewsletterStyle className="tile newsletter" type="button" onClick={() => modalRef2.current.openModal()}>
        <div className="tileWrapper">
            <FaMailchimp className="icon" /> Newsletter
        </div>
    </CardNewsletterStyle>;
    <Modal ref={modalRef2} title="Newsletter">
        <FormMailchimp />
    </Modal>;
};

export default CardNewsletter;
