import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import HeroBreakingNews from '../components/HeroBreakingNews/HeroBreakingNews';
import TextBlockONas from '../components/TextBlockONas/TextBlockONas';
import SectionStatistics from '../components/SectionStatistics/SectionStatistics';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';

const ONasPage = ({ data }) => {
    const {
        title,
        description,
        image: {
            asset: { gatsbyImageData },
        },
    } = data.sanityONasPage;
    return (
        <Layout>
            <SEO title="O nas" />
            <HeroBackImage data={gatsbyImageData} />
            <HeroBreakingNews
                text="Uwaga! Dotacje na: wymianę pieców, pompy ciepła, panele fotowoltaiczne. Dyżur ekspera pod telefonem: 666 666 666"
                link="link"
            />
            <SectionHero leftComponent={() => <TextBlockONas />} />
            <SEO title="Informacje o stowarzyszeniu" />
            <BootsContainer>
                <BootsRow>
                    <BootsColumn md={7}>
                        <p>Stowarzyszenie EkoMonterzy powstało w roku 2016.</p>
                        <p>
                            Misją stowarzyszenia jest prowadzenie działań wspierających lokalne społeczności w obszarze
                            zrównoważonego rozwoju, ekologii, oraz transformacji energetycznej.
                        </p>
                        <p>Stowarzyszenie realizuje następujące cele statutowe:</p>
                        <ul>
                            <li>
                                1. Prowadzi działalność edukacyjną w obszarze upowszechniania polityk zrównoważonego
                                rozwoju, modernizacji gospodarki  energetycznej, ochrony środowiska;
                            </li>
                            <li>
                                2.Realizuje działania doradcze na rzecz osób fizycznych, samorządu, przedsiębiorców,
                                których celem jest ochrona środowiska naturalnego i zapewnienie mu bioróżnorodności;
                            </li>
                            <li>
                                3. Realnym efektem podejmowanych przez stowarzyszenie inicjatyw jest redukcja emisji
                                CO2, a także poprawa stanu środowiska naturalnego.  Pragniemy aby efektem prowadzonych
                                przez nas działań była realna poprawa stanu środowiska naturalnego, upowszechnianie
                                postaw charakteryzujących się dbałością o dobro wspólne, stałym upowszechnianiem
                                know-how w zakresie rozwiązań technologicznych i organizacyjnych służących ochronie
                                środowiska. 
                            </li>
                        </ul>
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
            <SectionOurProjects />
            <SectionStatistics />
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityONasPage {
            title
            description
            image {
                asset {
                    gatsbyImageData(width: 400)
                }
            }
        }
    }
`;

export default ONasPage;
