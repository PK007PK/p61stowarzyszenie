import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import SectionBestPractices from '../SectionBestPractices/SectionBestPractices';
import SectionDuties from '../SectionDuties/SectionDuties';
import { AsideIndexStyle } from './AsideIndex.style';

const AsideIndex = () => (
    <AsideIndexStyle>
        <Newsletter />
        <SectionDuties className="duties" />
        <SectionBestPractices className="bestPractices" />
    </AsideIndexStyle>
);

export default AsideIndex;
