import React from 'react';
import { GrDocumentPdf } from '@react-icons/all-files/gr/GrDocumentPdf';
import iconPdf from 'src/assets/images/pdfSvg.svg';
import { Link } from 'gatsby';
import { ButtonStyle } from '../Button/Button';
import { TextBlockIndexStyle } from './TextBlockIndex.style';

const TextBlockIndex = ({ style, className }) => (
    <TextBlockIndexStyle style={style} className={className}>
        <h1 className="title">Stowarzyszenie EkoMonterzy</h1>
        <div className="tagBar">
            <div className="tagContainer">#doradztwo</div>
            <div className="tagContainer">#dotacje dla samorządu</div>
            <div className="tagContainer">#dotacje dla obywateli</div>
        </div>
        <p className="lead">
            Wspieramy lokalne społeczności w obszarze ekologii, transformacji energetycznej, zrównoważonego rozwoju.
        </p>
        <div className="bottomButtonsBar">
            <Link to="/onas">
                <ButtonStyle className="bottomBtn" secondary>
                    Poznaj nas
                </ButtonStyle>
            </Link>
            <a href="/Broszura.pdf" target="_blank" rel="noopener noreferrer">
                <ButtonStyle className="bottomBtn" padding="0 16px 0 16px">
                    <img className="pdfIcon" src={iconPdf} alt="Broszura PDF EkoMonterzy" />
                </ButtonStyle>{' '}
            </a>
        </div>
    </TextBlockIndexStyle>
);

export default TextBlockIndex;
