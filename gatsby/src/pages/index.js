import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import SectionHero from 'src/components/SectionHero/SectionHero';

const IndexPage = ({ data }) => {
    const { title, description } = data.sanityPageDataHome;

    const textBlock = () => (
        <div>
            <h1>Stowarzyszenie XYZ</h1>
            <p className="lead">
                Wspieramy lokalne społeczności w obszarze zrównoważonego rozwoju, ekologii oraz transformacji
                energetycznej.
            </p>
        </div>
    );

    return (
        <Layout>
            <SEO title={title} description={description} />
            <SectionHero leftComponent={textBlock} />
            {/* <main>Lorem ipsumy</main> */}
        </Layout>
    );
};

export default IndexPage;
