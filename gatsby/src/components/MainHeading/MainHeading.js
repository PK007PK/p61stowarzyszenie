import React, { useContext } from 'react';
import AppContext from 'src/AppProvider';
import { MainHeadingStyle, StyledButton } from './MainHeading.style.js';

const MainHeading = ({ title, style }) => {
    const { group, setGroup } = useContext(AppContext);

    return (
        <MainHeadingStyle style={style}>
            <h2 className="heading">{title}</h2>
            <div className="buttonsWrapper">
                <StyledButton onClick={() => setGroup('mieszkańcy')} className="button" type="button">
                    Dla mieszkańców
                </StyledButton>
                <StyledButton onClick={() => setGroup('gminy')} className="button" type="button">
                    Dla gmin
                </StyledButton>
                <StyledButton onClick={() => setGroup('przedsiębiorstwa')} className="button" type="button">
                    Dla przedsiębiorców
                </StyledButton>
            </div>
        </MainHeadingStyle>
    );
};

export default MainHeading;
