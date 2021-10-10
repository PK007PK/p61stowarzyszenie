import { MdLocationCity } from '@react-icons/all-files/md/MdLocationCity';
import { BsFillPeopleFill } from '@react-icons/all-files/bs/BsFillPeopleFill';
import { GrDocumentStore } from '@react-icons/all-files/gr/GrDocumentStore';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import React from 'react';
import { StatisticsStyle } from './Statistics.style';

const Statistics = () => (
    <StatisticsStyle>
        <BootsContainer>
            <BootsRow>
                <BootsColumn sm={4}>
                    <div className="cardContainer">
                        <div className="iconContainer">
                            <MdLocationCity className="icon" />
                        </div>
                        <p className="lead">
                            <span className="number">22</span>
                            <br />
                            obsługiwane
                            <br />
                            gminy
                        </p>
                    </div>
                </BootsColumn>
                <BootsColumn sm={4}>
                    <div className="cardContainer">
                        <div className="iconContainer">
                            <BsFillPeopleFill className="icon" />
                        </div>
                        <p className="lead">
                            <span className="number">521</span>
                            <br />
                            spotkań
                            <br />z mieszkańcami
                        </p>
                    </div>
                </BootsColumn>
                <BootsColumn sm={4}>
                    <div className="cardContainer">
                        <div className="iconContainer">
                            <GrDocumentStore className="icon" />
                        </div>
                        <p className="lead">
                            <span className="number">1221</span>
                            <br />
                            wykonane wnioski
                            <br />o dotacje
                        </p>
                    </div>
                </BootsColumn>
            </BootsRow>
        </BootsContainer>
    </StatisticsStyle>
);

export default Statistics;
