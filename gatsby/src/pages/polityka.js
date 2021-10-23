import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import FormContact from 'src/components/FormContact/FormContact';
import BlockContent from '@sanity/block-content-to-react';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import HeroTextBlock from '../components/HeroTextBlock/HeroTextBlock';

const PolitykaPage = ({ data }) => {
    const {
        title,
        tags: heroTags,
        description,
        image: {
            asset: { gatsbyImageData },
        },
        _rawRichText,
    } = data.sanityPagePolityka;

    return (
        <Layout>
            <SEO title="Kontakt" />
            <HeroBackImage data={gatsbyImageData} />
            <SectionHero
                leftComponent={() => <HeroTextBlock title={title} heroTags={heroTags} description={description} />}
            />
            <BootsContainer>
                <BootsRow between style={{ margin: '50px 0 50px' }}>
                    <BootsColumn md={6}>
                        <BlockContent
                            blocks={_rawRichText}
                            dataset="production"
                            url=""
                            projectId={process.env.SANITY_PROJECT_ID}
                        />
                    </BootsColumn>
                    <BootsColumn md={5}>
                        <FormContact />
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export const pageQuery = graphql`
    query {
        sanityPagePolityka {
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

export default PolitykaPage;
