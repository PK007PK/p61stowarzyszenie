import React from 'react';
import CardBestPractice from '../CardBestPractice/CardBestPractice';
import PaginationPlaceholder from '../PaginationPlaceholder/PaginationPlaceholder';
import { SectionBestPracticesStyle } from './SectionBestPractices.style';

const SectionBestPractices = () => (
    <SectionBestPracticesStyle>
        <div className="topBar">
            <h2>Dobre praktyki</h2>
            <div className="links">
                <a className="link">stosuję (1)</a>
                <a className="link">mam zamiar (2)</a>
                <a className="link">reset</a>
            </div>
            <div>Twoje punkty: 123</div>
        </div>
        <div className="cards">
            <CardBestPractice />
            <CardBestPractice />
            <CardBestPractice />
        </div>
        <PaginationPlaceholder />
    </SectionBestPracticesStyle>
);

export default SectionBestPractices;
