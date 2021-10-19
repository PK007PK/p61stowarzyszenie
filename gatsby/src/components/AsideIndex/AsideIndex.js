import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import { AsideIndexStyle } from './AsideIndex.style';

const AsideIndex = () => (
    <AsideIndexStyle>
        <Newsletter className="newsletter" />
    </AsideIndexStyle>
);

export default AsideIndex;
