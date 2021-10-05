import React, { useState } from 'react';
import { ButtonStyle } from 'src/components/Button/Button';
import { AiOutlineSolution } from '@react-icons/all-files/ai/AiOutlineSolution';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import CardBestPractice from '../CardBestPractice/CardBestPractice';
import PaginationPlaceholder from '../PaginationPlaceholder/PaginationPlaceholder';
import { SectionBestPracticesStyle } from './SectionBestPractices.style';

const Back = () => (
    <>
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
    </>
);

const SectionBestPractices = ({ style, className }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={style} className={className}>
            {!open && (
                <ButtonStyle full className="openBtn" type="button" onClick={() => setOpen(!open)}>
                    <div className="innerWrapper">
                        <AiOutlineSolution className="icon" />
                        Dobre praktyki
                    </div>
                </ButtonStyle>
            )}
            {open && (
                <SectionBestPracticesStyle>
                    <buttom className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </buttom>
                    <Back />
                </SectionBestPracticesStyle>
            )}
        </div>
    );
};

export default SectionBestPractices;
