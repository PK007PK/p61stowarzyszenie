import React from 'react';
import { FaMailchimp } from '@react-icons/all-files/fa/FaMailchimp';
import { ButtonStyle } from 'src/components/Button/Button';

const CardNewsletter = ({ style, className }) => (
    <ButtonStyle full style={style} className={`${className} newsletter`} type="button">
        <div className="innerWrapper">
            <FaMailchimp className="icon" /> Newsletter
        </div>
    </ButtonStyle>
);
export default CardNewsletter;
