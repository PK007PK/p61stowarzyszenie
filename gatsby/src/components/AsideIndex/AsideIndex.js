import React from 'react';
import CardNewsletter from '../CardNewsletter/CardNewsletter';
import SectionBestPractices from '../SectionBestPractices/SectionBestPractices';
import SectionDuties from '../SectionDuties/SectionDuties';
import { AsideIndexStyle } from './AsideIndex.style';

const AsideIndex = () => (
    <AsideIndexStyle>
        <CardNewsletter className="newsletter" />
        <SectionDuties className="item" />
        <SectionBestPractices className="item" />
    </AsideIndexStyle>
);

export default AsideIndex;
