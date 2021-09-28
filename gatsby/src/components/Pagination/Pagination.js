import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationStyles = styled.div`
    margin-top: var(--spacingRegular);
    display: flex;
    flex-wrap: wrap;

    & > * {
        display: inline-block;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: var(--transitionBasic);

        &:hover,
        &[aria-current],
        &.current {
            box-shadow: ${({ theme }) => theme.elevationSpecial.dp8};
            background-color: var(--colorDarkGray);
            color: var(--colorWhite);
            border: none;
        }
    }

    & > *:not(:last-child) {
        margin-right: var(--spacingSmall);
    }
`;

export default function Pagination({ pageSize, totalCount, currentPage, skip, base, className, style }) {
    // make some variables
    const totalPages = Math.ceil(totalCount / pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    console.log(base);
    return (
        <PaginationStyles style={style} className={className}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                    className={currentPage === 1 && i === 0 ? 'current' : ''}
                    to={`${base}${i >= 0 ? i + 1 : ''}`}
                    key={`page${i}`}
                >
                    {i + 1}
                </Link>
            ))}
        </PaginationStyles>
    );
}
