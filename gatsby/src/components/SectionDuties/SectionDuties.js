import React from 'react';
import { Pagination } from 'react-instantsearch-dom';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import CardToDo from '../CardToDo/CardToDo';
import PaginationPlaceholder from '../PaginationPlaceholder/PaginationPlaceholder';
import { SectionDutiesStyle } from './SectionDuties.style';

const SectionDuties = () => (
    <SectionDutiesStyle>
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
    </SectionDutiesStyle>
);

export default SectionDuties;
