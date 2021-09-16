import React from 'react';
import { HeadingStyles } from './Heading.style.js';

const Heading = ({ title, subtitle }) => (
    <HeadingStyles>
        <h2 className="heading">{title}</h2>
        <p className="subtitle">{subtitle}</p>
    </HeadingStyles>
);

export default Heading;
