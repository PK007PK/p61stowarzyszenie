import React from 'react';
import { CardBestPracticeStyle } from './CardBestPractice.style';

const CardToDo = ({ selected }) => (
    <CardBestPracticeStyle selected={selected}>
        <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper turpis ante, ac sollicitudin magna
            pharetra sit amet.{' '}
        </h4>

        <div className="buttonBar">
            <button type="button" className="button">
                Zrobione!
            </button>
            <button type="button" className="button">
                {selected ? 'Odepnij' : 'Usuń'}
            </button>
            <button type="button" className="button">
                Więcej
            </button>
        </div>
    </CardBestPracticeStyle>
);

export default CardToDo;
