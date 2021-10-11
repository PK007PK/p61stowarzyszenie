import React from 'react';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import { graphql } from 'gatsby';
import FormContact from 'src/components/FormContact/FormContact';
import BlockContent from '@sanity/block-content-to-react';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import HeroBreakingNews from '../components/HeroBreakingNews/HeroBreakingNews';
import TextBlockONas from '../components/TextBlockONas/TextBlockONas';

const KontaktPage = ({ data }) => {
    const {
        title,
        description,
        image: {
            asset: { gatsbyImageData },
        },
        _rawRichText,
    } = data.sanityKontaktPage;

    const Description = () => (
        <>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
        </>
    );

    return (
        <Layout>
            <SEO title="Kontakt" />
            <HeroBackImage data={gatsbyImageData} />
            <SectionHero leftComponent={() => <Description />} />
            <BootsContainer>
                <BootsRow between style={{ marginTop: '50px' }}>
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
        sanityKontaktPage {
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

export default KontaktPage;
