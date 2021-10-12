import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import HeroBreakingNews from '../components/HeroBreakingNews/HeroBreakingNews';
import TextBlockONas from '../components/TextBlockONas/TextBlockONas';
import SectionStatistics from '../components/SectionStatistics/SectionStatistics';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';

const ONasPage = ({ data }) => {
    const {
        title,
        description,
        _rawRichText,
        image: {
            asset: { gatsbyImageData },
        },
    } = data.sanityONasPage;

    const Description = () => (
        <>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
        </>
    );
    return (
        <Layout>
            <SEO title="O nas" />
            <HeroBackImage data={gatsbyImageData} />
            {/* <HeroBreakingNews
                text="Uwaga! Dotacje na: wymianę pieców, pompy ciepła, panele fotowoltaiczne. Dyżur ekspera pod telefonem: 666 666 666"
                link="link"
            /> */}
            <SectionHero leftComponent={() => <Description />} />
            <SEO title="Informacje o stowarzyszeniu" />
            <SectionStatistics />
            <BootsContainer>
                <BootsRow>
                    <BootsColumn style={{ marginTop: '50px' }} md={7}>
                        <BlockContent
                            blocks={_rawRichText}
                            dataset="production"
                            url=""
                            projectId={process.env.SANITY_PROJECT_ID}
                        />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
            <SectionOurProjects />
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
            _rawRichText
        }
    }
`;

export default ONasPage;
