import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';

const IndexPage = ({ data }) => {
    const { title, description } = data.sanityPageDataHome;
    return (
        <Layout>
            <SEO title={title} description={description} />
            <main>Lorem ipsumy</main>
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
