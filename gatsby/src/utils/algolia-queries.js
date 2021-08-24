const escapeStringRegexp = require('escape-string-regexp');

// const pagePath = ``;
const indexName = `BlogPagesIndex`;
const pageQuery = `{
  pages: allSanityBlogPosts {
    edges {
      node {
        name
        lead
        id
        richText {
            children {
              text
            }
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, name, lead, ...rest } }) {
    return {
        objectID: id,
        name,
        lead,
        ...rest,
    };
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
        indexName,
    },
];

module.exports = queries;
