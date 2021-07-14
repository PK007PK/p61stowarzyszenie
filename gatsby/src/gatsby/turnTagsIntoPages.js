import path from 'path';
import projectConfig from '../projectConfig';

export async function turnTagsIntoPages({ graphql, actions }) {
    // 1. Get the template
    const tagTemplate = path.resolve('./src/pages/blog.js');

    // 2. query all the categories
    const { data } = await graphql(`
        query {
            allSanityBlogPostsTags(sort: { order: ASC, fields: name }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const allTagsDetails = data.allSanityBlogPostsTags.nodes;

    // 3. createPage
    const createTags = allTagsDetails.map(async (tag) => {
        async function findHowManyPostsInTag() {
            const selectTag = `"${tag.name}"`;

            const dataWithAllPostsInTag = await graphql(`
              query myQuery {
                allSanityBlogPosts(
                  filter: {
                    tags: {elemMatch: {name: {eq: ${selectTag}}}}
                }) 
                {
                  totalCount
                }
              }
            `);
            const numberOfPosts = dataWithAllPostsInTag.data.allSanityBlogPosts.totalCount;
            return numberOfPosts;
        }

        const numberOfPostsInTag = await findHowManyPostsInTag();
        const pageSize = projectConfig.pagesAmountInSet;
        const pageCount = Math.ceil(numberOfPostsInTag / pageSize);

        Array.from({ length: pageCount }).map((_, i) => {
            actions.createPage({
                path: `/${tag.slug.current}/${i + 1}`,
                component: tagTemplate,
                context: {
                    skip: i * pageSize,
                    currentPage: i + 1,
                    pageSize,
                    selectPosts: `/${tag.slug.current}/i`,
                    selectionName: tag.name,
                    pageType: 'allPostsInTag',
                    dirName: `/${tag.slug.current}`,
                },
            });
        });
    });
    await Promise.all(createTags);
}
