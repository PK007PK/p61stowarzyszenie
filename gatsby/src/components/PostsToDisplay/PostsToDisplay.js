import { Link } from 'gatsby';
import React from 'react';
import CardBlogEntry from '../CardBlogEntry/CardBlogEntry';
import { PostsToDisplayStyles } from './PostsToDisplay.style';

const PostsToDisplay = ({ data }) => (
    <PostsToDisplayStyles>
        {data
            .filter((item) => item.date !== null)
            .map((item) => (
                <Link key={item.slug.current} to={`/${item.slug.current}`}>
                    <CardBlogEntry data={item} />
                </Link>
            ))}
    </PostsToDisplayStyles>
);

export default PostsToDisplay;
