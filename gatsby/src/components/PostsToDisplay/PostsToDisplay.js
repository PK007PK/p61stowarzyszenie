import { Link } from 'gatsby';
import React from 'react';
import CardBlogEntry from '../CardBlogEntry/CardBlogEntry';
import { PostsToDisplayStyles } from './PostsToDisplay.style';

const PostsToDisplay = ({ data }) => (
    <PostsToDisplayStyles>
        {data
            .filter((item) => item.date !== null)
            .map((item) => (
                <CardBlogEntry key={item.slug.current} data={item} />
            ))}
    </PostsToDisplayStyles>
);

export default PostsToDisplay;
