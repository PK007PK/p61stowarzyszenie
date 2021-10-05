import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { SectionStatisticsStyle } from './SectionStatistics.style';

const SectionStatistics = () => (
    <SectionStatisticsStyle>
        <BootsContainer>
            <BootsRow>
                <BootsColumn md={4}>
                    <p className="lead">
                        Liczba obsługiwanych
                        <br />
                        gmin:
                        <br />
                        <span>22</span>
                    </p>
                </BootsColumn>
                <BootsColumn md={4}>
                    <p className="lead">
                        Ilość spotkań
                        <br />z mieszkańcami
                        <br />
                        <span>521</span>
                    </p>
                </BootsColumn>
                <BootsColumn md={4}>
                    <p className="lead">
                        Sporządzone wnioski
                        <br />o dotacje
                        <br />
                        <span>521</span>
                    </p>
                </BootsColumn>
            </BootsRow>
        </BootsContainer>
    </SectionStatisticsStyle>
);

export default SectionStatistics;
