import React from 'react';
import { CardSimpleStyles } from './CardSimple.styles.js';

const CardSimple = ({ title, subtitle }) => (
    <CardSimpleStyles>
        <h3 className="title">{title}</h3>
        <p className="description">{subtitle}</p>
    </CardSimpleStyles>
);

export default CardSimple;
