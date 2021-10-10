import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { SectionHeroStyle, StyledHeader } from './SectionHero.styles';

const SectionHero = ({ leftComponent }) => {
    const LeftComponent = leftComponent;
    return (
        <StyledHeader>
            <BootsContainer>
                <SectionHeroStyle>
                    <BootsRow className="firstRow">
                        <BootsColumn xs={9} sm={9} md={8}>
                            <LeftComponent />
                        </BootsColumn>
                    </BootsRow>
                </SectionHeroStyle>
            </BootsContainer>
        </StyledHeader>
    );
};

export default SectionHero;
