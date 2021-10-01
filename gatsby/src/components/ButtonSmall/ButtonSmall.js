import React from 'react';
import { ButtonSmallStyle } from './ButtonSmall.style';

const ButtonSmall = ({ children, className, bottomRounded, topRounded }) => (
    <ButtonSmallStyle bottomRounded={bottomRounded} topRounded={topRounded} className={className}>
        {children}
    </ButtonSmallStyle>
);

export default ButtonSmall;
