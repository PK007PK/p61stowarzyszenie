import React, { useState } from 'react';
import { ButtonStyle } from 'src/components/Button/Button';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import { FaTasks } from '@react-icons/all-files/fa/FaTasks';
import CardToDo from '../CardToDo/CardToDo';
import PaginationPlaceholder from '../PaginationPlaceholder/PaginationPlaceholder';
import { SectionDutiesStyle } from './SectionDuties.style';

const Back = () => (
    <>
        <div className="topBar">
            <h2>Twoje obowiązki</h2>
            <div className="links">
                <ButtonSmall type="button">zrobione</ButtonSmall>
                <ButtonSmall type="button">do zrobienia</ButtonSmall>
                <ButtonSmall type="button">reset</ButtonSmall>
            </div>
            <div className="links">
                <ButtonSmall type="button">gminy</ButtonSmall>
                <ButtonSmall type="button">mieszkańcy</ButtonSmall>
                <ButtonSmall type="button">biznes</ButtonSmall>
            </div>
        </div>
        <h3 className="heading1">Przypięte:</h3>
        <div className="cards">
            <CardToDo selected />
            <h3 className="heading2">Obowiązujące wymogi:</h3>
            <CardToDo />
            <CardToDo />
        </div>
        <PaginationPlaceholder />
    </>
);

const SectionDuties = ({ style, className }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={style} className={className}>
            {!open && (
                <ButtonStyle full className="openBtn" type="button" onClick={() => setOpen(!open)}>
                    <div className="innerWrapper">
                        <FaTasks className="icon" />
                        Twoje obowiązki
                    </div>
                </ButtonStyle>
            )}
            {open && (
                <SectionDutiesStyle>
                    <buttom className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </buttom>
                    <Back />
                </SectionDutiesStyle>
            )}
        </div>
    );
};

export default SectionDuties;
