import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import SectionHero from 'src/components/SectionHero/SectionHero';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';

const IndexPage = ({ data }) => {
    const { title, description } = data.sanityPageDataHome;

    const textBlock = () => (
        <div>
            <h1>Stowarzyszenie XYZ</h1>
            <p className="lead">{description}</p>
        </div>
    );

    return (
        <Layout>
            <SEO title={title} description={description} />
            <SectionHero leftComponent={textBlock} />
            <SectionOurProjects />
            {/* <main>Lorem ipsumy</main> */}
        </Layout>
    );
};

export const data = graphql`
    query HomeQuery {
        sanityPageDataHome {
            title
            description
        }
    }
`;

export default IndexPage;
