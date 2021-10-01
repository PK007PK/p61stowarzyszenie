import React from 'react';
import { FaMailchimp } from '@react-icons/all-files/fa/FaMailchimp';
import { CardNewsletterStyle } from './CardNewsletter.style';

const CardNewsletter = ({ style, className }) => (
    <CardNewsletterStyle style={style} className={`${className} tile newsletter`} type="button">
        <div className="tileWrapper">
            <FaMailchimp className="icon" /> Newsletter
        </div>
    </CardNewsletterStyle>
);
export default CardNewsletter;
