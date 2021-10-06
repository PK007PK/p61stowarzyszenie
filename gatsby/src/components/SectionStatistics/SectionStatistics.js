import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';

import { MdLocationCity } from '@react-icons/all-files/md/MdLocationCity';
import { BsFillPeopleFill } from '@react-icons/all-files/bs/BsFillPeopleFill';
import { GrDocumentStore } from '@react-icons/all-files/gr/GrDocumentStore';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SectionStatisticsStyle } from './SectionStatistics.style';

const SectionStatistics = () => {
    const data = useStaticQuery(graphql`
        {
            sanityPageDataHome {
                statisticsBackground {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const {
        sanityPageDataHome: {
            statisticsBackground: {
                asset: { gatsbyImageData },
            },
        },
    } = data;

    return (
        <SectionStatisticsStyle Tag="section">
            <GatsbyImage
                className="backgroundImage"
                image={gatsbyImageData}
                placeholder="blurred"
                alt=""
                formats={['auto', 'webp']}
                quality={50}
            />
            <BootsContainer>
                <BootsRow>
                    <BootsColumn md={4}>
                        <div className="cardContainer">
                            <div className="iconContainer">
                                <MdLocationCity className="icon" />
                            </div>
                            <p className="lead">
                                <span className="number">22</span>
                                <br />
                                Liczba obsługiwanych
                                <br />
                                gmin
                            </p>
                        </div>
                    </BootsColumn>
                    <BootsColumn md={4}>
                        <div className="cardContainer">
                            <div className="iconContainer">
                                <BsFillPeopleFill className="icon" />
                            </div>
                            <p className="lead">
                                <span className="number">521</span>
                                <br />
                                Ilość spotkań
                                <br />z mieszkańcami
                            </p>
                        </div>
                    </BootsColumn>
                    <BootsColumn md={4}>
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
        </SectionStatisticsStyle>
    );
};

export default SectionStatistics;
