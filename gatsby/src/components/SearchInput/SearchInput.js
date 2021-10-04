import React from 'react';

import { SearchInputStyle } from './SearchInput.Style';
import Heading from '../Heading/Heading';

const SearchInput = () => (
    <SearchInputStyle>
        <h3>Wyszukaj w serwisie:</h3>
        <input placeholder="Wyszukaj..." />
    </SearchInputStyle>
);

export default SearchInput;
