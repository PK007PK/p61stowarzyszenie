import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { PaginationStyle } from './Pagination.style';

export default function Pagination({ pageSize, totalCount, currentPage, skip, base, className, style, location }) {
    // make some variables
    const totalPages = Math.ceil(totalCount / pageSize);
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    const hasPrevPage = prevPage >= 1;
    const checkLocation = location?.pathname.split('/');
    const [pageNo, setPageNo] = useState();

    // useEffect(() => {
    //     location && setPageNo(location.pathname.split('/')[1]);
    // }, []);

    // const checkLocation = location.pathname.split('/')[1];
    // console.log(pageNo?.length);

    return (
        <PaginationStyle style={style} className={className}>
            {Array.from({ length: totalPages }).map((_, i) => (
                <Link
                    className={currentPage === 1 && i === 0 ? 'current' : ''}
                    to={`${base}${i >= 0 ? i + 1 : ''}#blog`}
                    key={`page${i}`}
                >
                    {i + 1}
                </Link>
            ))}
        </PaginationStyle>
    );
}
