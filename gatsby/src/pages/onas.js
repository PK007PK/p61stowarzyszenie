import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import SectionStatistics from '../components/SectionStatistics/SectionStatistics';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';
import HeroTextBlock from '../components/HeroTextBlock/HeroTextBlock';

const ONasPage = ({ data }) => {
    const {
        title,
        tags: heroTags,
        description,
        _rawRichText,
        image: {
            asset: { gatsbyImageData },
        },
    } = data.sanityPageONas;

    return (
        <Layout>
            <SEO title="O nas" />
            <HeroBackImage data={gatsbyImageData} />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} heroTags={heroTags} description={description} />}
            />
            <SEO title="Informacje o stowarzyszeniu" />

            <SectionOurProjects />
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
            <SectionStatistics />
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityPageONas {
            title
            tags
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
