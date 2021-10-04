import React from 'react';
import CardNewsletter from '../CardNewsletter/CardNewsletter';
import SectionBestPractices from '../SectionBestPractices/SectionBestPractices';
import SectionDuties from '../SectionDuties/SectionDuties';
import { AsideIndexStyle } from './AsideIndex.style';

const AsideIndex = () => (
    <AsideIndexStyle>
        <CardNewsletter />
        <SectionDuties className="duties" />
        <SectionBestPractices className="bestPractices" />
    </AsideIndexStyle>
);

export default AsideIndex;
