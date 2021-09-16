import React from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { SectionHeroStyle, StyledHeader } from './SectionHero.styles';

const SectionHero = ({ leftComponent }) => {
    const LeftComponent = leftComponent || null;
    const textElement = leftComponent && <LeftComponent />;
    return (
        <StyledHeader>
            <BootsContainer>
                <SectionHeroStyle>{textElement}</SectionHeroStyle>
            </BootsContainer>
        </StyledHeader>
    );
};

export default SectionHero;