import React from 'react';
import { CardToDoStyle } from './CardToDo.style';

const CardToDo = ({ selected }) => (
    <CardToDoStyle selected={selected}>
        <h3>Wymiana pieców XYZ</h3>
        {selected ? 'Termin: 2022.01.01 - Pozostało: 233 dni' : 'Termin: 2022.01.01'}
        <div className="buttonBar">
            <button type="button" className="button">
                {selected ? 'Zrobione!' : 'Przypnij'}
            </button>
            <button type="button" className="button">
                {selected ? 'Odepnij' : 'Usuń'}
            </button>
            <button type="button" className="button">
                Więcej
            </button>
        </div>
    </CardToDoStyle>
);

export default CardToDo;
