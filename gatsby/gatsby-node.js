import { createBlogPages } from './src/gatsby/createBlogPages';
import { turnCategoriesIntoPages } from './src/gatsby/turnCategoriesIntoPages';
import { turnTagsIntoPages } from './src/gatsby/turnTagsIntoPages';

export async function createPages(params) {
    await Promise.all([createBlogPages(params)]);
    await Promise.all([turnCategoriesIntoPages(params)]);
    await Promise.all([turnTagsIntoPages(params)]);
}
