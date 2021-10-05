import React from 'react';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import { CardBestPracticeStyle } from './CardBestPractice.style';

const CardToDo = ({ selected }) => (
    <CardBestPracticeStyle selected={selected}>
        <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper turpis ante, ac sollicitudin magna
            pharetra sit amet.{' '}
        </h4>

        <div className="buttonBar">
            <ButtonSmall bottomRounded type="button" className="button">
                Zrobione!
            </ButtonSmall>
            <ButtonSmall bottomRounded type="button" className="button">
                {selected ? 'Odepnij' : 'Usuń'}
            </ButtonSmall>
            <ButtonSmall bottomRounded type="button" className="button">
                Więcej
            </ButtonSmall>
        </div>
    </CardBestPracticeStyle>
);

export default CardToDo;