import React from 'react';
import { Pagination } from 'react-instantsearch-dom';
import CardToDo from '../CardToDo/CardToDo';
import PaginationPlaceholder from '../PaginationPlaceholder/PaginationPlaceholder';
import { SectionDutiesStyle } from './SectionDuties.style';

const SectionDuties = () => (
    <SectionDutiesStyle>
        <div className="topBar">
            <h2>Twoje obowiązki</h2>
            <div className="links">
                <a className="link">zrobione (1)</a>
                <a className="link">do zrobienia (2)</a>
                <a className="link">reset</a>
            </div>
            <div className="links">
                <a className="link">gminy</a>
                <a className="link">mieszkańcy</a>
                <a className="link">przedsiębiorstwa</a>
            </div>
        </div>
        <h3 className="heading1">Do zrobienia:</h3>
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
