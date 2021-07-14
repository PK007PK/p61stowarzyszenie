import path from 'path';
import projectConfig from '../projectConfig';

export async function turnCategoriesIntoPages({ graphql, actions }) {
    // 1. Get the template
    const categoryTemplate = path.resolve('./src/pages/blog.js');

    // 2. query all the categories
    const { data } = await graphql(`
        query {
            allSanityBlogPostsCategories {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const allCategoriesDetails = data.allSanityBlogPostsCategories.nodes;

    // 3. createPage

    const createCategories = allCategoriesDetails.map(async (category) => {
        async function findHowManyPostsInCategory() {
            const selectCategory = `"${category.name}"`;
            const dataWithAllPostsInCategory = await graphql(`
                        query myQuery {
                            allSanityBlogPosts(
                                filter: {
                                categories: {elemMatch: {name: {eq: ${selectCategory}}}}}
                            )
                            {
                                totalCount
                            }
                        }
                    `);
            const numberOfPosts = dataWithAllPostsInCategory.data.allSanityBlogPosts.totalCount;
            return numberOfPosts;
        }

        const numberOfPostsInCategory = await findHowManyPostsInCategory();
        const pageSize = projectConfig.pagesAmountInSet;
        const numberOfPages = Math.ceil(numberOfPostsInCategory / pageSize);

        Array.from({ length: numberOfPages }).map((_, i) => {
            actions.createPage({
                path: `/${category.slug.current}/${i + 1}`,
                component: categoryTemplate,
                context: {
                    skip: i * pageSize,
                    currentPage: i + 1,
                    pageSize,
                    selectPosts: `/${category.slug.current}/i`,
                    selectionName: category.name,
                    pageType: 'allPostsInCategory',
                    dirName: `/${category.slug.current}`,
                },
            });
        });
    });
    await Promise.all(createCategories);
}
