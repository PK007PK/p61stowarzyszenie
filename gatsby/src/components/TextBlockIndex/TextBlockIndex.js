import React from 'react';
import { GrDocumentPdf } from '@react-icons/all-files/gr/GrDocumentPdf';
import iconPdf from 'src/assets/images/pdfSvg.svg';
import { ButtonStyle } from '../Button/Button';
import { TextBlockIndexStyle } from './TextBlockIndex.style';

const TextBlockIndex = ({ style, className }) => (
    <TextBlockIndexStyle style={style} className={className}>
        <h1 className="title">Stowarzyszenie EkoMonterzy</h1>
        <div className="tagBar">
            <div className="tagContainer">
                <span className="hash">#</span>technologie
            </div>
            <div className="tagContainer">
                <span className="hash">#</span>dotacje dla samorządu i obywateli
            </div>
            <div className="tagContainer">
                <span className="hash">#</span>doradztwo
            </div>
        </div>
        <p className="lead">
            Wspieramy lokalne społeczności w obszarze ekologii, transformacji energetycznej, zrównoważonego rozwoju.
        </p>
        <div className="bottomButtonsBar">
            <ButtonStyle className="bottomBtn" secondary>
                Poznaj nas
            </ButtonStyle>
            <ButtonStyle className="bottomBtn" padding="0 16px 0 16px">
                <img className="pdfIcon" src={iconPdf} alt="Broszura PDF EkoMonterzy" />
                {/* <GrDocumentPdf className="icon" style={{ color: 'white !important' }} /> */}
            </ButtonStyle>
        </div>
    </TextBlockIndexStyle>
);

export default TextBlockIndex;
