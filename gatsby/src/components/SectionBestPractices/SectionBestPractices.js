import React from 'react';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import CardBestPractice from '../CardBestPractice/CardBestPractice';
import PaginationPlaceholder from '../PaginationPlaceholder/PaginationPlaceholder';
import { SectionBestPracticesStyle } from './SectionBestPractices.style';

const SectionBestPractices = () => (
    <SectionBestPracticesStyle>
        <div className="topBar">
            <h2>Dobre praktyki</h2>
            <div className="links">
                <ButtonSmall className="link">stosuję</ButtonSmall>
                <ButtonSmall className="link">mam zamiar</ButtonSmall>
                <ButtonSmall className="link">reset</ButtonSmall>
            </div>
            <h3 className="points">Twoje punkty: 123</h3>
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
