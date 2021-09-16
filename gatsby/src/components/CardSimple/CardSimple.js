import React from 'react';
import { CardSimpleStyles } from './CardSimple.styles.js';

const CardSimple = ({ title, subtitle }) => (
    <CardSimpleStyles>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </CardSimpleStyles>
);

export default CardSimple;
