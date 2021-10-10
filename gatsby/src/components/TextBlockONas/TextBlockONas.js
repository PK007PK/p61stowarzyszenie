import React from 'react';
import { GrDocumentPdf } from '@react-icons/all-files/gr/GrDocumentPdf';
import iconPdf from 'src/assets/images/pdfSvg.svg';
import { Link } from 'gatsby';
import { ButtonStyle } from '../Button/Button';
import { TextBlockONasStyle } from './TextBlockONas.style';

const TextBlockONas = ({ style, className }) => (
    <TextBlockONasStyle style={style} className={className}>
        <h1 className="title">Stowarzyszenie EkoMonterzy</h1>
        <div className="tagBar">
            <div className="tagContainer">
                <span className="hash">#</span>Poznaj nas
            </div>
        </div>
        <p className="lead">
            Wspieramy lokalne społeczności w obszarze ekologii, transformacji energetycznej, zrównoważonego rozwoju.
        </p>
        <div className="bottomButtonsBar" />
    </TextBlockONasStyle>
);

export default TextBlockONas;
