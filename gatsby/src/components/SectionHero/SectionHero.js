import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { SectionHeroStyle, StyledHeader } from './SectionHero.styles';

const SectionHero = ({ leftComponent }) => {
    const LeftComponent = leftComponent || null;
    const textElement = leftComponent && <LeftComponent />;
    return (
        <StyledHeader>
            <BootsContainer>
                <SectionHeroStyle>
                    <BootsRow className="firstRow">
                        <BootsColumn md={7}>{textElement}</BootsColumn>
                    </BootsRow>
                </SectionHeroStyle>
            </BootsContainer>
        </StyledHeader>
    );
};

export default SectionHero;
