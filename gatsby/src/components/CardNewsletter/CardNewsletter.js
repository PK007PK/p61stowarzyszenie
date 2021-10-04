import React from 'react';
import { FaMailchimp } from '@react-icons/all-files/fa/FaMailchimp';
import { ButtonBigStyle } from 'src/components/ButtonBig/ButtonBig.style';

const CardNewsletter = ({ style, className }) => (
    <ButtonBigStyle style={style} className={`${className} newsletter`} type="button">
        <div className="innerWrapper">
            <FaMailchimp className="icon" /> Newsletter
        </div>
    </ButtonBigStyle>
);
export default CardNewsletter;
